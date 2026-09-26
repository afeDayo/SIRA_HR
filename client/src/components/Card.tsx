import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = "", hover = true }: Props) {
  const hoverCls = hover ? "hover:-translate-y-1.5 hover:shadow-soft hover:border-line" : "";
  return (
    <div className={`rounded-brand border border-line-soft bg-surface p-[30px] transition duration-500 ease-brand ${hoverCls} ${className}`}>
      {children}
    </div>
  );
}
