# SIRA HR — Website

Marketing website for **SIRA HR**, a specialist recruitment & HR consulting firm in Lagos, Nigeria.

It is a **MERN + TypeScript** project:

| Part     | Folder    | Tech                                                                              | Hosted on |
| -------- | --------- | --------------------------------------------------------------------------------- | --------- |
| Frontend | `client/` | React 19, TypeScript, Vite 8, Tailwind CSS 4, React Router 8, Motion, React Icons | Vercel    |
| Backend  | `server/` | Node.js, Express 5, TypeScript, Mongoose 9 (MongoDB), Zod 4, JSON Web Tokens      | Render    |
| Database | —         | MongoDB (use a free MongoDB Atlas cluster)                                        | Atlas     |

---

## What the site does

- Pages: Home, About, Services, Process (with FAQs), Insights, Careers, Contact, Book a call.
- Forms that save to MongoDB: role brief (contact), discovery call booking, job application,
  general CV submission and newsletter sign-up.
- **Admin dashboard** at `/admin`: log in with the admin password to read and delete every submission.
- Light and dark mode, page titles for every page, and a mobile menu.

---

## Project structure

```
sira-hr/
├── package.json            runs client + server together
├── render.yaml             Render settings for the backend
├── client/                 React frontend
│   ├── vercel.json         makes page refreshes work on Vercel
│   └── src/
│       ├── main.tsx        app entry
│       ├── App.tsx         list of pages (routes)
│       ├── index.css       colours, fonts and dark mode
│       ├── components/     reusable pieces (Navbar, Footer, Button, forms…)
│       ├── pages/          one file per page (Admin.tsx is the dashboard)
│       └── lib/
│           ├── api.ts            request() — the one function that talks to the backend
│           ├── useFormSubmit.ts  hook every form uses to send its data
│           ├── data.ts           all the website text (services, jobs, insights…)
│           ├── theme.ts          light / dark mode helpers
│           └── ui.ts             shared Tailwind class strings
└── server/                 Express backend
    └── src/
        ├── index.ts        starts Express and connects to MongoDB
        ├── routes/
        │   ├── forms.ts    public form endpoints
        │   └── admin.ts    login + dashboard endpoints
        ├── models/         Mongoose models (Contact, Booking, Application, Subscriber)
        └── lib/
            ├── validate.ts Zod rules + validate() middleware
            └── auth.ts     admin token helpers + requireAdmin middleware
```

---

## Run it on your computer

**You need:** Node.js **22.12 or newer** (Node 24 LTS recommended) and a MongoDB database
(a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster, or MongoDB installed locally).

```bash
npm run install:all

cp server/.env.example server/.env
cp client/.env.example client/.env

npm run dev
```

Before `npm run dev`, open `server/.env` and fill in `MONGODB_URI`, `ADMIN_PASSWORD` and `JWT_SECRET`.

Open **http://localhost:5173**. The dashboard is at **http://localhost:5173/admin**.

### Environment variables

`server/.env`

| Name             | Example                                               | What it is |
| ---------------- | ----------------------------------------------------- | ---------- |
| `PORT`           | `4000`                                                | Port the API runs on (Render sets this for you) |
| `MONGODB_URI`    | `mongodb+srv://user:pass@cluster.mongodb.net/sira-hr` | Your MongoDB connection string |
| `CLIENT_URL`     | `http://localhost:5173`                               | Website address(es) allowed to call the API. Separate several with commas |
| `ADMIN_PASSWORD` | `a-strong-password`                                   | Password for the `/admin` dashboard |
| `JWT_SECRET`     | `any-long-random-string`                              | Secret used to sign admin login tokens |

The server reads `.env` with Node's built-in `--env-file-if-exists` flag, so no `dotenv` package is needed.
If `ADMIN_PASSWORD` or `JWT_SECRET` is missing, the website still works but the dashboard is turned off.

`client/.env`

| Name           | Example                 | What it is |
| -------------- | ----------------------- | ---------- |
| `VITE_API_URL` | `http://localhost:4000` | Address of the backend |

---

## Commands

