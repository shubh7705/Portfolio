from fastapi import APIRouter

from data import PROJECTS

router = APIRouter(prefix="/api")


@router.get("/projects")
async def get_projects():
    return PROJECTS
