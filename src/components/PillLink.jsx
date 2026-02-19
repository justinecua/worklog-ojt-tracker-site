export default function PillLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ring-1 ring-inset"
    >
      {children}
    </a>
  );
}
