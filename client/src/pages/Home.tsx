import { Link } from "react-router";
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiSearch,
  FiZap,
} from "react-icons/fi";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import SiraMark from "../components/SiraMark";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import Card from "../components/Card";
import SectionHead from "../components/SectionHead";
import LinkArrow from "../components/LinkArrow";
import InsightCard from "../components/InsightCard";
import CtaBand from "../components/CtaBand";
import {
  heroStats,
  services,
  differentiators,
  process,
  insights,
} from "../lib/data";
import {
  wrap,
  wrapWide,
  section,
  headingXl,
  headingSm,
  leadText,
  blobGrad,
} from "../lib/ui";

const diffIcons = [FiCheck, FiZap, FiSearch, FiClipboard];
const avatars = [
  { t: "AO", c: "bg-[#124F45]" },
  { t: "KE", c: "bg-[#2C7C6D]" },
  { t: "NN", c: "bg-[#7FB3A4]" },
  { t: "+2", c: "bg-[#B4884A]" },
];

export default function Home() {
  return (
    <>
      <title>SIRA HR — Building the teams that drive growth</title>
      <section
        className={`${wrapWide} relative overflow-hidden pt-[clamp(130px,15vw,180px)] pb-[clamp(40px,6vw,72px)]`}
      >
        <div className="grid grid-cols-[1.15fr_0.85fr] items-center gap-[clamp(30px,5vw,64px)] max-[960px]:grid-cols-1 max-[960px]:gap-10">
          <div>
            <Reveal>
              <Eyebrow>
                Specialist Recruitment &amp; HR · Lagos, Nigeria
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className={`${headingXl} mb-6.5 mt-5.5`}>
                Building the teams that{" "}
                <span className="font-light italic">drive growth</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className={leadText}>
                SIRA HR partners with organisations to attract, assess and place
                the right people at every level — from your first specialist
                hire to the C-suite.{" "}
                <em>
                  SIRA means &ldquo;journey,&rdquo; and we&rsquo;re in it with
                  you.
                </em>
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8.5 flex flex-wrap gap-3.5">
                <Button to="/book" withArrow>
                  Start a search
                </Button>
                <Button to="/services" variant="ghost">
                  Explore our services
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-11 flex flex-wrap gap-7.5 border-t border-line pt-6.5">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <b className="block font-display text-[34px] leading-none tabular-nums text-pine">
                      <Counter value={s.value} />
                    </b>
                    <span className="text-[13px] text-ink-soft">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative aspect-[1/1.06] min-h-85 max-[960px]:mx-auto max-[960px]:max-w-105">
              <div
                className={`absolute inset-[6%_4%_8%_8%] rounded-[44%_56%_58%_42%] ${blobGrad} animate-morph`}
              />
              <div className="absolute inset-0 z-2 grid place-items-center">
                <SiraMark className="w-[52%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]" />
              </div>
              <div className="absolute right-[-4%] top-[4%] z-3 animate-floaty rounded-brand border border-line-soft bg-surface px-4.5 py-3.75 shadow-brand [animation-delay:0.4s]">
                <div className="flex items-center gap-2.25 text-[13px] font-semibold text-ink">
                  <span className="h-2.25 w-2.25 rounded-full bg-teal" />
                  Shortlist ready
                </div>
                <div className="mt-0.75 text-[12px] text-ink-faint">
                  Head of Finance · Lagos
                </div>
                <div className="mt-2.5 flex">
                  {avatars.map((a) => (
                    <i
                      key={a.t}
                      className={`-ml-2 grid h-7.5 w-7.5 place-items-center rounded-full border-2 border-surface text-[12px] font-bold not-italic text-white first:ml-0 ${a.c}`}
                    >
                      {a.t}
                    </i>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-[6%] left-[-6%] z-3 animate-floaty rounded-brand border border-line-soft bg-surface px-4.5 py-3.75 shadow-brand [animation-delay:1.2s]">
                <div className="flex items-center gap-2.25 text-[13px] font-semibold text-ink">
                  <FiCheck className="h-3.75 w-3.75 text-teal" />
                  Placement confirmed
                </div>
                <div className="mt-0.75 text-[12px] text-ink-faint">
                  90-day guarantee active
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-y border-line bg-ground-2">
        <div
          className={`${wrap} flex flex-wrap items-center justify-between gap-7.5 py-6.5`}
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
            What we cover
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Executive search",
              "Mid-level & specialist",
              "Graduate & internship",
              "HR advisory",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[13px] font-semibold text-ink-soft"
              >
                <FiCheck className="h-3.5 w-3.5 text-teal" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={`${wrap} ${section}`}>
        <SectionHead
          eyebrow="What we do"
          title="Recruitment, done with rigor at every level."
          right={<LinkArrow to="/services">All services</LinkArrow>}
        />
        <div className="border-t border-line">
          {services.map((s) => (
            <Reveal key={s.id}>
              <Link
                to={`/services#${s.id}`}
                className="group relative grid grid-cols-[80px_1.1fr_1.4fr_auto] items-center gap-7 border-b border-line px-2 py-8.5 transition-all duration-500 ease-brand hover:px-5.5 max-[960px]:grid-cols-[50px_1fr_auto] max-[960px]:gap-4.5"
              >
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-surface opacity-0 transition duration-500 ease-brand group-hover:opacity-100" />
                <span className="relative z-1 font-display text-[22px] tabular-nums text-brass">
                  {s.num}
                </span>
                <h3 className="relative z-1 font-display text-[clamp(22px,2.6vw,29px)] leading-[1.1] text-ink">
                  {s.title}
                </h3>
                <p className="relative z-1 text-[15.5px] text-ink-soft max-[960px]:hidden">
                  {s.short}
                </p>
                <span className="relative z-1 grid h-11.5 w-11.5 place-items-center rounded-full border border-line text-pine transition-all duration-500 ease-brand group-hover:-rotate-45 group-hover:border-pine group-hover:bg-pine group-hover:text-surface">
                  <FiArrowRight className="h-4.25 w-4.25" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-pine-deep">
        <div className={`${wrapWide} ${section}`}>
          <div className="grid grid-cols-2 items-center gap-[clamp(30px,5vw,72px)] max-[960px]:grid-cols-1 max-[960px]:gap-9">
            <div>
              <Reveal>
                <Eyebrow onDark>What makes us different</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-4.5 font-display text-[clamp(30px,4.4vw,52px)] leading-[1.04] tracking-[-0.015em] text-balance text-on-dark">
                  We assess. We stay. We don&rsquo;t take shortcuts.
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className={`${leadText} mt-5 text-on-dark-soft`}>
                  Anyone can forward a CV. We evaluate every candidate against a
                  competency framework built specifically for your role and
                  level — then we stay after the offer, with structured
                  check-ins and a replacement guarantee.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-7.5">
                  <Button to="/about" variant="outline-light" withArrow>
                    Our story
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="flex flex-col">
                {differentiators.map((d, i) => {
                  const DiffIcon = diffIcons[i];
                  return (
                    <div
                      key={d.h}
                      className="grid grid-cols-[auto_1fr] items-start gap-4.5 border-b border-[rgba(238,230,212,0.14)] py-5 last:border-b-0"
                    >
                      <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-sage-soft text-pine">
                        <DiffIcon className="h-4.75 w-4.75" />
                      </span>
                      <div>
                        <h4 className="mb-1 font-sans text-[17px] font-bold text-on-dark">
                          {d.h}
                        </h4>
                        <p className="text-[15px] text-on-dark-soft">{d.p}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className={`${wrap} ${section}`}>
        <SectionHead
          eyebrow="How we work"
          title="A structured, deliberate process — from first brief to final placement."
          right={<LinkArrow to="/process">The full process</LinkArrow>}
        />
        <div className="grid grid-cols-3 gap-5.5 max-[720px]:grid-cols-1">
          {process.slice(0, 3).map((p, i) => (
            <Reveal key={p.num} delay={i * 0.08}>
              <Card>
                <span className="font-display text-[22px] tabular-nums text-brass">
                  {p.num}
                </span>
                <h3 className="mt-3.5 font-display text-[22px] text-ink">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[15.5px] text-ink-soft">{p.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="bg-pine-deep">
        <div className={`${wrapWide} ${section}`}>
          <Reveal>
            <div className="mb-11 flex justify-center">
              <Eyebrow center onDark>
                By the numbers
              </Eyebrow>
            </div>
          </Reveal>
          <div className="grid grid-cols-4 gap-5 max-[960px]:grid-cols-2 max-[960px]:gap-y-9">
            {[
              {
                k: "Speed",
                b: <Counter value="14" />,
                l: "Days from brief to a vetted shortlist",
              },
              {
                k: "Guarantee",
                b: <Counter value="90" />,
                l: "Day replacement guarantee on every placement",
              },
              {
                k: "Coverage",
                b: "C-suite",
                l: "Same rigor from graduate hire to executive search",
              },
              {
                k: "Follow-through",
                b: "30/60",
                l: "Day structured check-ins after every placement",
              },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 0.08}>
                <div>
                  <div className="mb-3.5 text-xs font-bold uppercase tracking-[0.16em] text-sage">
                    {s.k}
                  </div>
                  <b className="block font-display text-[clamp(42px,5.6vw,68px)] leading-none tracking-[-0.02em] tabular-nums text-on-dark">
                    {s.b}
                  </b>
                  <div className="mt-3 max-w-[24ch] text-[14.5px] text-on-dark-soft">
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className={`${wrap} ${section}`}>
        <SectionHead
          eyebrow="SIRA HR Nuggets"
          title="Insights on hiring, leadership & talent."
          right={<LinkArrow to="/insights">All insights</LinkArrow>}
        />
        <div className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-2 max-[720px]:grid-cols-1">
          {insights.slice(0, 3).map((a, i) => (
            <Reveal key={a.id} delay={i * 0.08}>
              <InsightCard insight={a} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="bg-pine-deep">
        <div className={`${wrapWide} ${section}`}>
          <div className="grid grid-cols-2 items-center gap-[clamp(30px,5vw,72px)] max-[960px]:grid-cols-1 max-[960px]:gap-9">
            <Reveal>
              <div>
                <span className="block h-13 font-display text-[120px] leading-[0.6] text-sage">
                  &ldquo;
                </span>
                <p className="max-w-[20ch] font-display text-[clamp(24px,3.4vw,42px)] font-light leading-[1.28] tracking-[-0.01em] text-on-dark">
                  The quality of your hires determines the quality of your
                  growth. SIRA HR treats every search like it matters — because
                  it does.
                </p>
                <p className="mt-6 font-semibold text-on-dark">
                  People &amp; Talent Lead
                </p>
                <p className="text-[14px] text-on-dark-soft">
                  Venture-backed company · Lagos
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <Eyebrow onDark>Open roles</Eyebrow>
                <h3 className={`${headingSm} my-4 text-on-dark`}>
                  We&rsquo;re hiring on behalf of ambitious teams.
                </h3>
                <p className={`${leadText} mb-6.5 text-on-dark-soft`}>
                  From HR leadership to founding sales — explore the roles
                  we&rsquo;re actively recruiting for right now.
                </p>
                <Button to="/careers" variant="light" withArrow>
                  View open roles
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <CtaBand
        eyebrow="Let's get started"
        title="Ready to build the team that drives your next chapter?"
        lead="Send us your role brief or set up a 30-minute discovery call. You'll receive a shortlist of 3 to 5 assessed candidates within 14 days."
        actions={[
          { label: "Book a discovery call", to: "/book" },
          { label: "Send a role brief", to: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
