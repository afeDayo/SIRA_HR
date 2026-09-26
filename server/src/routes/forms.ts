import { Router } from "express";
import rateLimit from "express-rate-limit";
import { validate, contactSchema, bookingSchema, applicationSchema, newsletterSchema } from "../lib/validate.js";
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

router.post("/contact", formLimiter, validate(contactSchema), async (req, res) => {
  await Contact.create(req.body);
  res.status(201).json({ ok: true, message: "Thanks — your brief is in. We'll be in touch within one working day." });
});

router.post("/bookings", formLimiter, validate(bookingSchema), async (req, res) => {
  await Booking.create(req.body);
  res.status(201).json({ ok: true, message: "Request received — we'll confirm your slot by email shortly." });
});

router.post("/applications", formLimiter, validate(applicationSchema), async (req, res) => {
  await Application.create(req.body);
  res.status(201).json({ ok: true, message: "Application received — thank you. We'll review it and reply soon." });
});

router.post("/newsletter", formLimiter, validate(newsletterSchema), async (req, res) => {
  const alreadySubscribed = await Subscriber.findOne({ email: req.body.email.toLowerCase() });

  if (alreadySubscribed) {
    res.json({ ok: true, message: "You're already subscribed — thank you!" });
    return;
  }

  await Subscriber.create(req.body);
  res.status(201).json({ ok: true, message: "You're subscribed — welcome to SIRA HR Nuggets." });
});

export default router;
