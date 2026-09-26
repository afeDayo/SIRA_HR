import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { wrapWide, headingLg, leadText } from "../lib/ui";

type Props = {
  crumb: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
};

export default function PageHero({ crumb, eyebrow, title, lead }: Props) {
  return (
    <div className={`${wrapWide} pt-[clamp(140px,16vw,200px)] pb-[clamp(30px,5vw,60px)]`}>
      <Reveal>
        <p className="text-[13px] tracking-[0.04em] text-ink-faint">
          <b className="font-semibold text-pine">SIRA HR</b>&nbsp;/&nbsp;{crumb}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="mt-5">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className={`${headingLg} mt-5 max-w-[16ch]`}>{title}</h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p className={`${leadText} mt-[22px]`}>{lead}</p>
      </Reveal>
    </div>
  );
}
