import { Link } from "react-router";
import { FiGlobe, FiInstagram, FiLinkedin } from "react-icons/fi";
import footerLogo from "../assets/SIRI LOGO.png";
import Button from "./Button";
import NewsletterForm from "./NewsletterForm";
import { site } from "../lib/data";
import { wrapWide } from "../lib/ui";

const footerLink =
  "block py-[7px] text-[15px] text-on-dark-soft transition duration-300 hover:translate-x-[3px] hover:text-on-dark";
const footerHeading =
  "mb-[18px] text-xs font-bold uppercase tracking-[0.16em] text-sage";

const socials = [
  { href: site.website, label: "Website", Icon: FiGlobe },
  { href: site.linkedin, label: "LinkedIn", Icon: FiLinkedin },
  { href: site.instagram, label: "Instagram", Icon: FiInstagram },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pine-deeper pt-[clamp(56px,7vw,84px)] pb-8.5 text-on-dark">
      <div className={wrapWide}>
        <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr] gap-10 border-b border-[rgba(238,230,212,0.14)] pb-13 max-[960px]:grid-cols-2 max-[960px]:gap-8.5 max-[520px]:grid-cols-1">
          <div>
            <Link
              to="/"
              className="mb-4.5 flex items-center gap-2.75 font-display text-[20px] font-semibold tracking-[-0.02em] text-on-dark"
            >
              <img src={footerLogo} alt="" className="w-20 flex-none" />
            </Link>
            <p className="mb-5.5 max-w-[34ch] text-[15px] text-on-dark-soft">
              Helping companies build the teams that drive growth — across every
              level, from specialist to C-suite.
            </p>
            <Button to="/book" variant="light" withArrow>
              Book a discovery call
            </Button>
          </div>

          <div>
            <h2 className={footerHeading}>Company</h2>
            <Link className={footerLink} to="/about">
              About
            </Link>
            <Link className={footerLink} to="/services">
              Services
            </Link>
            <Link className={footerLink} to="/process">
              Process
            </Link>
            <Link className={footerLink} to="/insights">
              Insights
            </Link>
          </div>

          <div>
            <h2 className={footerHeading}>Work with us</h2>
            <Link className={footerLink} to="/careers">
              Open roles
            </Link>
            <Link className={footerLink} to="/contact">
              Send a brief
            </Link>
            <Link className={footerLink} to="/book">
              Book a call
            </Link>
            <Link className={footerLink} to="/careers#apply">
              Submit your CV
            </Link>
          </div>

          <div>
            <h2 className={footerHeading}>Get our insights</h2>
            <p className="mb-4 text-[14.5px] text-on-dark-soft">
              Practical hiring &amp; leadership nuggets, twice a month.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 pt-7">
          <p className="text-[13.5px] text-on-dark-soft">
            © {year} {site.name} ·{" "}
            <a href={`mailto:${site.email}`} className="hover:text-on-dark">
              {site.email}
            </a>{" "}
            ·{" "}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="hover:text-on-dark"
            >
              {site.phone}
            </a>{" "}
            · {site.location}
          </p>
          <div className="flex gap-2.5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(238,230,212,0.2)] text-on-dark-soft transition duration-500 ease-brand hover:-translate-y-0.75 hover:border-sage hover:bg-sage hover:text-pine-deep"
              >
                <Icon className="h-4.25 w-4.25" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
