import SectionTitle from "./SectionTitle";
import { CONTACT_EMAIL } from "../constants/app";

export default function ContactSection() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle
          kicker="Need help?"
          title="Contact"
          subtitle="If you have questions, suggestions, or issues, feel free to reach out."
        />

        <div className="mx-auto mt-10 max-w-xl rounded-3xl bg-gray-50 p-8 text-center ring-1 ring-gray-200">
          <p className="text-sm text-gray-600">You can email me directly at:</p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-1 block text-lg font-semibold text-blue-700 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
