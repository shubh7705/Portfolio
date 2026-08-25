import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import contact, projects

load_dotenv()

app = FastAPI(
    title="Shubham Jadhav Portfolio API",
    version="1.0.0",
)

frontend_origin = os.getenv("FRONTEND_ORIGIN", "*")

if frontend_origin == "*" or not frontend_origin.strip():
    allow_origins = ["*"]
else:
    allow_origins = [origin.strip() for origin in frontend_origin.split(",") if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allow_origins,
    allow_credentials=True if frontend_origin != "*" else False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)
app.include_router(contact.router)


@app.get("/api/health")
async def health_check():
    return {"status": "ok"}
