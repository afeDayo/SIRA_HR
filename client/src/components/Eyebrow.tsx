import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  center?: boolean;
  onDark?: boolean;
  className?: string;
};

const lineBefore = "before:content-[''] before:h-px before:w-[26px] before:bg-current before:opacity-60";
const lineAfter = "after:content-[''] after:h-px after:w-[26px] after:bg-current after:opacity-60";

export default function Eyebrow({ children, center = false, onDark = false, className = "" }: Props) {
  const color = onDark ? "text-sage" : "text-teal";

  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.22em] ${color} ${lineBefore} ${center ? `${lineAfter} justify-center` : ""} ${className}`}
    >
      {children}
    </span>
  );
}
