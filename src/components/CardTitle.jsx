// Card heading with the small accent bar, as on the app's progress card.
export default function CardTitle({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="h-4 w-[3.5px] rounded-full bg-brand" />
      <h3 className="text-[15px] font-bold tracking-[0.02em] text-ink">
        {children}
      </h3>
    </div>
  );
}
