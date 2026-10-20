export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker && (
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-muted">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[15px] leading-7 text-muted sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
