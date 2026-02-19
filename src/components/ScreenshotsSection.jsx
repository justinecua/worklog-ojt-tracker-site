import SectionTitle from "./SectionTitle";
import ss1 from "../assets/ss11.png";
import ss2 from "../assets/ss2.png";
import ss3 from "../assets/ss3.png";
import ss4 from "../assets/ss4.png";

const screenshots = [ss1, ss2, ss3, ss4];

export default function ScreenshotsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SectionTitle
        kicker="App preview"
        title="Screenshots"
        subtitle="A quick look at the Worklog interface"
      />

      <div className="mt-10 flex gap-6 overflow-x-auto">
        {screenshots.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200"
          >
            <img
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
