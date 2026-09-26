import { Schema, model } from "mongoose";

const applicationSchema = new Schema(
  {
    jobId: { type: String, required: true },
    jobTitle: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    link: { type: String, trim: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

const Application = model("Application", applicationSchema);

export default Application;