| Where     | Command               | What it does |
| --------- | --------------------- | ------------ |
| root      | `npm run install:all` | Installs packages for the root, `client/` and `server/` |
| root      | `npm run dev`         | Runs the backend (port 4000) and frontend (port 5173) together |
| root      | `npm run build`       | Builds both apps for production |
| `client/` | `npm run dev`         | Starts the Vite dev server with hot reload |
| `client/` | `npm run build`       | Type-checks with `tsc`, then builds the site into `client/dist` |
| `client/` | `npm run preview`     | Serves the built `dist` folder locally to test the production build |
| `client/` | `npm run typecheck`   | Checks TypeScript types only |
| `server/` | `npm run dev`         | Runs the API with `tsx watch` — restarts on every save and loads `.env` |
| `server/` | `npm run build`       | Compiles TypeScript from `src/` into `dist/` |
| `server/` | `npm start`           | Runs the compiled server from `dist/` (used by Render) |

---

## Deploy

Deploy the **backend first**, because the frontend needs its URL.

### 1. Database — MongoDB Atlas

1. Create a free cluster on MongoDB Atlas.
2. Create a database user and copy the connection string.
3. Under **Network Access**, allow `0.0.0.0/0` so Render can connect.

### 2. Backend — Render

1. On Render choose **New → Blueprint** and pick the repo. Render reads `render.yaml` and sets up the service.
   (Or choose **New → Web Service** with Root Directory `server`, Build Command `npm install && npm run build`, Start Command `npm start`.)
2. Add the environment variables:
   - `MONGODB_URI` — your Atlas connection string
   - `CLIENT_URL` — your Vercel URL, e.g. `https://sira-hr.vercel.app` (add your custom domain too, separated by a comma)
   - `ADMIN_PASSWORD` — the dashboard password
   - `JWT_SECRET` — any long random string (a Blueprint generates one for you)
3. After deploying, open `https://<your-service>.onrender.com/api/health` — you should see `"ok": true`.

> On Render's free plan the server sleeps when unused, so the first request after a while can take up to a minute.

### 3. Frontend — Vercel

1. On Vercel choose **Add New → Project** and import the repo.
2. Set **Root Directory** to `client`. Vercel detects Vite automatically.
3. Add the environment variable `VITE_API_URL` = your Render URL, e.g. `https://sira-hr-api.onrender.com`.
4. Deploy. `client/vercel.json` makes sure refreshing any page (like `/careers/hr-lead`) works.

---

## API

Base URL: `<VITE_API_URL>/api`

| Method | Endpoint                   | Body / header                                        | Who |
| ------ | -------------------------- | ---------------------------------------------------- | --- |
| GET    | `/health`                  | —                                                    | Anyone |
| POST   | `/contact`                 | `name, email, message` (+ `company, phone, service`) | Anyone |
| POST   | `/bookings`                | `name, email, date, time` (+ `company, message`)     | Anyone |
| POST   | `/applications`            | `jobId, jobTitle, name, email` (+ `link, message`)   | Anyone |
| POST   | `/newsletter`              | `email`                                              | Anyone |
| POST   | `/admin/login`             | `password` → returns `token`                         | Admin |
| GET    | `/admin/submissions`       | header `Authorization: Bearer <token>`               | Admin |
| DELETE | `/admin/:type/:id`         | header `Authorization: Bearer <token>`. `type` is `contacts`, `bookings`, `applications` or `subscribers` | Admin |

Every response looks like `{ "ok": true, "message": "..." }`.
Form endpoints allow 20 requests per 15 minutes per visitor, and admin login allows 10 attempts per 15 minutes.

---

## Editing the site

- **Text and content** (services, pricing, FAQs, jobs, insights, contact details): `client/src/lib/data.ts`
- **Colours and fonts**: the `@theme` block in `client/src/index.css`. Each colour is written as
  `light-dark(lightValue, darkValue)`, so light and dark mode are set in one place.
- **Icons**: all icons come from [React Icons](https://react-icons.github.io/react-icons/) (the Feather set, `react-icons/fi`).
  Example: `import { FiMail } from "react-icons/fi";` then `<FiMail className="h-5 w-5" />`.
- **Logo**: `client/src/components/SiraMark.tsx` (an SVG drawing).
