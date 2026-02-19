import { APP_NAME } from "../constants/app";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Worklog logo"
            className="h-12 w-12 rounded-xl object-cover p-1"
          />
          <div className="leading-tight">
            <div className="text-sm font-bold">{APP_NAME}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <HashLink
            smooth
            to="/#features"
            className="text-gray-600 hover:text-gray-900"
          >
            Features
          </HashLink>

          <HashLink
            smooth
            to="/#how"
            className="text-gray-600 hover:text-gray-900"
          >
            How it works
          </HashLink>

          <Link to="/privacy" className="text-gray-600 hover:text-gray-900">
            Privacy Policy
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/privacy"
            className="hidden rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 md:inline-flex"
          >
            View Privacy Policy
          </Link>
        </div>
      </div>
    </header>
  );
}
