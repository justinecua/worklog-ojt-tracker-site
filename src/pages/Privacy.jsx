import PrivacyPolicy from "../components/PrivacyPolicy";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
