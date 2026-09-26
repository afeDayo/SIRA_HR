import { FiCheck, FiEye, FiShield, FiZap } from "react-icons/fi";
import Reveal from "../components/Reveal";
import SiraMark from "../components/SiraMark";
import Eyebrow from "../components/Eyebrow";
import SectionHead from "../components/SectionHead";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { whySira } from "../lib/data";
import { wrap, wrapWide, section, dsm, mediaGrad } from "../lib/ui";

const whyIcons = [FiZap, FiShield, FiCheck, FiEye];
const split = "grid grid-cols-2 items-center gap-[clamp(30px,5vw,72px)] max-[960px]:grid-cols-1 max-[960px]:gap-9";

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Who we are"
        title={<>A specialist recruitment &amp; HR firm — <span className="font-light italic">in the journey with you</span>.</>}
        lead="SIRA means “journey.” We partner with organisations across industries to attract, assess and place the right people at every level — and we stay with you long after the offer is signed."
      />

      <div className={`${wrapWide} ${section} pt-5`}>
        <div className={split}>
          <Reveal>
            <div className={`relative aspect-[4/5] overflow-hidden rounded-brand-lg ${mediaGrad}`}>
              <div className="absolute inset-0 grid place-items-center"><SiraMark className="w-[46%]" /></div>
              <div className="absolute inset-x-5 bottom-5 z-[2] text-white">
                <b className="block font-display text-[22px]">SIRA HR</b>
                <span className="text-[13px] opacity-85">Helping companies build the teams that drive growth</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <Eyebrow>Our story</Eyebrow>
              <h2 className={`${dsm} my-4`}>Recruitment rigor, market knowledge and a candidate network — brought together to get hiring right.</h2>
              <p className="mb-4 text-ink-soft">
                SIRA HR is a specialist recruitment and HR firm that partners with organisations across industries to attract, assess and
                place the right people at every level. Whether you&rsquo;re making your first critical leadership hire, building out a
                specialist function, or scaling rapidly, SIRA HR brings the sector knowledge, the candidate network and the recruitment
                rigor to get it right.
              </p>
              <p className="text-ink-soft">
                We founded SIRA on a simple belief: great hiring is deliberate, human and worth doing properly. Every search is a
                partnership, and every placement is the start of something we&rsquo;re invested in — not the end of a transaction.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className={`${wrap} pb-[clamp(72px,10vw,132px)]`}>
        <div className="grid grid-cols-2 gap-[22px] max-[720px]:grid-cols-1">
          {[
            { k: "Our mission", t: "To connect the right people to the right opportunities — setting the standard for what great hiring looks like." },
            { k: "Our vision", t: "To be the foremost global recruitment partner — trusted from first specialist hire to the C-suite." },
          ].map((m, i) => (
            <Reveal key={m.k} delay={i * 0.1}>
              <div className="h-full rounded-brand border border-line-soft bg-surface p-[38px]">
                <Eyebrow>{m.k}</Eyebrow>
                <p className="mt-[18px] font-display text-[clamp(22px,2.6vw,30px)] leading-[1.25] text-ink">{m.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="bg-pine-deep">
        <div className={`${wrapWide} ${section}`}>
          <SectionHead eyebrow="Why SIRA HR" title="Four things you can count on." onDark />
          <div className="grid grid-cols-4 gap-[22px] max-[960px]:grid-cols-2 max-[720px]:grid-cols-1">
            {whySira.map((w, i) => {
              const WhyIcon = whyIcons[i];
              return (
                <Reveal key={w.h} delay={i * 0.08}>
                  <div className="h-full rounded-brand border border-[rgba(238,230,212,0.16)] bg-transparent p-[30px]">
                    <span className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-[14px] bg-[rgba(127,179,164,0.16)] text-sage"><WhyIcon className="h-6 w-6" /></span>
                    <h3 className="mb-2.5 font-display text-[22px] text-on-dark">{w.h}</h3>
                    <p className="text-[15.5px] text-on-dark-soft">{w.p}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`${wrap} ${section}`}>
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <div className="flex justify-center"><Eyebrow center>A note from the founder</Eyebrow></div>
            <p className="mx-auto mt-6 max-w-[26ch] font-display text-[clamp(24px,3.2vw,38px)] font-light leading-[1.28] text-ink">
              Hiring is deeply human. When you get the right person into the right seat, everything downstream gets easier — and that&rsquo;s
              worth doing carefully.
            </p>
            <div className="mt-[30px] flex items-center justify-center gap-3.5">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(150deg,#124F45,#7FB3A4)] font-bold text-white">S</span>
              <div className="text-left">
                <b className="block text-[15px] text-ink">Founder &amp; Principal Consultant</b>
                <span className="text-[13px] text-ink-faint">SIRA HR</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <CtaBand
        eyebrow="Work with us"
        title="Let's build something worth staying for."
        actions={[
          { label: "Book a discovery call", to: "/book" },
          { label: "See our services", to: "/services", variant: "outline" },
        ]}
      />
    </>
  );
}
