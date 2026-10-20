export default function MetricChip({ label, value, valueClassName = "text-ink" }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-brand-100 bg-canvas px-3 py-2">
      <span className="text-xs font-medium text-muted">{label}</span>
      <span className={`text-[13px] font-bold ${valueClassName}`}>{value}</span>
    </div>
  );
}
