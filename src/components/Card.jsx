// White surface with the thin lavender border used throughout the app.
export default function Card({ as = "div", className = "", children }) {
  const Tag = as;

  return (
    <Tag
      className={`rounded-[18px] border border-brand-100 bg-surface shadow-card ${className}`}
    >
      {children}
    </Tag>
  );
}
