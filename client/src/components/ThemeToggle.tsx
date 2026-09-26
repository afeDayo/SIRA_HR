import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { getCurrentTheme, saveTheme, type Theme } from "../lib/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    saveTheme(nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-10 w-10 flex-none cursor-pointer place-items-center rounded-full border border-line text-ink-soft transition duration-300 hover:border-pine hover:text-pine"
    >
      {theme === "dark" ? <FiMoon className="h-[17px] w-[17px]" /> : <FiSun className="h-[17px] w-[17px]" />}
    </button>
  );
}
