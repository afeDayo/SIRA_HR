import { useState, type FormEvent } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { subscribeNewsletter } from "../lib/api";

type Status = "idle" | "sending" | "done" | "error";

type Props = {
  variant?: "footer" | "dark";
};

const inputClasses =
  "min-w-[200px] flex-1 rounded-full border border-[rgba(238,230,212,0.28)] bg-[rgba(238,230,212,0.08)] px-[18px] py-[15px] font-sans text-[15px] text-on-dark placeholder:text-on-dark-soft focus:border-sage focus:outline-none";

export default function NewsletterForm({ variant = "footer" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const isFooter = variant === "footer";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;

    setStatus("sending");
    const result = await subscribeNewsletter(email);
    setMessage(result.message);

    if (result.ok) {
      setStatus("done");
      setEmail("");
    } else {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="inline-flex items-center gap-2.5 rounded-brand border border-teal bg-sage-soft px-4 py-3 text-[14px] font-semibold text-pine">
        <FiCheckCircle className="h-[18px] w-[18px] flex-none" />
        {message}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`flex flex-wrap gap-3 ${isFooter ? "" : "mx-auto max-w-[460px] justify-center"}`}>
      <input
        type="email"
        required
        placeholder="you@company.com"
        aria-label="Email address"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className={inputClasses}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className={`inline-flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-full bg-on-dark text-[15px] font-semibold text-pine-deep transition-all duration-500 ease-brand hover:-translate-y-0.5 disabled:opacity-60 ${isFooter ? "px-5 py-[13px]" : "px-[26px] py-[15px]"}`}
      >
        {status === "sending" ? "…" : isFooter ? "Join" : "Subscribe"}
      </button>
      {status === "error" && <p role="alert" className="basis-full text-[13px] text-on-dark-soft">{message}</p>}
    </form>
  );
}
