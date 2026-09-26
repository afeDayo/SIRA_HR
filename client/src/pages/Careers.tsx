import { useMemo, useState } from "react";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import Reveal from "../components/Reveal";
import ApplyForm from "../components/ApplyForm";
import PageHero from "../components/PageHero";
import { jobs } from "../lib/data";
import { wrap, section, pill, pillGray } from "../lib/ui";

export default function Careers() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(jobs.map((j) => j.category)))], []);
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? jobs : jobs.filter((j) => j.category === filter);

  return (
    <>
      <PageHero
        crumb="Careers"
        eyebrow="Open roles"
        title={<>Roles we&rsquo;re <span className="font-light italic">actively</span> recruiting.</>}
        lead="We recruit on behalf of ambitious teams across industries. Found something that fits? Apply and we'll be in touch — landing an interview is strategy, not luck."
      />

      <div className={`${wrap} ${section} pt-6`}>
        <Reveal>
          <div className="mb-[30px] flex flex-wrap gap-2.5">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={c === filter}
                onClick={() => setFilter(c)}
                className={`inline-flex cursor-pointer items-center rounded-full border px-4 py-2 text-[13px] font-semibold transition duration-300 ${c === filter ? "border-pine bg-pine text-surface" : "border-line bg-surface text-ink-soft hover:border-pine"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {list.map((j, i) => (
          <Reveal key={j.id} delay={i * 0.05}>
            <Link
              to={`/careers/${j.id}`}
              className="group mb-3.5 grid grid-cols-[1.5fr_1fr_1fr_auto] items-center gap-6 rounded-brand border border-line bg-surface px-6 py-[26px] transition duration-500 ease-brand hover:-translate-y-0.5 hover:border-teal hover:shadow-soft max-[960px]:grid-cols-[1fr_auto] max-[960px]:gap-3"
            >
              <div>
                <h3 className="mb-1.5 font-display text-[20px] text-ink">{j.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className={pill}>{j.type}</span>
                  <span className={pillGray}>{j.mode}</span>
                </div>
              </div>
              <div className="text-[14.5px] text-ink-soft max-[960px]:hidden">
                <span className="block text-xs uppercase tracking-[0.06em] text-ink-faint">Location</span>{j.location}
              </div>
              <div className="text-[14.5px] text-ink-soft max-[960px]:hidden">
                <span className="block text-xs uppercase tracking-[0.06em] text-ink-faint">Function</span>{j.category}
              </div>
              <span className="grid h-[46px] w-[46px] flex-none place-items-center rounded-full border border-line text-pine transition duration-500 ease-brand group-hover:border-pine group-hover:bg-pine group-hover:text-surface">
                <FiArrowRight className="h-[17px] w-[17px]" />
              </span>
            </Link>
          </Reveal>
        ))}

        <Reveal>
          <div id="apply" className="mt-10 grid scroll-mt-28 grid-cols-2 gap-[clamp(24px,4vw,56px)] rounded-brand-lg border border-dashed border-line bg-surface p-[clamp(24px,4vw,44px)] max-[960px]:grid-cols-1">
            <div>
              <p className="mb-1.5 text-ink-soft">Don&rsquo;t see the right role?</p>
              <h2 className="mb-3 font-display text-[clamp(24px,3vw,32px)] leading-[1.15] text-ink">Send us your CV — we&rsquo;ll keep you in mind.</h2>
              <p className="text-[15px] text-ink-soft">
                Share a link to your LinkedIn profile or CV. When a role that fits comes up, we&rsquo;ll reach out to you first.
              </p>
            </div>
            <ApplyForm jobId="general" jobTitle="General application" />
          </div>
        </Reveal>
      </div>
    </>
  );
}
