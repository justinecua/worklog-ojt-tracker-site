import SectionTitle from "./SectionTitle";

export default function HowItWorks() {
  const steps = [
    {
      step: "STEP 1",
      title: "Create your profile",
      desc: "Add required OJT hours so the app can compute progress.",
    },
    {
      step: "STEP 2",
      title: "Log your hours",
      desc: "Record morning/afternoon time-in and time-out. Remove anytime to keep things accurate.",
    },
    {
      step: "STEP 3",
      title: "Check your progress",
      desc: "Instantly see completed hours and remaining hours so you always know where you stand.",
    },
  ];

  return (
    <section id="how" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle
          kicker="How it works"
          title="Log. Review. Track."
          subtitle="A simple workflow that feels natural during busy OJT days."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
            >
              <p className="text-xs font-semibold text-blue-700">{s.step}</p>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
