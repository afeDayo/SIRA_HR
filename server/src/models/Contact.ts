import { Schema, model } from "mongoose";

const contactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    service: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Contact = model("Contact", contactSchema);

export default Contact;
