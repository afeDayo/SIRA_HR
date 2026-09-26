import { Link, useParams } from "react-router";
import { FiCheck } from "react-icons/fi";
import Reveal from "../components/Reveal";
import ApplyForm from "../components/ApplyForm";
import NotFound from "./NotFound";
import { jobs } from "../lib/data";
import { wrapWide, headingLg, leadText, pill, pillGray } from "../lib/ui";

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <FiCheck className="mt-1 h-4.5 w-4.5 flex-none text-teal" />
          <span className="text-ink-soft">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);
  if (!job) return <NotFound />;

  return (
    <>
      <title>{`${job.title} · Careers · SIRA HR`}</title>
      <div className={`${wrapWide} pb-5 pt-[clamp(140px,16vw,200px)]`}>
        <Reveal>
          <p className="text-[13px] tracking-[0.04em] text-ink-faint">
            <Link to="/careers" className="font-semibold text-pine">Careers</Link>&nbsp;/&nbsp;{job.title}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="my-[18px] flex flex-wrap gap-2.5">
            <span className={pill}>{job.type}</span>
            <span className={pillGray}>{job.mode}</span>
            <span className={pillGray}>{job.location}</span>
            <span className={pillGray}>{job.category}</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className={`${headingLg} max-w-[18ch]`}>{job.title}</h1>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 items-start gap-[clamp(30px,5vw,64px)] max-[960px]:grid-cols-1 max-[960px]:gap-9">
          <Reveal delay={0.14}>
            <div>
              <p className={`${leadText} mb-[30px]`}>{job.summary}</p>
              <h3 className="mb-3.5 font-display text-[24px] text-ink">What you&rsquo;ll do</h3>
              <div className="mb-7.5"><CheckList items={job.responsibilities} /></div>
              <h3 className="mb-3.5 font-display text-[24px] text-ink">What we&rsquo;re looking for</h3>
              <CheckList items={job.requirements} />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="sticky top-[100px] rounded-brand-lg border border-line-soft bg-surface p-[clamp(28px,4vw,44px)] shadow-soft">
              <h3 className="mb-1.5 font-display text-[22px] text-ink">Apply for this role</h3>
              <p className="mb-5 text-[14.5px] text-ink-soft">Tell us a little about you and we&rsquo;ll be in touch.</p>
              <ApplyForm jobId={job.id} jobTitle={job.title} />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="h-[clamp(40px,6vw,80px)]" />
    </>
  );
}
