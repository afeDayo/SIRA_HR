import { Router } from "express";
import rateLimit from "express-rate-limit";
import { contactSchema, bookingSchema, applicationSchema, newsletterSchema } from "../lib/validate.js";
import Contact from "../models/Contact.js";
import Booking from "../models/Booking.js";
import Application from "../models/Application.js";
import Subscriber from "../models/Subscriber.js";

const router = Router();

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  message: { ok: false, message: "Too many requests. Please wait a few minutes and try again." },
});

router.use(formLimiter);

router.post("/contact", async (req, res) => {
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ ok: false, message: result.error.issues[0].message });
    return;
  }

  await Contact.create(result.data);
  res.status(201).json({ ok: true, message: "Thanks — your brief is in. We'll be in touch within one working day." });
});

router.post("/bookings", async (req, res) => {
  const result = bookingSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ ok: false, message: result.error.issues[0].message });
    return;
  }

  await Booking.create(result.data);
  res.status(201).json({ ok: true, message: "Request received — we'll confirm your slot by email shortly." });
});

router.post("/applications", async (req, res) => {
  const result = applicationSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ ok: false, message: result.error.issues[0].message });
    return;
  }

  await Application.create(result.data);
  res.status(201).json({ ok: true, message: "Application received — thank you. We'll review and reply soon." });
});

router.post("/newsletter", async (req, res) => {
  const result = newsletterSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ ok: false, message: result.error.issues[0].message });
    return;
  }

  const alreadySubscribed = await Subscriber.findOne({ email: result.data.email.toLowerCase() });
  if (alreadySubscribed) {
    res.json({ ok: true, message: "You're already subscribed — thank you!" });
    return;
  }

  await Subscriber.create(result.data);
  res.status(201).json({ ok: true, message: "You're subscribed — welcome to SIRA HR Nuggets." });
});

export default router;
