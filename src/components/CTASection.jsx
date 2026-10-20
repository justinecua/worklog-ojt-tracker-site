import { useRef } from "react";
import { Apple, Clock, Mail, PenLine, Play } from "lucide-react";
import { useCountUp, useInView } from "../hooks/useInView";
import { CONTACT_EMAIL, PLAY_STORE_URL } from "../constants/app";

const pill =
  "inline-flex items-center gap-2 rounded-full border-2 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.08em] transition";

// Same thresholds as the app's progress card.
const ringColor = (percent) =>
  percent >= 75 ? "#22c55e" : percent >= 40 ? "#f59e0b" : "#ef4444";

// Glossy "3D" orb holding an icon.
function Bubble({ icon, className = "" }) {
  const Icon = icon;
  return (
    <span
      className={`absolute flex items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#ffffff_0%,#ece9ff_35%,#9d90ff_100%)] text-[#4b4596] shadow-[0_14px_30px_rgba(0,0,0,0.35),inset_0_-6px_14px_rgba(76,61,180,0.45)] ${className}`}
    >
      <Icon className="h-1/2 w-1/2" strokeWidth={2.4} />
    </span>
  );
}

// Progress ring that fills to 100% the first time it scrolls into view.
function RingArt() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const percent = useCountUp(inView, 100);
  const size = 200;
  const stroke = 22;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  return (
    <div
      ref={ref}
      className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 sm:h-[230px] sm:w-[230px]"
    >
      <div
        className="absolute inset-6 rounded-full blur-2xl transition-colors duration-500"
        style={{ backgroundColor: `${ringColor(percent)}55` }}
      />
      <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={ringColor(percent)}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - percent / 100)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke 0.4s ease" }}
        />
      </svg>
      <div className="absolute inset-[30px] flex flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.22),rgba(255,255,255,0.04))] shadow-[inset_0_2px_12px_rgba(255,255,255,0.15)]">
        <span className="text-4xl font-extrabold tabular-nums text-white">
          {percent}%
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
          {percent === 100 ? "All done 🎉" : "Complete"}
        </span>
      </div>
      <Bubble icon={PenLine} className="-left-6 top-2 h-14 w-14 -rotate-12" />
      <Bubble icon={Clock} className="-right-2 bottom-0 h-12 w-12 rotate-12" />
    </div>
  );
}

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-4">
      <div className="relative flex flex-col overflow-hidden rounded-[20px] bg-[linear-gradient(120deg,#15132a_0%,#29245c_55%,#4b44a8_100%)] sm:h-[320px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle,rgb(255_255_255/0.1)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_right,black,transparent_70%)]"
        />

        {/* Phones: ring sits below the text. Wider: on the right. */}
        <div className="relative z-10 flex flex-col justify-center px-6 pt-8 sm:h-full sm:max-w-[58%] sm:px-10 sm:pt-0">
          <h2 className="text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.4rem]">
            Start logging your
            <br />
            OJT hours{" "}
            <span className="bg-gradient-to-r from-[#86efac] to-[#22c55e] bg-clip-text text-transparent">
              today
            </span>
          </h2>
          <div className="mt-4 flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#1a1a2e]">
              <PenLine className="h-4 w-4" />
            </span>
            <p className="max-w-xs text-sm leading-5 text-white/85">
              Available now on Google Play. The iOS version is coming soon.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className={`${pill} border-white bg-white text-[#1a1a2e] hover:bg-transparent hover:text-white`}
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Get it on Google Play
            </a>
            <span
              aria-disabled="true"
              className={`${pill} cursor-default border-white/40 text-white/70`}
            >
              <Apple className="h-3.5 w-3.5" />
              iOS coming soon
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none relative mt-auto h-[250px] w-full sm:absolute sm:inset-y-0 sm:right-0 sm:mt-0 sm:h-auto sm:w-[42%]"
        >
          <RingArt />
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        Questions or suggestions?{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
        >
          <Mail className="h-3.5 w-3.5" />
          {CONTACT_EMAIL}
        </a>
      </p>
    </section>
  );
}
