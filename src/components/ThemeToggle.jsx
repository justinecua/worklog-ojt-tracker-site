import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "worklog-theme";
const darkQuery = "(prefers-color-scheme: dark)";
const CHANGE_EVENT = "worklog-theme-change";

// The theme actually on screen: the saved choice, else the device setting.
function currentTheme() {
  const saved = document.documentElement.dataset.theme;
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

// Re-render when the device setting changes or the toggle is used.
function subscribe(onChange) {
  const media = window.matchMedia(darkQuery);
  media.addEventListener("change", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

export default function ThemeToggle() {
  // Pre-rendered HTML assumes light; the real theme is picked up on hydration.
  const theme = useSyncExternalStore(subscribe, currentTheme, () => "light");

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked; the choice still applies for this visit.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
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
