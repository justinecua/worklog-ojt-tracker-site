import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";
import { PLAY_STORE_URL } from "../constants/app";

const links = [
  { label: "Features", to: "/#features" },
  { label: "How it works", to: "/#how" },
  { label: "Demo", to: "/#video" },
  { label: "FAQ", to: "/#faq" },
];

const linkClass =
  "rounded-[10px] px-3 py-2 text-sm font-semibold text-muted transition hover:bg-brand-50 hover:text-brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas/80 px-4 pt-4 backdrop-blur">
      <div className="mx-auto max-w-[70rem] rounded-[15px] border border-brand-100 bg-surface shadow-card">
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5">
          <Link to="/" onClick={close} className="flex items-center gap-2">
            <img src={logo} alt="" className="h-8 w-8 object-contain" />
            <span className="text-base font-bold tracking-[0.025em] text-ink">
              Worklog - OJT
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <HashLink key={l.to} smooth to={l.to} className={linkClass}>
                {l.label}
              </HashLink>
            ))}
            <Link to="/privacy" className={linkClass}>
              Privacy
            </Link>
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-[10px] bg-brand px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-dark sm:inline-flex"
            >
              Get the app
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-[10px] text-brand hover:bg-brand-50 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col border-t border-brand-100 p-2 md:hidden">
            {links.map((l) => (
              <HashLink
                key={l.to}
                smooth
                to={l.to}
                onClick={close}
                className={linkClass}
              >
                {l.label}
              </HashLink>
            ))}
            <Link to="/privacy" onClick={close} className={linkClass}>
              Privacy
            </Link>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-[14px] bg-brand py-3 text-center text-sm font-bold text-white"
            >
              Get the app
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
