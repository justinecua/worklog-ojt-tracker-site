// Device bezel around a real app screenshot.
export default function PhoneFrame({ src, alt, className = "" }) {
  return (
    <div
      className={`rounded-[1.6rem] bg-[#0b0b10] p-1.5 shadow-2xl shadow-black/25 ring-1 ring-white/10 sm:rounded-[2.6rem] sm:p-2 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="block w-full rounded-[1.3rem] sm:rounded-[2.1rem]"
      />
    </div>
  );
}
