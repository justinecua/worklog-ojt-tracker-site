import PrivacyPolicy from "../components/PrivacyPolicy";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import usePageMeta from "../hooks/usePageMeta";

export default function Privacy() {
  usePageMeta("/privacy");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
