import { IdCard, CalendarDays, TrendingUp, FileText, PenLine } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import CardTitle from "./CardTitle";
import IconBox from "./IconBox";

export default function HowItWorks() {
  const steps = [
    {
      icon: IdCard,
      title: "Set up your profile",
      desc: "Enter your required OJT hours, plus your school, company, and supervisor details for reports.",
    },
    {
      icon: CalendarDays,
      title: "Log your hours",
      desc: "Pick a date on the calendar and enter your time-in and time-out. Logs save automatically.",
    },
    {
      icon: TrendingUp,
      title: "Track your progress",
      desc: "Watch your remaining hours update live and see when you're projected to finish.",
    },
    {
      icon: FileText,
      title: "Generate your report",
      desc: "Export a PDF Daily Time Record that's ready to print or submit.",
    },
  ];

  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-20">
      <SectionTitle
        kicker="How it works"
        title="Log. Track. Report."
        subtitle="A simple workflow that feels natural during busy OJT days."
      />

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Card as="li" key={s.title} className="p-5">
            <div className="flex items-center justify-between">
              <IconBox icon={s.icon} />
              <span className="text-sm font-extrabold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 text-[15px] font-bold">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-muted">{s.desc}</p>
          </Card>
        ))}
      </ol>

      <Card className="mx-auto mt-4 flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
        <div className="flex-1">
          <CardTitle>Quick Tip</CardTitle>
          <p className="mt-2 text-sm leading-6 text-muted">
            Use the <span className="font-bold text-ink">Quick Log</span>{" "}
            button on the home screen to instantly open today&apos;s time log
            with the current time pre-filled.
          </p>
        </div>
        <span className="inline-flex items-center justify-center gap-1.5 rounded-[14px] bg-brand px-5 py-3 text-sm font-bold text-white">
          <PenLine className="h-4 w-4" />
          Quick Log
        </span>
      </Card>
    </section>
  );
}
