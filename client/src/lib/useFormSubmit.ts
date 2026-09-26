import { useState, type FormEvent } from "react";
import { sendForm, type ApiResult } from "./api";

type Status = "idle" | "sending" | "done" | "error";

export function useFormSubmit(path: string, extraValues: object = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = { ...Object.fromEntries(new FormData(form)), ...extraValues };

    setStatus("sending");
    const result: ApiResult = await sendForm(path, values);
    setMessage(result.message);
    setStatus(result.ok ? "done" : "error");
    if (result.ok) form.reset();
  }

  return {
    handleSubmit,
    message,
    isSending: status === "sending",
    isDone: status === "done",
    isError: status === "error",
  };
}
