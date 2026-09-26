/**
 * Small stroked icon set used across the site.
 * All icons inherit `currentColor` and a 24×24 viewBox.
 */
type Props = { name: IconName; className?: string; strokeWidth?: number };

export type IconName =
  | "arrow"
  | "check"
  | "bolt"
  | "shield"
  | "search"
  | "eye"
  | "clipboard"
  | "mail"
  | "phone"
  | "pin"
  | "grid"
  | "plus"
  | "sun"
  | "moon"
  | "linkedin"
  | "instagram"
  | "globe"
  | "calendar";

const paths: Record<IconName, JSX.Element> = {
  arrow: <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />,
  check: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
  bolt: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
  shield: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z" />,
  search: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />,
  eye: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12S5 5.5 12 5.5 21.5 12 21.5 12 19 18.5 12 18.5 2.5 12 2.5 12z" />
    </>
  ),
  clipboard: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-6 4h6" />
  ),
  mail: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8M3 8a2 2 0 012-2h14a2 2 0 012 2" />,
  phone: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3l2 5-2.5 1.5a11 11 0 005 5L17 12l5 2v3a2 2 0 01-2 2A16 16 0 013 5z" />,
  pin: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path strokeLinecap="round" d="M8 11v5M8 8v.01M12 16v-5m4 5v-3a2 2 0 00-4 0" />
    </>
  ),
  plus: <path strokeLinecap="round" d="M12 5v14M5 12h14" />,
  sun: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36l-.71-.71M6.34 6.34l-.71-.71m12.73 0l-.71.71M6.34 17.66l-.71.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
  moon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />,
  linkedin: <path fill="currentColor" stroke="none" d="M4.98 3.5a2.5 2.5 0 11-.02 5.01A2.5 2.5 0 014.98 3.5zM3 8.98h4V21H3zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M3 9h18M8 3v4m8-4v4" />
    </>
  ),
};

export default function Icon({ name, className, strokeWidth = 1.9 }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
