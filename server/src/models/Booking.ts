import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

const Booking = model("Booking", bookingSchema);

export default Booking;
