import type { ReactNode } from "react";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  to: string;
  children: ReactNode;
};

export default function LinkArrow({ to, children }: Props) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-[15px] font-semibold text-pine transition duration-500 ease-brand hover:border-pine"
    >
      {children}
      <FiArrowRight className="h-[15px] w-[15px] transition-transform duration-500 ease-brand group-hover:translate-x-1" />
    </Link>
  );
}
