import Card from "./Card";
import IconBox from "./IconBox";

export default function FeatureCard({ icon, title, desc }) {
  return (
    <Card className="p-5">
      <IconBox icon={icon} />
      <h3 className="mt-4 text-[15px] font-bold tracking-[0.015em] text-ink">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-muted">{desc}</p>
    </Card>
  );
}
