import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import SiraMark from "./SiraMark";
import type { Insight } from "../lib/data";
import { grad } from "../lib/ui";

export default function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link
      to={`/insights/${insight.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-brand border border-line-soft bg-surface transition duration-500 ease-brand hover:-translate-y-1.5 hover:shadow-soft"
    >
      <div className={`relative grid aspect-[16/10] place-items-center ${grad[insight.gradient]}`}>
        <span className="absolute left-3.5 top-3.5 rounded-full bg-[rgba(8,39,34,0.5)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-[6px]">
          {insight.category}
        </span>
        <SiraMark className="w-[34%]" monochrome="light" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2.5 text-[12.5px] text-ink-faint">
          {insight.date} <span>·</span> {insight.readTime} read
        </div>
        <h3 className="font-display text-[21px] leading-[1.15] text-ink">{insight.title}</h3>
        <p className="flex-1 text-[14.5px] text-ink-soft">{insight.excerpt}</p>
        <span className="mt-1.5 inline-flex items-center gap-[7px] text-[14px] font-semibold text-pine">
          Read the nugget
          <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 ease-brand group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
