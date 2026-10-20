import { ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

const faqs = [
  {
    q: "Do I need internet or an account?",
    a: "No. Worklog works fully offline and there's nothing to sign up for. Open the app, set your required hours, and start logging.",
  },
  {
    q: "Where is my data stored?",
    a: "Only on your phone. Your logs, notes, and profile never leave your device, and the developer can't see or recover them.",
  },
  {
    q: "Can I move my logs to a new phone?",
    a: "Yes. Go to More → Backup & Restore, export a backup file, then use Import from file on your new phone. Restoring replaces the logs and notes on that device.",
  },
  {
    q: "Can I submit the PDF as my Daily Time Record?",
    a: "The PDF report lists your logged hours along with the student, company, and supervisor details from your profile, laid out as a Daily Time Record. Check with your school or coordinator for their exact requirements.",
  },
  {
    q: "What if I only work half a day?",
    a: "Turn off the Afternoon Session when you log that day, and only your morning hours will be counted.",
  },
  {
    q: "Is Worklog available on iPhone?",
    a: "The iOS version is coming soon. Worklog is currently available for Android on Google Play.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20">
      <SectionTitle kicker="FAQ" title="Questions, answered" />

      <Card className="mt-8 divide-y divide-brand-100 overflow-hidden">
        {faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[15px] font-semibold transition hover:bg-canvas">
              {f.q}
              <ChevronRight className="h-4 w-4 shrink-0 text-muted transition group-open:rotate-90" />
            </summary>
            <p className="px-5 pb-5 text-sm leading-6 text-muted">{f.a}</p>
          </details>
        ))}
      </Card>
    </section>
  );
}
