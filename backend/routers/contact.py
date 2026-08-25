import os
import re
import smtplib
from email.message import EmailMessage

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

try:
    from pydantic import EmailStr
except ImportError:
    EmailStr = str

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

    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    receiver_email = os.getenv("RECEIVER_EMAIL", "shubhamjadhav7705@gmail.com")

    # Check for unconfigured placeholder values
    if (
        not smtp_user
        or not smtp_password
        or smtp_user == "your_email@gmail.com"
        or smtp_password == "your_gmail_app_password"
    ):
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

    try:
        with smtplib.SMTP(smtp_host, smtp_port, timeout=15) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(message)
    except Exception:
        raise HTTPException(
            status_code=502,
            detail="Failed to send the message. Please try again or email shubhamjadhav7705@gmail.com directly.",
        )

    return {"status": "sent", "message": "Message delivered successfully."}
