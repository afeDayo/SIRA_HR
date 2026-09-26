import { useState, type FormEvent } from "react";
import { FiLock } from "react-icons/fi";
import Button from "./Button";
import Field from "./Field";
import FormError from "./FormError";
import { request } from "../lib/api";
import { inputCls } from "../lib/ui";

type Props = {
  onLogin: (token: string) => void;
};

export default function AdminLogin({ onLogin }: Props) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setError("");

    const result = await request<{ token?: string }>("/admin/login", { method: "POST", body: { password } });

    setIsSending(false);
    if (result.ok && result.token) onLogin(result.token);
    else setError(result.message);
  }

  return (
    <div className="mx-auto max-w-105 rounded-brand-lg border border-line-soft bg-surface p-[clamp(28px,4vw,44px)] shadow-soft">
      <span className="mb-5 grid h-13 w-13 place-items-center rounded-2xl bg-sage-soft text-pine">
        <FiLock className="h-6 w-6" />
      </span>
      <h1 className="mb-1.5 font-display text-[28px] text-ink">Admin login</h1>
      <p className="mb-6 text-[15px] text-ink-soft">Enter the admin password to see form submissions.</p>

      <form onSubmit={handleSubmit}>
        <Field label="Password">
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={inputCls}
          />
        </Field>
        <Button type="submit" withArrow loading={isSending} className="w-full justify-center">
          {isSending ? "Checking…" : "Log in"}
        </Button>
        {error && <FormError>{error}</FormError>}
      </form>
    </div>
  );
}
