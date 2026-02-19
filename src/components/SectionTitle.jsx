export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker && (
        <p className="mb-2 text-sm font-semibold text-blue-700">{kicker}</p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-base leading-7 text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
