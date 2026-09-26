import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { dmd, lead as leadCls } from "../lib/ui";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  right?: ReactNode;
  onDark?: boolean;
};

export default function SectionHead({ eyebrow, title, lead, right, onDark }: Props) {
  return (
    <div className="mb-14 flex flex-wrap items-end justify-between gap-[30px] max-[720px]:flex-col max-[720px]:items-start">
      <div className="max-w-[640px]">
        <Reveal><Eyebrow onDark={onDark}>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.08}>
          <h2 className={`${dmd} mt-[18px] ${onDark ? "text-on-dark" : ""}`}>{title}</h2>
        </Reveal>
        {lead && (
          <Reveal delay={0.14}>
            <p className={`${leadCls} mt-4 ${onDark ? "text-on-dark-soft" : ""}`}>{lead}</p>
          </Reveal>
        )}
      </div>
      {right && <Reveal delay={0.16}>{right}</Reveal>}
    </div>
  );
}
