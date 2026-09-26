import Button from "./Button";
import Field from "./Field";
import FormOk from "./FormOk";
import FormError from "./FormError";
import { useFormSubmit } from "../lib/useFormSubmit";
import { inputCls } from "../lib/ui";

type Props = {
  jobId: string;
  jobTitle: string;
};

export default function ApplyForm({ jobId, jobTitle }: Props) {
  const { handleSubmit, message, isSending, isDone, isError } = useFormSubmit("/applications", { jobId, jobTitle });

  if (isDone) return <FormOk>{message}</FormOk>;

  return (
    <form onSubmit={handleSubmit}>
      <Field label="Full name">
        <input name="name" required minLength={2} autoComplete="name" placeholder="Your name" className={inputCls} />
      </Field>
      <Field label="Email">
        <input type="email" name="email" required autoComplete="email" placeholder="you@email.com" className={inputCls} />
      </Field>
      <Field label="LinkedIn, portfolio or CV link">
        <input type="url" name="link" required placeholder="https://" className={inputCls} />
      </Field>
      <Field label="Why you're a fit" optional>
        <textarea name="message" rows={3} placeholder="A few lines about your experience." className={inputCls} />
      </Field>

      <Button type="submit" withArrow loading={isSending} className="w-full justify-center">
        {isSending ? "Submitting…" : "Submit application"}
      </Button>

      {isError && <FormError>{message}</FormError>}
    </form>
  );
}
