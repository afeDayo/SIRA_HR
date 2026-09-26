import { useState, type FormEvent } from "react";
import Button from "./Button";
import Field from "./Field";
import FormOk from "./FormOk";
import { submitApplication, type ApplicationPayload } from "../lib/api";
import { inputCls, formError } from "../lib/ui";

type Status = "idle" | "sending" | "done" | "error";

type Props = {
  jobId: string;
  jobTitle: string;
};

export default function ApplyForm({ jobId, jobTitle }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget)) as ApplicationPayload;

    setStatus("sending");
    const result = await submitApplication({ ...values, jobId, jobTitle });
    setMessage(result.message);
    setStatus(result.ok ? "done" : "error");
  }

  if (status === "done") return <FormOk>{message}</FormOk>;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Field label="Full name">
        <input name="name" required autoComplete="name" placeholder="Your name" className={inputCls} />
      </Field>
      <Field label="Email">
        <input type="email" name="email" required autoComplete="email" placeholder="you@email.com" className={inputCls} />
      </Field>
      <Field label="LinkedIn or portfolio">
        <input type="url" name="link" placeholder="https://" className={inputCls} />
      </Field>
      <Field label="Why you're a fit">
        <textarea name="message" rows={3} placeholder="A few lines about your experience." className={inputCls} />
      </Field>

      <Button type="submit" withArrow disabled={status === "sending"} className="w-full justify-center">
        {status === "sending" ? "Submitting…" : "Submit application"}
      </Button>

      {status === "error" && <p role="alert" className={formError}>{message}</p>}
    </form>
  );
}
