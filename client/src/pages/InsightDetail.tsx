import { Link, useParams } from "react-router";
import Reveal from "../components/Reveal";
import SiraMark from "../components/SiraMark";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
import InsightCard from "../components/InsightCard";
import CtaBand from "../components/CtaBand";
import NotFound from "./NotFound";
import { insights } from "../lib/data";
import { wrapWide, section, headingSm, pill, grad } from "../lib/ui";

export default function InsightDetail() {
  const { id } = useParams();
  const insight = insights.find((a) => a.id === id);
  if (!insight) return <NotFound />;
  const more = insights.filter((a) => a.id !== insight.id).slice(0, 3);

  return (
    <>
      <article className="mx-auto w-full max-w-[820px] px-[clamp(20px,5vw,64px)] pb-5 pt-[clamp(140px,16vw,200px)]">
        <Reveal>
          <p className="text-[13px] tracking-[0.04em] text-ink-faint">
            <Link to="/insights" className="font-semibold text-pine">Insights</Link>&nbsp;/&nbsp;{insight.category}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="my-3.5 flex items-center gap-3 text-[13px] text-ink-faint">
            <span className={pill}>{insight.category}</span>
            <span>{insight.date}</span><span>·</span><span>{insight.readTime} read</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display font-normal tracking-[-0.015em] text-balance text-ink text-[clamp(32px,5vw,56px)] leading-[1.04]">{insight.title}</h1>
        </Reveal>
        <Reveal delay={0.16}>
          <div className={`my-[34px] grid aspect-[16/8] place-items-center overflow-hidden rounded-brand-lg ${grad[insight.gradient]}`}>
            <SiraMark className="w-[26%]" monochrome="light" />
          </div>
        </Reveal>
        {insight.body.map((para, i) => (
          <Reveal key={i} delay={0.05}>
            <p className="mb-[22px] max-w-[68ch] text-[18.5px] leading-[1.7] text-ink-soft">{para}</p>
          </Reveal>
        ))}
        <Reveal>
          <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-6">
            <Button to="/book" withArrow>Talk to us about hiring</Button>
            <Button to="/insights" variant="ghost">Back to insights</Button>
          </div>
        </Reveal>
      </article>

      <div className={`${wrapWide} ${section}`}>
        <div className="mb-14">
          <Eyebrow>Keep reading</Eyebrow>
          <h2 className={`${headingSm} mt-3.5`}>More SIRA HR Nuggets</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-2 max-[720px]:grid-cols-1">
          {more.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.08}><InsightCard insight={a} /></Reveal>
          ))}
        </div>
      </div>

      <CtaBand
        eyebrow="Let's get started"
        title="Ready to build your team the right way?"
        actions={[
          { label: "Book a discovery call", to: "/book" },
          { label: "Send a role brief", to: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
