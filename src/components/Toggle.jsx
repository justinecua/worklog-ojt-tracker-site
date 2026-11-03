// Static switch for previews; mirrors the app's Switch styling.
export default function Toggle({ on = false }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex h-5 w-9 shrink-0 rounded-full transition ${
        on ? "bg-brand" : "bg-brand-100"
      }`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow ${
          on ? "left-[18px]" : "left-0.5"
        }`}
      />
    </span>
  );
}
