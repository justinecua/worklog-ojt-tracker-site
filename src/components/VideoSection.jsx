import { useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import demoVideo from "../assets/demo.mp4";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setMuted(false);
    }
  };

  return (
    <section id="video" className="mx-auto max-w-5xl px-4 py-20">
      <SectionTitle
        kicker="See it in action"
        title="Quick demo of Worklog"
        subtitle="Watch how easy it is to log hours and track your OJT progress."
      />

      <Card className="relative mt-8 cursor-pointer p-2">
        <div
          onClick={handleUnmute}
          className="aspect-video w-full overflow-hidden rounded-[14px] bg-black"
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={demoVideo} type="video/mp4" />
          </video>
        </div>

        {muted && (
          <span className="pointer-events-none absolute bottom-5 left-5 inline-flex items-center gap-1.5 rounded-[10px] bg-surface px-3 py-1.5 text-xs font-bold text-brand shadow">
            <Volume2 className="h-3.5 w-3.5" />
            Tap for sound
          </span>
        )}
      </Card>
    </section>
  );
}
