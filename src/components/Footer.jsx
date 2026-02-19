import { APP_NAME, CONTACT_EMAIL } from "../constants/app";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm">
          <HashLink
            smooth
            to="/#features"
            className="text-gray-600 hover:text-gray-900"
          >
            Features
          </HashLink>

          <Link to="/privacy" className="text-gray-600 hover:text-gray-900">
            Privacy Policy
          </Link>

          <a
            className="text-gray-600 hover:text-gray-900"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
