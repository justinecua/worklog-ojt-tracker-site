export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#5D57AC]/10 px-3 py-1 text-xs font-semibold text-[#5D57AC] ring-1 ring-[#5D57AC]/20">
      {children}
    </span>
  );
}
