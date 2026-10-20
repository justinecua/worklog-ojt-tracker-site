import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import Card from "./Card";
import CardTitle from "./CardTitle";
import ProgressRing from "./ProgressRing";
import MetricChip from "./MetricChip";
import IconBox from "./IconBox";
import Toggle from "./Toggle";
import {
  Check,
  Clock,
  ChartColumn,
  TrendingUp,
  FileText,
  StickyNote,
  BellRing,
  DatabaseBackup,
  Moon,
  ShieldCheck,
  Sun,
  Sunset,
} from "lucide-react";

const reportThemes = [
  { name: "Print", desc: "Minimal black & white", color: "#1a1a2e" },
  { name: "Violet", desc: "Default purple & indigo", color: "#5c55ab" },
  { name: "Emerald", desc: "Clean corporate green", color: "#059669" },
  { name: "Rose", desc: "Bold & energetic red", color: "#e11d48" },
  { name: "Gold", desc: "Premium charcoal & amber", color: "#b45309" },
];

const paperSizes = ["A4", "Letter", "Legal", "A5"];

const moreFeatures = [
  {
    icon: BellRing,
    title: "Daily Reminders",
    desc: "Get a nudge at the time you choose so you never forget to log.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup & Restore",
    desc: "Export your logs and notes to a file and restore them on a new phone.",
  },
  {
    icon: StickyNote,
    title: "Notes",
    desc: "Keep tasks, learnings, and reminders from your OJT days.",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    desc: "Switch between light and dark, or follow your phone's setting.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Offline",
    desc: "No internet, no account. Your data never leaves your device.",
  },
];

function FeatureRow({ icon, title, desc, points, reverse = false, children }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : ""}>
        <IconBox icon={icon} />
        <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-muted">{desc}</p>
        <ul className="mt-5 space-y-2.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm font-medium">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <Card className="p-5 sm:p-7">{children}</Card>
    </div>
  );
}

function Session({ icon, title, timeIn, timeOut }) {
  const Icon = icon;
  return (
    <div>
      <p className="mb-2 flex items-center gap-2 text-sm font-bold">
        <Icon className="h-4 w-4 text-brand" />
        {title}
      </p>
      <div className="grid grid-cols-2 gap-2">
        <MetricChip label="Time In" value={timeIn} />
        <MetricChip label="Time Out" value={timeOut} />
      </div>
    </div>
  );
}

function StatBox({ value, label }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-0.5 rounded-xl border border-brand-100 bg-canvas py-3">
      <span className="text-2xl font-extrabold text-brand">{value}</span>
      <span className="text-[10px] font-medium tracking-[0.03em] text-muted">
        {label}
      </span>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20">
      <SectionTitle
        kicker="Features"
        title="Everything you need to stay on track"
        subtitle="Simple logging, clear progress, and reports you can submit."
      />

      <div className="mt-14 space-y-20">
        <FeatureRow
          icon={Clock}
          title="Time logs that fit your day"
          desc="Pick a date on the calendar and enter your time-in and time-out. Logs save automatically."
          points={[
            "Separate morning and afternoon sessions",
            "Turn off the afternoon session on half days",
            "Quick Log fills in the current time for you",
          ]}
        >
          <CardTitle>October 20, 2026</CardTitle>
          <div className="mt-5 space-y-4">
            <Session
              icon={Sun}
              title="Morning"
              timeIn="8:00 AM"
              timeOut="12:00 PM"
            />
            <div className="flex items-center justify-between rounded-xl border border-brand-100 px-3 py-2.5">
              <span className="text-sm font-semibold">Afternoon Session</span>
              <Toggle on />
            </div>
            <Session
              icon={Sunset}
              title="Afternoon"
              timeIn="1:00 PM"
              timeOut="5:00 PM"
            />
          </div>
        </FeatureRow>

        <FeatureRow
          reverse
          icon={TrendingUp}
          title="See your progress live"
          desc="Set your required hours once, and every log you save updates what's done and what's left."
          points={[
            "Days logged, total logged, and remaining hours",
            "Progress ring turns from red to amber to green",
            "Weekly summary of your hours on the home screen",
          ]}
        >
          <div className="flex items-center justify-between">
            <CardTitle>OJT Progress</CardTitle>
            <span className="inline-flex items-center gap-1.5 rounded-[10px] border border-brand-100 bg-canvas px-3 py-1.5 text-xs font-bold">
              <FileText className="h-3.5 w-3.5" />
              PDF Report
            </span>
          </div>
          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row">
            <ProgressRing percent={68} size={140} stroke={12} />
            <div className="w-full flex-1 space-y-2">
              <MetricChip
                label="Days Logged"
                value="41"
                valueClassName="text-brand"
              />
              <MetricChip
                label="Total Logged"
                value="326h 0m"
                valueClassName="text-success"
              />
              <MetricChip
                label="Remaining"
                value="154h 0m"
                valueClassName="text-danger"
              />
            </div>
          </div>
        </FeatureRow>

        <FeatureRow
          icon={ChartColumn}
          title="Know when you'll finish"
          desc="The Stats tab turns your logs into a forecast, so you can plan the rest of your OJT."
          points={[
            "Projected finish date based on your pace",
            "Current and longest logging streak",
            "Averages, overtime/undertime, and hours per month",
          ]}
        >
          <CardTitle>Projected Finish</CardTitle>
          <p className="mt-3 text-3xl font-extrabold tracking-tight">
            Dec 12, 2026
          </p>
          <div className="my-5 h-px bg-brand-100" />
          <CardTitle>Logging Streak</CardTitle>
          <div className="mt-3 flex gap-2">
            <StatBox value="14" label="CURRENT (DAYS)" />
            <StatBox value="21" label="LONGEST (DAYS)" />
          </div>
        </FeatureRow>

        <FeatureRow
          reverse
          icon={FileText}
          title="Reports ready to submit"
          desc="Generate a PDF Daily Time Record filled with your student, company, and supervisor details from your profile."
          points={[
            "5 color themes, from print-friendly to bold",
            "A4, Letter, Legal, or A5 paper",
            "Preview before you save or share",
          ]}
        >
          <p className="text-[15px] font-bold">Choose Report Theme</p>
          <p className="text-xs text-muted">Select a color style for your PDF</p>
          <div className="mt-4 divide-y divide-brand-100 rounded-[14px] border border-brand-100">
            {reportThemes.map((t, i) => (
              <div
                key={t.name}
                className={`flex items-center gap-3 px-3 py-2.5 ${
                  i === 1 ? "bg-brand-50" : ""
                }`}
              >
                <span
                  className="h-3 w-3 shrink-0 rounded-full ring-1 ring-ink/20"
                  style={{ backgroundColor: t.color }}
                />
                <span className="text-sm font-semibold">{t.name}</span>
                <span className="ml-auto truncate text-[11px] text-muted">
                  {t.desc}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.08em] text-muted">
            Paper Size
          </p>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {paperSizes.map((size, i) => (
              <span
                key={size}
                className={`rounded-xl border py-2 text-center text-xs font-bold ${
                  i === 0
                    ? "border-brand bg-brand-50 text-brand"
                    : "border-brand-100 text-muted"
                }`}
              >
                {size}
              </span>
            ))}
          </div>
          <div className="mt-4 rounded-[14px] bg-brand py-3 text-center text-sm font-bold text-white">
            Generate PDF
          </div>
        </FeatureRow>
      </div>

      <p className="mt-24 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-muted">
        And more
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {moreFeatures.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
