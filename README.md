# SIRA HR — Website

Marketing website for **SIRA HR**, a specialist recruitment & HR consulting firm in Lagos, Nigeria.

It is a **MERN + TypeScript** project:

| Part     | Folder    | Tech                                                                   | Hosted on |
| -------- | --------- | ---------------------------------------------------------------------- | --------- |
| Frontend | `client/` | React 19, TypeScript, Vite 8, Tailwind CSS 4, React Router 8, Motion, React Icons | Vercel    |
| Backend  | `server/` | Node.js, Express 5, TypeScript, Mongoose 9 (MongoDB), Zod 4            | Render    |
| Database | —         | MongoDB (use a free MongoDB Atlas cluster)                             | Atlas     |

---

## Project structure

```
sira-hr/
├── package.json          one command to run client + server together
├── render.yaml           Render settings for the backend
├── client/               React frontend
│   ├── vercel.json       makes page refreshes work on Vercel
│   └── src/
│       ├── main.tsx      app entry
│       ├── App.tsx       list of pages (routes)
│       ├── index.css     colours, fonts and dark mode
│       ├── components/   reusable pieces (Navbar, Footer, Button, forms…)
│       ├── pages/        one file per page
│       └── lib/
│           ├── api.ts    functions that call the backend
│           ├── data.ts   all the website text (services, jobs, insights…)
│           ├── theme.ts  light / dark mode helpers
│           └── ui.ts     shared Tailwind class strings
└── server/               Express backend
    └── src/
        ├── index.ts      starts Express and connects to MongoDB
        ├── routes/api.ts the API endpoints
        ├── models/       Mongoose models (Contact, Booking, Application, Subscriber)
        └── lib/validate.ts  Zod rules that check form data
```

---

## Run it on your computer

**You need:** Node.js **22.22 or newer** (Node 24 LTS recommended) and a MongoDB database
(a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster, or MongoDB installed locally).

```bash
# 1. Install everything
npm run install:all

# 2. Create the environment files
cp server/.env.example server/.env
cp client/.env.example client/.env

# 3. Put your MongoDB connection string in server/.env (MONGODB_URI=...)

# 4. Start the backend (port 4000) and frontend (port 5173)
npm run dev
```

Open **http://localhost:5173**.

### Environment variables

`server/.env`

| Name          | Example                                     | What it is |
| ------------- | ------------------------------------------- | ---------- |
| `PORT`        | `4000`                                      | Port the API runs on (Render sets this for you) |
| `MONGODB_URI` | `mongodb+srv://user:pass@cluster.mongodb.net/sira-hr` | Your MongoDB connection string |
| `CLIENT_URL`  | `http://localhost:5173`                     | Website address(es) allowed to call the API. Separate several with commas |

`client/.env`

| Name           | Example                 | What it is |
| -------------- | ----------------------- | ---------- |
| `VITE_API_URL` | `http://localhost:4000` | Address of the backend |

---

## Deploy

Deploy the **backend first**, because the frontend needs its URL.

### 1. Database — MongoDB Atlas

1. Create a free cluster on MongoDB Atlas.
2. Create a database user and copy the connection string.
3. Under **Network Access**, allow `0.0.0.0/0` so Render can connect.

### 2. Backend — Render

1. Push this project to GitHub.
2. On Render choose **New → Blueprint** and pick the repo. Render reads `render.yaml` and sets up the service.
   (Or choose **New → Web Service** with Root Directory `server`, Build Command `npm install && npm run build`, Start Command `npm start`.)
3. Add the environment variables:
   - `MONGODB_URI` — your Atlas connection string
   - `CLIENT_URL` — your Vercel URL, e.g. `https://sira-hr.vercel.app` (add your custom domain too, separated by a comma)
4. After deploying, open `https://<your-service>.onrender.com/api/health` — you should see `"ok": true`.

> On Render's free plan the server sleeps when unused, so the first form submission after a while can take up to a minute.

### 3. Frontend — Vercel

1. On Vercel choose **Add New → Project** and import the repo.
2. Set **Root Directory** to `client`. Vercel detects Vite automatically.
3. Add the environment variable `VITE_API_URL` = your Render URL, e.g. `https://sira-hr-api.onrender.com`.
4. Deploy. `client/vercel.json` makes sure refreshing any page (like `/careers/hr-lead`) works.

---

## API

Base URL: `<VITE_API_URL>/api`

| Method | Endpoint        | Body                                                 |
| ------ | --------------- | ---------------------------------------------------- |
| GET    | `/health`       | —                                                    |
| POST   | `/contact`      | `name, email, message` (+ `company, phone, service`) |
| POST   | `/bookings`     | `name, email, date, time` (+ `company, message`)     |
| POST   | `/applications` | `jobId, jobTitle, name, email` (+ `link, message`)   |
| POST   | `/newsletter`   | `email`                                              |

Every response looks like `{ "ok": true, "message": "..." }`.
Form endpoints are limited to 20 requests per 15 minutes per visitor to stop spam.

---

## Editing the site

- **Text and content** (services, pricing, FAQs, jobs, insights, contact details): `client/src/lib/data.ts`
- **Colours and fonts**: the `@theme` block in `client/src/index.css`. Each colour is written as
  `light-dark(lightValue, darkValue)`, so light and dark mode are set in one place.
- **Icons**: all icons come from [React Icons](https://react-icons.github.io/react-icons/) (the Feather set, `react-icons/fi`).
  Example: `import { FiMail } from "react-icons/fi";` then `<FiMail className="h-5 w-5" />`.
- **Logo**: `client/src/components/SiraMark.tsx` (an SVG drawing).

## Scripts

| Where     | Command             | What it does |
| --------- | ------------------- | ------------ |
| root      | `npm run dev`       | Runs backend and frontend together |
| root      | `npm run build`     | Builds both apps |
| `client/` | `npm run typecheck` | Checks TypeScript types |
| `server/` | `npm start`         | Runs the built server (used by Render) |
