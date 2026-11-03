import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import VideoSection from "../components/VideoSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta("/");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <VideoSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
