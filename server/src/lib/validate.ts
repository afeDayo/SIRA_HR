import { z } from "zod";

const name = z.string().trim().min(2, "Please enter your name.").max(120);
const email = z.email("Please enter a valid email address.");

export const contactSchema = z.object({
  name,
  email,
  company: z.string().trim().max(160).optional(),
  phone: z.string().trim().max(40).optional(),
  service: z.string().trim().max(120).optional(),
  message: z.string().trim().min(5, "Please tell us a little about the role.").max(4000),
});

export const bookingSchema = z.object({
  name,
  email,
  company: z.string().trim().max(160).optional(),
  date: z.iso.date("Please choose a preferred date."),
  time: z.string().trim().min(1, "Please choose a preferred time.").max(60),
  message: z.string().trim().max(2000).optional(),
});

export const applicationSchema = z.object({
  name,
  email,
  jobId: z.string().trim().min(1).max(80),
  jobTitle: z.string().trim().min(1).max(160),
  link: z.string().trim().max(300).optional(),
  message: z.string().trim().max(3000).optional(),
});

export const newsletterSchema = z.object({
  email,
});
