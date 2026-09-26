import { useState, type FormEvent } from "react";
import Button from "./Button";
import Field from "./Field";
import FormOk from "./FormOk";
import { submitContact, type ContactPayload } from "../lib/api";
import { inputCls, fieldRow, formNote, formError } from "../lib/ui";

type Status = "idle" | "sending" | "done" | "error";

const services = [
  "Executive Search & Senior Leadership",
  "Mid-Level & Specialist Placement",
  "Graduate & Internship Program",
  "HR Advisory",
  "Not sure yet — let's talk",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget)) as ContactPayload;

    setStatus("sending");
    const result = await submitContact(values);
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

      <div className={fieldRow}>
        <Field label="Work email">
          <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" className={inputCls} />
        </Field>
        <Field label="Phone (optional)">
          <input type="tel" name="phone" autoComplete="tel" placeholder="+234 …" className={inputCls} />
        </Field>
      </div>

      <Field label="What are you hiring for?">
        <select name="service" className={inputCls}>
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about the role">
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Role, level, team, timeline, and anything else that helps."
          className={inputCls}
        />
      </Field>

      <Button type="submit" withArrow disabled={status === "sending"} className="w-full justify-center">
        {status === "sending" ? "Sending…" : "Send role brief"}
      </Button>

      {status === "error" && <p role="alert" className={formError}>{message}</p>}
      <p className={formNote}>By sending, you agree to be contacted about your enquiry. We treat every brief confidentially.</p>
    </form>
  );
}
