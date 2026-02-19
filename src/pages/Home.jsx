import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import VideoSection from "../components/VideoSection";
import ScreenshotsSection from "../components/ScreenshotsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <VideoSection />
        <ScreenshotsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
