// Same thresholds as the app's progress card.
const ringColor = (percent) =>
  percent >= 75 ? "stroke-success" : percent >= 40 ? "stroke-warning" : "stroke-danger";

export default function ProgressRing({ percent, size = 96, stroke = 9 }) {
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          className="stroke-brand-100"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          className={ringColor(percent)}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent / 100)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-extrabold tracking-tight text-ink"
          style={{ fontSize: size * 0.24 }}
        >
          {percent}%
        </span>
        <span className="text-[10px] font-medium text-muted">Complete</span>
      </div>
    </div>
  );
}
