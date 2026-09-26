import { FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import LinkArrow from "../components/LinkArrow";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { site } from "../lib/data";
import { wrapWide, section } from "../lib/ui";

const rows = [
  { Icon: FiMail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { Icon: FiPhone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { Icon: FiMapPin, label: "Based in", value: site.location },
  { Icon: FiLinkedin, label: "Connect", value: "SIRA HR on LinkedIn", href: site.linkedin },
];

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Send us your role brief."
        lead="Tell us what you're building. You'll receive a shortlist of 3 to 5 assessed candidates within 14 days."
      />

      <div className={`${wrapWide} ${section} pt-6`}>
        <div className="grid grid-cols-2 items-start gap-[clamp(30px,5vw,72px)] max-[960px]:grid-cols-1 max-[960px]:gap-9">
          <Reveal>
            <div>
              <div>
                {rows.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 border-b border-line py-[22px] last:border-b-0">
                    <span className="grid h-[46px] w-[46px] flex-none place-items-center rounded-full bg-sage-soft text-pine"><Icon className="h-[19px] w-[19px]" /></span>
                    <div>
                      <div className="text-[12.5px] font-semibold uppercase tracking-[0.06em] text-ink-faint">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-[17px] font-medium text-ink transition hover:text-pine"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-[17px] font-medium text-ink">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-[34px] rounded-brand border border-line-soft bg-surface p-[26px]">
                <div className="mb-2.5"><Eyebrow>Prefer to talk?</Eyebrow></div>
                <p className="mb-4 text-[15px] text-ink-soft">Set up a 30-minute discovery call and we&rsquo;ll walk through your hiring needs together.</p>
                <LinkArrow to="/book">Book a discovery call</LinkArrow>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-brand-lg border border-line-soft bg-surface p-[clamp(28px,4vw,44px)] shadow-soft">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
