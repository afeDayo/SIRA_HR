import type { ReactNode } from "react";
import { labelCls } from "../lib/ui";

type Props = {
  label: string;
  children: ReactNode;
};

export default function Field({ label, children }: Props) {
  return (
    <label className="mb-[18px] block">
      <span className={labelCls}>{label}</span>
      {children}
    </label>
  );
}
