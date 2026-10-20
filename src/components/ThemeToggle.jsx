import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "worklog-theme";
const darkQuery = "(prefers-color-scheme: dark)";

// The theme actually on screen: the saved choice, else the device setting.
function currentTheme() {
  const saved = document.documentElement.dataset.theme;
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme);

  // Keep the icon in sync if the device setting changes and no choice is saved.
  useEffect(() => {
    const media = window.matchMedia(darkQuery);
    const onChange = () => setTheme(currentTheme());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked; the choice still applies for this visit.
    }
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-brand-100 text-brand transition hover:bg-brand-50"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
