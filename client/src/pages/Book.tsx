import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import BookingForm from "../components/BookingForm";
import { wrapWide, section, headingSm } from "../lib/ui";

const expect = [
  { n: "1", h: "Understand your needs", p: "We learn about the role, the team and what success looks like for you." },
  { n: "2", h: "Map the approach", p: "We outline how we'd run the search — timeline, market and shortlist." },
  { n: "3", h: "Clear next steps", p: "You leave with a plan. If we begin, we start within 5 working days." },
];

export default function Book() {
  return (
    <>
      <PageHero
        crumb="Book a call"
        eyebrow="Discovery call"
        title={<>Book a 30-minute <span className="font-light italic">discovery call</span>.</>}
        lead="A focused conversation about your hiring needs — no pressure, no obligation. We'll tell you honestly whether and how we can help."
      />

      <div className={`${wrapWide} ${section} pt-6`}>
        <div className="grid grid-cols-2 items-start gap-[clamp(30px,5vw,72px)] max-[960px]:grid-cols-1 max-[960px]:gap-9">
          <Reveal>
            <div>
              <h3 className={`${headingSm} mb-[22px]`}>What to expect</h3>
              <div className="flex flex-col">
                {expect.map((e) => (
                  <div key={e.n} className="grid grid-cols-[auto_1fr] items-start gap-[18px] border-b border-line py-5 last:border-b-0">
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-sage-soft font-bold text-pine">{e.n}</span>
                    <div>
                      <h4 className="mb-1 font-sans text-[17px] font-bold text-ink">{e.h}</h4>
                      <p className="text-[15px] text-ink-soft">{e.p}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-[30px] rounded-brand bg-sage-soft p-[22px] text-pine">
                <p className="font-display text-[20px] leading-[1.3]">&ldquo;Landing the right hire is strategy, not luck. So is the conversation that starts it.&rdquo;</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-brand-lg border border-line-soft bg-surface p-[clamp(28px,4vw,44px)] shadow-soft">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
