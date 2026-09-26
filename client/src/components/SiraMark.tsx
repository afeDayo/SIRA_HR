type Props = {
  className?: string;
  monochrome?: "light" | "dark";
};

const monochromeColors = {
  light: "#fff",
  dark: "#0c332c",
};

export default function SiraMark({ className, monochrome }: Props) {
  const single = monochrome ? monochromeColors[monochrome] : null;
  const sage = single ?? "var(--color-sage)";
  const teal = single ?? "var(--color-teal)";
  const pine = single ?? "var(--color-pine)";

  return (
    <svg className={className} viewBox="0 0 72 60" aria-hidden="true">
      <path d="M7 49 L7 40 a9 9 0 0 1 18 0 L25 49 Z" fill={sage} />
      <circle cx="16" cy="23" r="6.5" fill={sage} />
      <path d="M47 49 L47 40 a9 9 0 0 1 18 0 L65 49 Z" fill={teal} />
      <circle cx="56" cy="23" r="6.5" fill={teal} />
      <path d="M23 50 L23 37 a13 13 0 0 1 26 0 L49 50 Z" fill={pine} />
      <circle cx="36" cy="15" r="8.5" fill={pine} />
      <path d="M11 51 q25 16 50 0" fill="none" stroke={teal} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
