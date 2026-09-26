import Button from "./Button";
import Field from "./Field";
import FormOk from "./FormOk";
import FormError from "./FormError";
import { useFormSubmit } from "../lib/useFormSubmit";
import { inputCls, fieldRow, formNote } from "../lib/ui";

const timeSlots = ["Morning (9–12)", "Afternoon (12–4)", "Late afternoon (4–6)"];

const today = new Date().toLocaleDateString("en-CA");

export default function BookingForm() {
  const { handleSubmit, message, isSending, isDone, isError } = useFormSubmit("/bookings");

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

      <Field label="Work email">
        <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" className={inputCls} />
      </Field>

      <div className={fieldRow}>
        <Field label="Preferred date">
          <input type="date" name="date" required min={today} className={inputCls} />
        </Field>
        <Field label="Preferred time">
          <select name="time" required className={inputCls}>
            {timeSlots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="What would you like to discuss?" optional>
        <textarea name="message" rows={3} placeholder="A quick note on your hiring needs." className={inputCls} />
      </Field>

      <Button type="submit" withArrow loading={isSending} className="w-full justify-center">
        {isSending ? "Requesting…" : "Request my call"}
      </Button>

      {isError && <FormError>{message}</FormError>}
      <p className={formNote}>We&rsquo;ll confirm the exact time by email. Calls run on Google Meet or by phone.</p>
    </form>
  );
}
