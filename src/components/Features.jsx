import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import {
  Clock,
  BarChart3,
  WifiOff,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: "Time Logs",
      desc: "Record time-in and time-out for morning and afternoon sessions.",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      desc: "See total completed hours and remaining hours at a glance.",
    },
    {
      icon: WifiOff,
      title: "Offline",
      desc: "Works without internet. Your logs remain available even offline.",
    },
    {
      icon: CalendarDays,
      title: "Daily View",
      desc: "Review and remove your logs per date for accurate reporting.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy focused",
      desc: "Designed to minimize data collection and keep things simple.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle
        kicker="Built for OJT students"
        title="Everything you need to stay on track"
        subtitle="Simple logging, clear progress, and a clean record you can trust."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}
