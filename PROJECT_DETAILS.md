# Karan Panchal Portfolio - Documentation & Deployment Guide

This document provides a comprehensive overview of the project structure, dependencies, and a step-by-step guide on how to host this portfolio for free.

---

## 1. System Architecture
The project is built using a **Full-Stack MERN-lite** architecture:
- **Frontend:** React (Vite) for a fast, modern UI.
- **Backend:** Node.js + Express.js to serve data via a REST API.
- **Styling:** Vanilla CSS with a Cyberpunk/Security theme.
- **Icons:** Lucide-React for professional, scalable security icons.

---

## 2. Directory Structure Detail

```text
Portfolio/
├── backend/                # Node.js API Server
│   ├── data.js             # SOURCE OF TRUTH: All your resume data
│   ├── server.js           # Express server logic and routing
│   └── package.json        # Backend dependencies (express, cors, dotenv)
├── frontend/               # React User Interface
│   ├── public/             # Static assets (favicon, etc.)
│   ├── src/
│   │   ├── assets/         # Images (profile.jpg) and icons
│   │   ├── components/     # MODULAR UI (Navbar, Hero, Experience, etc.)
│   │   ├── App.jsx         # Orchestrator (Fetches data & renders components)
│   │   ├── App.css         # GLOBAL STYLES (Colors, Layout, Animations)
│   │   └── main.jsx        # React Entry Point
│   ├── vite.config.js      # Proxy settings for API
│   └── package.json        # Frontend dependencies (react, axios, lucide)
```

---

## 3. Core Dependencies

### Frontend
- **React 19:** UI Library.
- **Vite:** High-performance build tool.
- **Axios:** For fetching data from your Backend API.
- **Lucide-React:** Security-themed icons (Shield, Lock, Activity, etc.).

### Backend
- **Express:** Web framework for the API.
- **CORS:** Allows your Frontend to talk to your Backend safely.
- **Dotenv:** Manages environment variables (like PORT).

---

## 4. How to Host for FREE (Github + Render)

Because this project has a **Backend**, you cannot host the *whole* thing on GitHub Pages alone (which only supports static files). You need two free services:

### Step A: Upload to GitHub
1. Create a new repository on GitHub.
2. Open your terminal in the `Portfolio/` root folder.
3. Run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

### Step B: Host the BACKEND (on Render.com)
1. Sign up for a free account at [Render.com](https://render.com).
2. Click **New +** -> **Web Service**.
3. Connect your GitHub Repo.
4. **Root Directory:** `backend`
5. **Build Command:** `npm install`
6. **Start Command:** `node server.js`
7. Render will give you a URL (e.g., `https://karan-api.onrender.com`). **Copy this.**

### Step C: Update Frontend & Host (on GitHub Pages)
1. In `frontend/src/App.jsx`, change your axios call to use your Render URL:
   ```javascript
   // Change this:
   const response = await axios.get('/api/portfolio');
   // To this:
   const response = await axios.get('https://karan-api.onrender.com/api/portfolio');
   ```
2. In `frontend/package.json`, add this line:
   `"homepage": "https://yourusername.github.io/your-repo-name",`
3. Install the deployment tool: `npm install --save-dev gh-pages`
4. Add these scripts to `frontend/package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
5. Run: `npm run deploy`

---

## 5. Maintenance
To change your resume content, simply edit **`backend/data.js`**, push the change to GitHub, and Render will automatically update your live site.
