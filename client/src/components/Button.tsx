import type { ReactNode } from "react";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

type Variant = "primary" | "ghost" | "light" | "outline-light";

type Props = {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-transparent px-[26px] py-[15px] text-[15px] font-semibold tracking-[0.01em] transition-all duration-500 ease-brand cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-btn text-btn-fg hover:bg-btn-hover hover:-translate-y-0.5 hover:shadow-soft",
  ghost: "bg-transparent text-ink border-line hover:border-pine hover:text-pine hover:-translate-y-0.5",
  light: "bg-on-dark text-pine-deep hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.5)]",
  "outline-light": "bg-transparent text-on-dark border-[rgba(238,230,212,0.28)] hover:border-on-dark hover:-translate-y-0.5",
};

export default function Button({
  children,
  variant = "primary",
  withArrow = false,
  className = "",
  to,
  href,
  type = "button",
  disabled,
  onClick,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && <FiArrowRight className="h-4 w-4 transition-transform duration-500 ease-brand group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
