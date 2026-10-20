import { Moon, PenLine, Sun } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import StoreButtons from "./StoreButtons";
import homeLight from "../assets/app-home-light.jpg";
import homeDark from "../assets/app-home-dark.jpg";

const facts = [
  ["0", "Accounts", "text-brand"],
  ["0", "Ads", "text-success"],
  ["100%", "Offline", "text-danger"],
];

const phones = [
  {
    src: homeLight,
    alt: "Worklog home screen in light mode showing OJT progress, calendar, and Quick Log",
    label: "Light mode",
    icon: Sun,
    offset: "",
  },
  {
    src: homeDark,
    alt: "Worklog home screen in dark mode",
    label: "Dark mode",
    icon: Moon,
    offset: "mt-10 sm:mt-16",
  },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 text-center sm:pt-20">
      {/* Mirrors the app's welcome card */}
      <div className="inline-flex items-center gap-3 rounded-[14px] border border-brand-100 bg-surface py-1.5 pl-1.5 pr-4 shadow-card">
        <span className="inline-flex items-center gap-1.5 rounded-[10px] bg-brand px-3 py-1.5 text-xs font-bold text-white">
          <PenLine className="h-3.5 w-3.5" />
          Quick Log
        </span>
        <span className="text-sm italic text-muted">
          &ldquo;Champions track their progress&rdquo;
        </span>
      </div>

      <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
        Your OJT hours,{" "}
        <span className="text-brand sm:block">counted for you.</span>
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
        Log your time-in and time-out, see what&apos;s left and when you&apos;ll
        finish, then export a Daily Time Record ready to submit.
      </p>

      <StoreButtons className="mt-8 justify-center" />

      <dl className="mx-auto mt-8 grid max-w-sm grid-cols-3 gap-3">
        {facts.map(([value, label, color]) => (
          <div
            key={label}
            className="flex flex-col items-center gap-0.5 rounded-xl border border-brand-100 bg-surface py-3"
          >
            <dt className="order-2 text-[10px] font-medium uppercase tracking-[0.03em] text-muted">
              {label}
            </dt>
            <dd className={`text-xl font-extrabold ${color}`}>{value}</dd>
          </div>
        ))}
      </dl>

      {/* Real app screenshots, light and dark */}
      <div className="relative mx-auto mt-16 max-w-3xl">
        <div
          aria-hidden="true"
          className="absolute inset-x-8 bottom-10 top-1/4 -z-10 rounded-[3rem] bg-brand/20 blur-3xl"
        />
        <div className="flex items-start justify-center gap-4 sm:gap-10">
          {phones.map(({ src, alt, label, icon, offset }) => {
            const Icon = icon;
            return (
              <figure key={label} className={`w-[46%] max-w-[300px] ${offset}`}>
                <PhoneFrame src={src} alt={alt} />
                <figcaption className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
