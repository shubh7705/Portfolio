import logging
import os
import re
import smtplib
import ssl
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

    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com").strip()
    smtp_port = int(os.getenv("SMTP_PORT", "587").strip())
    smtp_user = (os.getenv("SMTP_USER") or "").strip()
    # Strip spaces in case 16-character app password was pasted with spaces: "xxxx xxxx xxxx xxxx"
    smtp_password = (os.getenv("SMTP_PASSWORD") or "").replace(" ", "").strip()
    receiver_email = (os.getenv("RECEIVER_EMAIL") or "shubhamjadhav7705@gmail.com").strip()

    # Check for unconfigured placeholder values
    if (
        not smtp_user
        or not smtp_password
        or smtp_user == "your_email@gmail.com"
        or smtp_password == "your_gmail_app_password"
    ):
        logger.warning("Contact email attempted but SMTP credentials are not configured.")
        raise HTTPException(
            status_code=503,
            detail="Email service is not configured on the server yet. Please reach out directly to shubhamjadhav7705@gmail.com.",
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

    # Attempt sending via SMTP
    context = ssl.create_default_context()
    sent = False
    last_error = None

    # 1. Try configured port / method
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
            detail="SMTP Authentication failed. Please verify your Gmail address and 16-character App Password.",
        )
    except Exception as exc:
        logger.warning(f"Initial SMTP attempt on port {smtp_port} failed: {exc}. Trying fallback port...")
        last_error = exc

    # 2. Fallback attempt: if 587 failed, try 465 (or vice versa)
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
            logger.info(f"SMTP successfully delivered using fallback port {fallback_port}.")
        except Exception as exc:
            logger.error(f"Fallback SMTP failed: {exc}")
            last_error = exc

    if not sent:
        logger.error(f"Failed to send email via SMTP: {last_error}")
        raise HTTPException(
            status_code=502,
            detail="Failed to send message via mail server. Please email shubhamjadhav7705@gmail.com directly.",
        )

    return {"status": "sent", "message": "Message delivered successfully."}
