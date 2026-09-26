import { useState, type FormEvent } from "react";
import Button from "./Button";
import Field from "./Field";
import FormOk from "./FormOk";
import { submitBooking, type BookingPayload } from "../lib/api";
import { inputCls, fieldRow, formNote, formError } from "../lib/ui";

type Status = "idle" | "sending" | "done" | "error";

const timeSlots = ["Morning (9–12)", "Afternoon (12–4)", "Late afternoon (4–6)"];

const today = new Date().toLocaleDateString("en-CA");

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget)) as BookingPayload;

    setStatus("sending");
    const result = await submitBooking(values);
    setMessage(result.message);
    setStatus(result.ok ? "done" : "error");
  }

  if (status === "done") return <FormOk>{message}</FormOk>;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={fieldRow}>
        <Field label="Full name">
          <input name="name" required autoComplete="name" placeholder="Your name" className={inputCls} />
        </Field>
        <Field label="Company">
          <input name="company" autoComplete="organization" placeholder="Company name" className={inputCls} />
        </Field>
      </div>

      <Field label="Work email">
        <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" className={inputCls} />
      </Field>

      <div className={fieldRow}>
        <Field label="Preferred date">
          <input type="date" name="date" required min={today} className={inputCls} />
        </Field>
        <Field label="Preferred time">
          <select name="time" className={inputCls}>
            {timeSlots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="What would you like to discuss?">
        <textarea name="message" rows={3} placeholder="A quick note on your hiring needs (optional)." className={inputCls} />
      </Field>

      <Button type="submit" withArrow disabled={status === "sending"} className="w-full justify-center">
        {status === "sending" ? "Requesting…" : "Request my call"}
      </Button>

      {status === "error" && <p role="alert" className={formError}>{message}</p>}
      <p className={formNote}>We&rsquo;ll confirm the exact time by email. Calls run on Google Meet or by phone.</p>
    </form>
  );
}
