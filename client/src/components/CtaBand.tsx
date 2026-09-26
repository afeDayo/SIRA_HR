import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import Button from "./Button";
import { wrap, headingLg, leadText } from "../lib/ui";

type Action = { label: string; to: string; variant?: "light" | "outline" };

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  actions: Action[];
};

export default function CtaBand({ eyebrow, title, lead, actions }: Props) {
  return (
    <div className="relative overflow-hidden bg-pine-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90 bg-[radial-gradient(120%_140%_at_100%_0%,#2C7C6D_0%,transparent_42%),radial-gradient(120%_120%_at_0%_100%,#7FB3A4_0%,transparent_40%)]"
      />
      <div className={`${wrap} relative z-[2] py-[clamp(72px,10vw,120px)] text-center`}>
        {eyebrow && (
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow onDark>{eyebrow}</Eyebrow>
            </div>
          </Reveal>
        )}
        <Reveal delay={0.06}>
          <h2 className={`${headingLg} mx-auto mt-5 max-w-[16ch] text-on-dark`}>{title}</h2>
        </Reveal>
        {lead && (
          <Reveal delay={0.12}>
            <p className={`${leadText} mx-auto mt-[22px] text-center text-on-dark-soft`}>{lead}</p>
          </Reveal>
        )}
        <Reveal delay={0.18}>
          <div className="mt-[34px] flex flex-wrap justify-center gap-3.5">
            {actions.map((a) => (
              <Button key={a.to + a.label} to={a.to} variant={a.variant === "outline" ? "outline-light" : "light"} withArrow={a.variant !== "outline"}>
                {a.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
