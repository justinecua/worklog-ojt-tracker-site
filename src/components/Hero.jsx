import Badge from "./Badge";
import { Apple, Smartphone } from "lucide-react";
import phone from "../assets/hero4.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f5f4ff]">
      <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center px-5">
        <div className="max-w-xl z-10">
          <div className="flex flex-wrap gap-2">
            <Badge>OJT hour logging</Badge>
            <Badge>Progress tracking</Badge>
            <Badge>Offline</Badge>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#5D57AC] sm:text-5xl">
            Track your internship hours without stress.
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Know what you’ve completed and what’s left at a glance.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=com.justinecua.worklog&hl=en"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5D57AC] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#4a4494]"
            >
              <Smartphone className="h-5 w-5" />
              Android
            </a>

            <a
              href="#download-note"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#5D57AC] bg-white px-6 py-3 text-sm font-semibold text-[#5D57AC] shadow-sm transition hover:bg-[#f3f2ff]"
            >
              <Apple className="h-5 w-5" />
              iOS (Coming Soon)
            </a>
          </div>
        </div>
      </div>

      {/* ABSOLUTE PHONE */}
      <img
        src={phone}
        alt="Worklog app preview"
        className="
      hidden md:block
      absolute
      right-0
      bottom-0
      w-[700px]
      lg:w-[900px]
      xl:w-[1100px]
      2xl:w-[1250px]
      translate-x-20
      translate-y-30
      drop-shadow-2xl
    "
      />
    </section>
  );
}
