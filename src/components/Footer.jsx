import { APP_NAME, CONTACT_EMAIL } from "../constants/app";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const linkClass = "font-semibold text-muted transition hover:text-brand";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10">
      <div className="flex flex-col items-center gap-4 border-t border-brand-100 pt-8 text-center">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <HashLink smooth to="/#features" className={linkClass}>
            Features
          </HashLink>
          <HashLink smooth to="/#faq" className={linkClass}>
            FAQ
          </HashLink>
          <Link to="/privacy" className={linkClass}>
            Privacy Policy
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
            Contact
          </a>
        </nav>
        <p className="text-xs tracking-[0.03em] text-muted/70">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
