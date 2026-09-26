import type { ReactNode } from "react";
import { labelCls } from "../lib/ui";

type Props = {
  label: string;
  optional?: boolean;
  children: ReactNode;
};

export default function Field({ label, optional = false, children }: Props) {
  return (
    <label className="mb-4.5 block">
      <span className={labelCls}>
        {label}
        {optional && <span className="font-normal text-ink-faint"> (optional)</span>}
      </span>
      {children}
    </label>
  );
}
