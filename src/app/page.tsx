import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import TelemetryTopologySection from "@/components/TelemetryTopologySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background font-body text-text-primary selection:bg-accent-violet selection:text-white min-h-screen">
      <Navbar />
      <main className="w-full pt-20">
        <HeroSection />
        <PillarsSection />
        <ArchitectureSection />
        <TelemetryTopologySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
