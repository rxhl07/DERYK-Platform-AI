import Navbar from "@/components/Navbar";
import ArchitectureSection from "@/components/ArchitectureSection";
import TelemetryTopologySection from "@/components/TelemetryTopologySection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture // DERYK Autonomous Runtime Fabric",
  description:
    "Deterministic state synchronization, tick-locked execution sandboxes, and hardware-isolated scheduler.",
};

export default function ArchitecturePage() {
  return (
    <div className="bg-background font-body text-text-primary selection:bg-accent-violet selection:text-white min-h-screen">
      <Navbar />
      <main className="w-full pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-300 uppercase tracking-widest pb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>SYSTEM ARCHITECTURE SPECIFICATION</span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Zero-Drift Deterministic Runtime
          </h1>
          <p className="font-body text-[#cbd5e1] max-w-3xl text-base sm:text-lg leading-relaxed">
            Direct POSIX memory mappings, 120Hz tick synchronization, and
            distributed actor-critic neural inference designed for sub-millisecond
            actuation loops.
          </p>
        </div>
        <ArchitectureSection />
        <TelemetryTopologySection />
      </main>
      <Footer />
    </div>
  );
}
