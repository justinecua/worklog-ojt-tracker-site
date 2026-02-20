import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import demoVideo from "../assets/demo.mp4";

export default function VideoSection() {
  const videoRef = useRef(null);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  return (
    <section id="video" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle
          kicker="See it in action"
          title="Quick demo of Worklog"
          subtitle="Watch how easy it is to log hours and track your OJT progress."
        />

        <div
          onClick={handleUnmute}
          className="mx-auto mt-10 max-w-6xl cursor-pointer overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-200"
        >
          <div className="aspect-video w-full bg-black">
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
        </div>
      </div>
    </section>
  );
}
