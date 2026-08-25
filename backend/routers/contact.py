import json
import logging
import os
import re
import smtplib
import ssl
import urllib.error
import urllib.request
from email.message import EmailMessage

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

logger = logging.getLogger("uvicorn.error")

router = APIRouter(prefix="/api")

EMAIL_REGEX = re.compile(r"^[\w\.-]+@[\w\.-]+\.\w+$")


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: str = Field(min_length=5, max_length=100)
    message: str = Field(min_length=10, max_length=2000)


@router.post("/contact")
async def send_contact_message(payload: ContactRequest):
    if not EMAIL_REGEX.match(payload.email):
        raise HTTPException(status_code=422, detail="Invalid email address format.")

    receiver_email = (os.getenv("RECEIVER_EMAIL") or "shubhamjadhav7705@gmail.com").strip()
    resend_api_key = (os.getenv("RESEND_API_KEY") or "").strip()

    # 1. Primary Cloud Method: Resend API (HTTPS Port 443 - Never blocked on Render)
    if resend_api_key and resend_api_key != "your_resend_api_key":
        try:
            url = "https://api.resend.com/emails"
            email_payload = {
                "from": "Portfolio Contact <onboarding@resend.dev>",
                "to": [receiver_email],
                "reply_to": payload.email,
                "subject": f"Portfolio Contact: {payload.name}",
                "text": (
                    f"Name: {payload.name}\n"
                    f"Email: {payload.email}\n\n"
                    f"Message:\n{payload.message}\n"
                ),
            }
            req = urllib.request.Request(
                url,
                data=json.dumps(email_payload).encode("utf-8"),
                headers={
                    "Authorization": f"Bearer {resend_api_key}",
                    "Content-Type": "application/json",
                    "User-Agent": "FastAPI-Portfolio/1.0",
                },
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=12) as response:
                if response.status in (200, 201):
                    logger.info("Message sent successfully via Resend API.")
                    return {"status": "sent", "message": "Message delivered successfully."}
        except urllib.error.HTTPError as http_err:
            error_body = http_err.read().decode("utf-8", errors="ignore")
            logger.error(f"Resend API HTTP Error ({http_err.code}): {error_body}")
            raise HTTPException(
                status_code=502,
                detail=f"Email delivery service error. Please email {receiver_email} directly.",
            )
        except Exception as exc:
            logger.error(f"Resend API request failed: {exc}")

    # 2. Secondary Method: Direct SMTP (Works locally; blocked on Render Free Tier)
    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com").strip()
    smtp_port = int(os.getenv("SMTP_PORT", "587").strip())
    smtp_user = (os.getenv("SMTP_USER") or "").strip()
    smtp_password = (os.getenv("SMTP_PASSWORD") or "").replace(" ", "").strip()

    # Check for unconfigured credentials
    if (
        not smtp_user
        or not smtp_password
        or smtp_user == "your_email@gmail.com"
        or smtp_password == "your_gmail_app_password"
    ):
        if not resend_api_key:
            logger.warning("Contact message received but neither RESEND_API_KEY nor SMTP is configured.")
            raise HTTPException(
                status_code=503,
                detail=f"Email service is not configured. Please contact {receiver_email} directly.",
            )

    message = EmailMessage()
    message["Subject"] = f"Portfolio Contact: {payload.name}"
    message["From"] = smtp_user
    message["To"] = receiver_email
    message["Reply-To"] = payload.email
    message.set_content(
        f"Name: {payload.name}\n"
        f"Email: {payload.email}\n\n"
        f"Message:\n{payload.message}\n"
    )

    context = ssl.create_default_context()
    sent = False
    last_error = None

    try:
        if smtp_port == 465:
            with smtplib.SMTP_SSL(smtp_host, 465, timeout=12, context=context) as server:
                server.login(smtp_user, smtp_password)
                server.send_message(message)
        else:
            with smtplib.SMTP(smtp_host, smtp_port, timeout=12) as server:
                server.starttls(context=context)
                server.login(smtp_user, smtp_password)
                server.send_message(message)
        sent = True
    except smtplib.SMTPAuthenticationError as auth_err:
        logger.error(f"SMTP Authentication Error: {auth_err}")
        raise HTTPException(
            status_code=502,
            detail="SMTP Authentication failed. Please verify your Gmail App Password.",
        )
    except Exception as exc:
        logger.warning(f"Initial SMTP attempt on port {smtp_port} failed: {exc}. Trying fallback...")
        last_error = exc

    # Fallback to alternate port
    if not sent:
        fallback_port = 465 if smtp_port != 465 else 587
        try:
            if fallback_port == 465:
                with smtplib.SMTP_SSL(smtp_host, 465, timeout=12, context=context) as server:
                    server.login(smtp_user, smtp_password)
                    server.send_message(message)
            else:
                with smtplib.SMTP(smtp_host, fallback_port, timeout=12) as server:
                    server.starttls(context=context)
                    server.login(smtp_user, smtp_password)
                    server.send_message(message)
            sent = True
            logger.info(f"SMTP delivered successfully on port {fallback_port}.")
        except Exception as exc:
            logger.error(f"Fallback SMTP failed: {exc}")
            last_error = exc

    if not sent:
        logger.error(f"Failed to send email via SMTP: {last_error}")
        raise HTTPException(
            status_code=502,
            detail=f"Outbound SMTP is restricted on this cloud host. Please email {receiver_email} directly or set RESEND_API_KEY on Render.",
        )

    return {"status": "sent", "message": "Message delivered successfully."}
