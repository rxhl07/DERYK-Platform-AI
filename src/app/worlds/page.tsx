import Navbar from "@/components/Navbar";
import PillarsSection from "@/components/PillarsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worlds & Environments // DERYK Intelligence",
  description:
    "Game AI, virtual synthetic environments, and physics-accurate embodied robotics transfer.",
};

export default function WorldsPage() {
  return (
    <div className="bg-background font-body text-text-primary selection:bg-accent-violet selection:text-white min-h-screen">
      <Navbar />
      <main className="w-full pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-300 uppercase tracking-widest pb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>SIMULATION & EMBODIED WORLDS</span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Cross-Reality Intelligence
          </h1>
          <p className="font-body text-[#cbd5e1] max-w-3xl text-base sm:text-lg leading-relaxed">
            Deploy policies trained in high-density simulation directly into physical
            robotic hardware and complex interactive gaming engines without cognitive degradation.
          </p>
        </div>
        <PillarsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
