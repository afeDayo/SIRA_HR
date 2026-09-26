import { FiCheck } from "react-icons/fi";
import Reveal from "../components/Reveal";
import SiraMark from "../components/SiraMark";
import Button from "../components/Button";
import SectionHead from "../components/SectionHead";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { services, pricing } from "../lib/data";
import { wrapWide, section, headingSm, mediaGrad } from "../lib/ui";

const split = "grid grid-cols-2 items-center gap-[clamp(30px,5vw,72px)] max-[960px]:grid-cols-1 max-[960px]:gap-9";

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our services"
        title={<>End-to-end recruitment &amp; HR — <span className="font-light italic">at every level</span>.</>}
        lead="From C-suite search to early-career pipelines and HR strategy, we bring the same rigor to every engagement. Here's how we help."
      />

      <div className={`${wrapWide} ${section} pt-5`}>
        {services.map((s, idx) => {
          const reversed = idx % 2 === 1;
          const media = (
            <div className={`relative grid aspect-square place-items-center overflow-hidden rounded-brand-lg ${reversed ? "border border-line bg-ground-2" : mediaGrad}`}>
              <SiraMark className={`w-[46%] ${reversed ? "opacity-50" : ""}`} />
              {idx === 0 && (
                <div className="absolute inset-x-5 bottom-5 text-white">
                  <b className="block font-display text-[22px]">20%</b>
                  <span className="text-[13px] opacity-85">of first-year gross salary</span>
                </div>
              )}
            </div>
          );
          const copy = (
            <div>
              <span className="font-display text-[26px] tabular-nums text-brass">{s.num}</span>
              <h2 className={`${headingSm} mb-[18px] mt-3`}>{s.title}</h2>
              <p className="mb-5 text-ink-soft">{s.body}</p>
              <div className="grid grid-cols-2 gap-5 max-[720px]:grid-cols-1">
                {s.points.map((p) => (
                  <div key={p.h} className="rounded-brand border border-line bg-surface p-[26px]">
                    <h4 className="mb-1.5 font-sans text-[16px] font-bold text-ink">{p.h}</h4>
                    <p className="text-[14px] text-ink-soft">{p.p}</p>
                  </div>
                ))}
              </div>
            </div>
          );
          return (
            <Reveal key={s.id}>
              <div className={`${split} mb-[clamp(60px,8vw,110px)] last:mb-0`}>
                {reversed ? <>{media}{copy}</> : <>{copy}{media}</>}
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="bg-pine-deep">
        <div className={`${wrapWide} ${section}`}>
          <SectionHead eyebrow="Pricing" title="Transparent, aligned to your success." lead="No hidden fees. You pay for outcomes, and the structure fits the engagement." onDark />
          <div className="grid grid-cols-3 items-stretch gap-[22px] max-[960px]:mx-auto max-[960px]:max-w-[420px] max-[960px]:grid-cols-1">
            {pricing.map((p, i) => {
              const feat = p.feat;
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className={`flex h-full flex-col rounded-brand-lg border p-[34px] transition duration-500 ease-brand hover:-translate-y-1.5 hover:shadow-soft ${feat ? "border-pine-deeper bg-pine-deeper text-on-dark min-[961px]:scale-[1.02]" : "border-line bg-surface"}`}>
                    {p.badge && <span className="mb-4 self-start rounded-full bg-sage px-3 py-[5px] text-[11px] font-bold uppercase tracking-[0.12em] text-pine-deep">{p.badge}</span>}
                    <h3 className={`font-display text-[22px] ${feat ? "text-on-dark" : "text-ink"}`}>{p.title}</h3>
                    <div className={`my-3.5 font-display text-[40px] leading-none ${feat ? "text-on-dark" : "text-pine"}`}>
                      {p.amount}<small className={`font-sans text-[15px] ${feat ? "text-on-dark-soft" : "text-ink-faint"}`}> {p.unit}</small>
                    </div>
                    <p className={`min-h-[44px] text-[14.5px] ${feat ? "text-on-dark-soft" : "text-ink-soft"}`}>{p.desc}</p>
                    <ul className="my-5 flex flex-1 flex-col gap-[11px]">
                      {p.features.map((f) => (
                        <li key={f} className={`flex items-start gap-2.5 text-[14.5px] ${feat ? "text-on-dark-soft" : "text-ink-soft"}`}>
                          <FiCheck className={`mt-0.5 h-[17px] w-[17px] flex-none ${feat ? "text-sage" : "text-teal"}`} />{f}
                        </li>
                      ))}
                    </ul>
                    <Button to={p.cta.to} variant={feat ? "light" : "primary"} className="w-full justify-center">
                      {p.cta.label}
                    </Button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <CtaBand title="Not sure which fits? Let's talk it through." actions={[{ label: "Book a 30-min call", to: "/book" }]} />
    </>
  );
}
