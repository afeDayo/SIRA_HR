import Button from "./Button";
import Field from "./Field";
import FormOk from "./FormOk";
import FormError from "./FormError";
import { useFormSubmit } from "../lib/useFormSubmit";
import { services } from "../lib/data";
import { inputCls, fieldRow, formNote } from "../lib/ui";

export default function ContactForm() {
  const { handleSubmit, message, isSending, isDone, isError } = useFormSubmit("/contact");

  if (isDone) return <FormOk>{message}</FormOk>;

  return (
    <form onSubmit={handleSubmit}>
      <div className={fieldRow}>
        <Field label="Full name">
          <input name="name" required minLength={2} autoComplete="name" placeholder="Your name" className={inputCls} />
        </Field>
        <Field label="Company" optional>
          <input name="company" autoComplete="organization" placeholder="Company name" className={inputCls} />
        </Field>
      </div>

      <div className={fieldRow}>
        <Field label="Work email">
          <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" className={inputCls} />
        </Field>
        <Field label="Phone" optional>
          <input type="tel" name="phone" autoComplete="tel" placeholder="+234 …" className={inputCls} />
        </Field>
      </div>

      <Field label="What are you hiring for?">
        <select name="service" className={inputCls}>
          {services.map((service) => (
            <option key={service.id}>{service.title}</option>
          ))}
          <option>Not sure yet — let&rsquo;s talk</option>
        </select>
      </Field>

      <Field label="Tell us about the role">
        <textarea
          name="message"
          rows={4}
          required
          minLength={5}
          placeholder="Role, level, team, timeline, and anything else that helps."
          className={inputCls}
        />
      </Field>

      <Button type="submit" withArrow loading={isSending} className="w-full justify-center">
        {isSending ? "Sending…" : "Send role brief"}
      </Button>

      {isError && <FormError>{message}</FormError>}
      <p className={formNote}>By sending, you agree to be contacted about your enquiry. We treat every brief confidentially.</p>
    </form>
  );
}
