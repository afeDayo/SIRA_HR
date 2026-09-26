import { FiCheckCircle } from "react-icons/fi";
import { useFormSubmit } from "../lib/useFormSubmit";

type Props = {
  variant?: "footer" | "dark";
};

export default function NewsletterForm({ variant = "footer" }: Props) {
  const { handleSubmit, message, isSending, isDone, isError } = useFormSubmit("/newsletter");
  const isFooter = variant === "footer";

  if (isDone) {
    return (
      <div role="status" className="inline-flex items-center gap-2.5 rounded-brand border border-teal bg-sage-soft px-4 py-3 text-[14px] font-semibold text-pine">
        <FiCheckCircle className="h-4.5 w-4.5 flex-none" />
        {message}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-wrap gap-3 ${isFooter ? "" : "mx-auto max-w-115 justify-center"}`}>
      <input
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        aria-label="Email address"
        autoComplete="email"
        className="min-w-50 flex-1 rounded-full border border-on-dark/30 bg-on-dark/10 px-4.5 py-3.75 font-sans text-[15px] text-on-dark placeholder:text-on-dark-soft focus:border-sage focus:outline-none"
      />
      <button
        type="submit"
        disabled={isSending}
        className={`inline-flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-full bg-on-dark text-[15px] font-semibold text-pine-deep transition-all duration-500 ease-brand hover:-translate-y-0.5 disabled:opacity-60 ${isFooter ? "px-5 py-3.25" : "px-6.5 py-3.75"}`}
      >
        {isSending ? "Joining…" : isFooter ? "Join" : "Subscribe"}
      </button>
      {isError && <p role="alert" className="basis-full text-[13px] text-on-dark-soft">{message}</p>}
    </form>
  );
}
