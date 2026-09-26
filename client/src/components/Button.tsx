import type { ReactNode } from "react";
import { Link } from "react-router";
import { FiArrowRight, FiLoader } from "react-icons/fi";

type Variant = "primary" | "ghost" | "light" | "outline-light" | "danger";

type Props = {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  loading?: boolean;
  className?: string;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border px-6.5 py-3.75 text-[15px] font-semibold tracking-[0.01em] transition-all duration-500 ease-brand cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "border-transparent bg-btn text-btn-fg hover:bg-btn-hover hover:-translate-y-0.5 hover:shadow-soft",
  ghost: "bg-transparent text-ink border-line hover:border-pine hover:text-pine hover:-translate-y-0.5",
  light: "border-transparent bg-on-dark text-pine-deep hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.5)]",
  "outline-light": "bg-transparent text-on-dark border-on-dark/30 hover:border-on-dark hover:-translate-y-0.5",
  danger: "bg-transparent text-danger border-danger/40 hover:border-danger hover:bg-danger/10",
};

export default function Button({
  children,
  variant = "primary",
  withArrow = false,
  loading = false,
  className = "",
  to,
  href,
  type = "button",
  onClick,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {loading && <FiLoader className="h-4 w-4 animate-spin" />}
      {withArrow && !loading && (
        <FiArrowRight className="h-4 w-4 transition-transform duration-500 ease-brand group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
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
    <button type={type} disabled={loading} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
