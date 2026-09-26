import type { ReactNode } from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function FormOk({ children }: { children: ReactNode }) {
  return (
    <div role="status" className="flex items-center gap-3.5 rounded-brand border border-teal bg-sage-soft px-[22px] py-[18px] font-semibold text-pine">
      <FiCheckCircle className="h-[22px] w-[22px] flex-none" />
      {children}
    </div>
  );
}
