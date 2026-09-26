import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiPlus } from "react-icons/fi";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import SectionHead from "../components/SectionHead";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { process, faqs } from "../lib/data";
import { wrap, wrapWide, section, headingMd } from "../lib/ui";

const startSteps = [
  { n: "01", h: "Send your brief", p: "Send your role brief to hello@sira-hr.com or set up a 30-minute discovery call." },
  { n: "02", h: "We confirm & begin", p: "We agree the scope, sign a short service agreement, and begin within 5 working days." },
  { n: "03", h: "Receive your shortlist", p: "You receive 3 to 5 assessed candidates within 14 days, each with written profiles and notes." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div className="border-b border-line" key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-5 py-[26px] text-left font-display text-[clamp(19px,2.2vw,24px)] text-ink"
            >
              {f.q}
              <span className={`grid h-[34px] w-[34px] flex-none place-items-center rounded-full border transition duration-500 ease-brand ${isOpen ? "border-pine bg-pine text-surface" : "border-line text-ink"}`}>
                <FiPlus className={`h-4 w-4 transition-transform duration-500 ease-brand ${isOpen ? "rotate-45" : ""}`} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[70ch] pb-[26px] text-ink-soft">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function Process() {
  return (
    <>
      <PageHero
        crumb="Process"
        eyebrow="Our process"
        title={<>Every search follows a structured, <span className="font-light italic">deliberate</span> process.</>}
        lead="From first brief to final placement — and beyond. Each stage is designed to give you confidence, grounded in data, not assumptions."
      />

      <div className={`${wrap} ${section} pt-[30px]`}>
        {process.map((p, i) => (
          <Reveal key={p.num}>
            <div className="group grid grid-cols-[auto_1fr] gap-[34px] pb-[52px] last:pb-0 max-[720px]:gap-5">
              <div className="flex flex-col items-center">
                <div className="grid h-16 w-16 flex-none place-items-center rounded-full border border-line bg-surface font-display text-[24px] tabular-nums text-pine transition duration-500 ease-brand group-hover:scale-[1.06] group-hover:border-pine group-hover:bg-pine group-hover:text-surface max-[720px]:h-[54px] max-[720px]:w-[54px] max-[720px]:text-[20px]">
                  {p.num}
                </div>
                {i < process.length - 1 && <div className="mt-2 w-px flex-1 bg-line" />}
              </div>
              <div className="pt-2">
                <h3 className="mb-2.5 font-display text-[clamp(22px,2.6vw,30px)] text-ink">{p.title}</h3>
                <p className="max-w-[60ch] text-ink-soft">{p.body}</p>
                <span className="mt-3 inline-block text-xs font-bold uppercase tracking-[0.14em] text-teal">{p.when}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="bg-pine-deep">
        <div className={`${wrapWide} ${section}`}>
          <SectionHead eyebrow="Let's get started" title="Three steps to your shortlist." onDark />
          <div className="grid grid-cols-3 gap-5 max-[720px]:grid-cols-1">
            {startSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="h-full rounded-brand border border-[rgba(238,230,212,0.16)] bg-transparent p-[26px]">
                  <div className="mb-3 font-display text-[20px] text-brass">{s.n}</div>
                  <h4 className="mb-1.5 font-sans text-[16px] font-bold text-on-dark">{s.h}</h4>
                  <p className="text-[14px] text-on-dark-soft">{s.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className={`mx-auto w-full max-w-[860px] px-[clamp(20px,5vw,64px)] ${section}`}>
        <Reveal><Eyebrow>Questions</Eyebrow></Reveal>
        <Reveal delay={0.08}><h2 className={`${headingMd} mb-10 mt-4`}>Frequently asked.</h2></Reveal>
        <Reveal delay={0.12}><Faq /></Reveal>
      </div>

      <CtaBand
        title="Start your search today."
        actions={[
          { label: "Book a discovery call", to: "/book" },
          { label: "Send a role brief", to: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
