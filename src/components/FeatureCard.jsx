export default function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5D57AC]/10">
        <Icon className="h-5 w-5 text-[#5D57AC]" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
