import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import PageHero from "../components/PageHero";
import InsightCard from "../components/InsightCard";
import NewsletterForm from "../components/NewsletterForm";
import { insights } from "../lib/data";
import { wrapWide, section, dmd, lead as leadCls } from "../lib/ui";

export default function Insights() {
  return (
    <>
      <PageHero
        crumb="Insights"
        eyebrow="SIRA HR Nuggets"
        title={<>Insights on hiring, leadership &amp; <span className="font-light italic">talent</span>.</>}
        lead="Practical thinking on recruitment, retention and building teams that last — from our #FridayNuggets series and beyond."
      />

      <div className={`${wrapWide} ${section} pt-6`}>
        <div className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-2 max-[720px]:grid-cols-1">
          {insights.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 0.08}>
              <InsightCard insight={a} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="bg-pine-deep">
        <div className={`mx-auto w-full max-w-[720px] px-[clamp(20px,5vw,64px)] ${section} text-center`}>
          <Reveal><div className="flex justify-center"><Eyebrow center onDark>Never miss a nugget</Eyebrow></div></Reveal>
          <Reveal delay={0.08}><h2 className={`${dmd} my-4 text-on-dark`}>Get our insights in your inbox.</h2></Reveal>
          <Reveal delay={0.14}><p className={`${leadCls} mx-auto mb-[26px] text-on-dark-soft`}>Join the newsletter for practical hiring and leadership insights, roughly twice a month. No noise.</p></Reveal>
          <Reveal delay={0.18}><NewsletterForm variant="dark" /></Reveal>
        </div>
      </div>
    </>
  );
}
