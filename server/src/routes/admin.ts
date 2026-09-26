import { Router } from "express";
import rateLimit from "express-rate-limit";
import { isValidObjectId } from "mongoose";
import { createToken, isAdminSetUp, isCorrectPassword, requireAdmin } from "../lib/auth.js";
import Contact from "../models/Contact.js";
import Booking from "../models/Booking.js";
import Application from "../models/Application.js";
import Subscriber from "../models/Subscriber.js";

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  message: { ok: false, message: "Too many login attempts. Please wait a few minutes and try again." },
});

router.post("/login", loginLimiter, (req, res) => {
  if (!isAdminSetUp()) {
    res.status(503).json({ ok: false, message: "Admin login is not set up. Add ADMIN_PASSWORD and JWT_SECRET to the server." });
    return;
  }

  if (!isCorrectPassword(req.body?.password)) {
    res.status(401).json({ ok: false, message: "That password is not correct." });
    return;
  }

  res.json({ ok: true, message: "Welcome back.", token: createToken() });
});

router.get("/submissions", requireAdmin, async (_req, res) => {
  const newestFirst = { createdAt: -1 } as const;

  const [contacts, bookings, applications, subscribers] = await Promise.all([
    Contact.find().sort(newestFirst),
    Booking.find().sort(newestFirst),
    Application.find().sort(newestFirst),
    Subscriber.find().sort(newestFirst),
  ]);

  res.json({ ok: true, message: "Submissions loaded.", contacts, bookings, applications, subscribers });
});

router.delete("/:type/:id", requireAdmin, async (req, res) => {
  const { type, id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({ ok: false, message: "That id is not valid." });
    return;
  }

  if (type === "contacts") await Contact.findByIdAndDelete(id);
  else if (type === "bookings") await Booking.findByIdAndDelete(id);
  else if (type === "applications") await Application.findByIdAndDelete(id);
  else if (type === "subscribers") await Subscriber.findByIdAndDelete(id);
  else {
    res.status(404).json({ ok: false, message: "Unknown submission type." });
    return;
  }

  res.json({ ok: true, message: "Deleted." });
});

export default router;
