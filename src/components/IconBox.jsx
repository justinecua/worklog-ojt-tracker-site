export default function IconBox({ icon, className = "" }) {
  const Icon = icon;

  return (
    <span
      className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] border border-brand-100 bg-surface ${className}`}
    >
      <Icon className="h-4 w-4 text-brand" strokeWidth={2} />
    </span>
  );
}
