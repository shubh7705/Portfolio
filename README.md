# Shubham Jadhav — Portfolio

Personal portfolio website with a React frontend and a FastAPI backend.

- **Frontend:** React 18 + Vite + Tailwind CSS (deployed on Vercel)
- **Backend:** FastAPI — serves project data (`GET /api/projects`), contact form via Gmail SMTP (`POST /api/contact`), health check (`GET /api/health`) (deployed on Render)

## Project Structure

```
Portfolio/
├── frontend/          # React + Vite + Tailwind
│   └── src/components # Navbar, Hero, Skills, Projects, Contact, Footer
└── backend/           # FastAPI
    ├── main.py        # App entry, CORS
    ├── data.py        # Project content served by the API
    └── routers/       # projects.py, contact.py (SMTP)
```

## Local Development

### 1. Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate          # Windows  (Linux/macOS: source .venv/bin/activate)
pip install -r requirements.txt
copy .env.example .env          # then fill in SMTP credentials
uvicorn main:app --reload       # runs at http://127.0.0.1:8000
```

The frontend dev server proxies `/api` requests to `http://127.0.0.1:8000`, so no extra config is needed locally.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev                     # runs at http://localhost:5173
```

## Gmail App Password Setup

1. Enable 2-Step Verification on your Google account.
2. Go to https://myaccount.google.com/apppasswords and create an app password.
3. Put it in `backend/.env` as `SMTP_PASSWORD`.

## Deployment

### Backend → Render

1. Create a new **Web Service** from your GitHub repo.
2. Root directory: `backend`
3. Build command: `pip install -r requirements.txt`
4. Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Add environment variables: `SMTP_USER`, `SMTP_PASSWORD`, `RECEIVER_EMAIL`, `FRONTEND_ORIGIN` (set to your Vercel URL).

### Frontend → Vercel

1. Import the repo into Vercel.
2. Root directory: `frontend`
3. Framework preset: Vite (build: `npm run build`, output: `dist`)
4. Environment variable: `VITE_API_URL=https://<your-render-app>.onrender.com`

## Contact Form Flow

Contact form → `POST /api/contact` → validated with Pydantic → sent to your inbox via Gmail SMTP with `Reply-To` set to the sender's email.
