import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import SiraMark from "./SiraMark";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import { nav } from "../lib/data";

const linkBase =
  "rounded-full px-3.75 py-2.25 text-[14.5px] font-medium transition duration-300 ease-brand hover:bg-line-soft hover:text-ink";

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  const barStyle = scrolled
    ? "shadow-soft bg-[color-mix(in_srgb,var(--color-ground)_90%,transparent)]"
    : "bg-[color-mix(in_srgb,var(--color-ground)_78%,transparent)]";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[90]">
        <div
          className={`mx-auto mt-3.5 flex w-[calc(100%-28px)] max-w-340 items-center justify-between gap-5 rounded-full border border-line-soft py-2.75 pl-5.5 pr-3.5 backdrop-blur-[18px] backdrop-saturate-150 transition-all duration-500 ease-brand ${barStyle}`}
        >
          <Link
            to="/"
            className="flex items-center gap-2.75 font-display text-[20px] font-semibold tracking-[-0.02em] text-ink"
            aria-label="SIRA HR home"
          >
            <SiraMark className="h-8.5 w-9.5 flex-none" />
            SIRA&nbsp;HR
          </Link>

          <nav className="flex items-center gap-1 max-[960px]:hidden" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `${linkBase} ${isActive ? "font-semibold text-pine" : "text-ink-soft"}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button to="/book" withArrow className="max-[960px]:hidden">
              Book a call
            </Button>
            <button
              type="button"
              className="hidden h-11 w-11 cursor-pointer place-items-center rounded-full border border-line text-ink max-[960px]:grid"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="fixed inset-0 z-[80] flex flex-col gap-1.5 overflow-y-auto bg-ground px-[clamp(20px,5vw,64px)] pb-10 pt-27.5"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {nav.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-line-soft py-3 font-display text-[32px] ${isActive ? "text-pine" : "text-ink"}`
                }
              >
                {item.label}
                <span className="font-sans text-[13px] text-ink-faint">{String(index + 1).padStart(2, "0")}</span>
              </NavLink>
            ))}
            <Button to="/book" withArrow className="mt-5.5 w-full justify-center">
              Book a discovery call
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
