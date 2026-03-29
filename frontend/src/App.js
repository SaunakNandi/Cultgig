import "@/App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import FeaturesGrid from "./components/FeaturesGrid";
import StatsStrip from "./components/StatsStrip";
import WaitlistSection from "./components/WaitlistSection";
import AppDownloadCTA from "./components/AppDownloadCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] grain-overlay">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesGrid />
      <StatsStrip />
      <WaitlistSection />
      <AppDownloadCTA />
      <Footer />
    </div>
  );
}

export default App;
