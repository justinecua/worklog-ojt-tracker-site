import { Apple, Play } from "lucide-react";
import { PLAY_STORE_URL } from "../constants/app";

// Primary/secondary pair styled like the app's Quick Log / View Logs buttons.
export default function StoreButtons({ className = "", onBrand = false }) {
  return (
    <div className={`flex flex-col gap-2.5 sm:flex-row ${className}`}>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-[14px] px-6 py-3.5 text-sm font-bold tracking-[0.015em] transition ${
          onBrand
            ? "bg-white text-brand hover:bg-brand-50"
            : "bg-brand text-white hover:bg-brand-dark"
        }`}
      >
        <Play className="h-4 w-4 fill-current" />
        Get it on Google Play
      </a>

      <span
        aria-disabled="true"
        className={`inline-flex cursor-default items-center justify-center gap-2 rounded-[14px] px-6 py-3.5 text-sm font-bold tracking-[0.015em] ${
          onBrand
            ? "border border-white/30 text-white/80"
            : "border border-brand-100 bg-brand-50 text-brand"
        }`}
      >
        <Apple className="h-4 w-4" />
        iOS coming soon
      </span>
    </div>
  );
}
