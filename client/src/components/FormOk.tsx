import type { ReactNode } from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function FormOk({ children }: { children: ReactNode }) {
  return (
    <div role="status" className="flex items-center gap-3.5 rounded-brand border border-teal bg-sage-soft px-5.5 py-4.5 font-semibold text-pine">
      <FiCheckCircle className="h-5.5 w-5.5 flex-none" />
      {children}
    </div>
  );
}
