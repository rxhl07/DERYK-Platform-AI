import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers // DERYK Autonomous AI Systems",
  description:
    "Join our core team building deterministic runtimes and multi-environment intelligence.",
};

const roles = [
  {
    title: "Runtime Systems Engineer (C++ / Rust / POSIX SHM)",
    team: "Kernel Architecture",
    location: "San Francisco, CA / Remote",
    type: "Full-Time",
  },
  {
    title: "Embodied Robotics & Sim-to-Real Lead",
    team: "Robotics Cognition",
    location: "Palo Alto, CA / Hybrid",
    type: "Full-Time",
  },
  {
    title: "Spatial Perception & World Models Researcher",
    team: "Foundation Models",
    location: "San Francisco, CA / London, UK",
    type: "Full-Time",
  },
  {
    title: "Distributed Inference Infrastructure Engineer",
    team: "Platform Core",
    location: "Remote",
    type: "Full-Time",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-background font-body text-text-primary selection:bg-accent-violet selection:text-white min-h-screen">
      <Navbar />
      <main className="w-full pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-300 uppercase tracking-widest pb-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>ENGINEERING RECRUITMENT</span>
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Build the Runtime of Machine Intelligence
            </h1>
            <p className="font-body text-[#cbd5e1] text-base sm:text-lg leading-relaxed">
              We are assembling a specialized group of systems architects, simulation
              engineers, and roboticists to solve cross-environment autonomy.
            </p>
          </div>

          <div className="space-y-4 mb-20">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="violet-border-glow rounded-xl bg-[#0c0d12]/85 border border-purple-500/20 p-6 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
              >
                <div>
                  <div className="font-mono text-xs text-primary mb-1">
                    {role.team} • {role.type}
                  </div>
                  <h3 className="font-sans text-lg font-bold text-white">
                    {role.title}
                  </h3>
                  <div className="text-xs text-text-muted mt-1">
                    {role.location}
                  </div>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold bg-purple-950/60 hover:bg-purple-900 border border-purple-500/40 text-purple-200 transition-colors"
                >
                  <span>APPLY FOR ROLE</span>
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
