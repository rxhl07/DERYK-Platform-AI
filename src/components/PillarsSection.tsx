"use client";

import Image from "next/image";

interface Pillar {
  icon: string;
  title: string;
  description: string;
  badge: string;
  specs: string[];
}

const pillars: Pillar[] = [
  {
    icon: "sports_esports",
    title: "Game AI & Virtual Worlds",
    description:
      "Powers next-generation NPCs, dynamic game agents, and rich simulated interactive environments with responsive tactical cognition.",
    badge: "SYNTHETIC WORLDS",
    specs: ["UE 5.4 Native", "Tick-Rate Sync", "Non-Linear Cognition"],
  },
  {
    icon: "precision_manufacturing",
    title: "Real-World Robotics & Simulation",
    description:
      "Bridging physics-accurate sim-to-real transfer, spatial sensor grounding, and multimodal perception for embodied agents.",
    badge: "EMBODIED ROBOTICS",
    specs: ["Isaac Sim Grounding", "Zero-Drift Transfer", "Spatial LiDAR / RGB-D"],
  },
  {
    icon: "memory",
    title: "Deterministic Runtime",
    description:
      "Zero-copy shared memory, tick-synchronized execution sandboxes, and bitwise reproducible evaluation across heterogeneous nodes.",
    badge: "DETERMINISTIC RUNTIME",
    specs: ["POSIX Ring SHM", "Bitwise 120Hz Lock", "Sub-Millisecond Ingress"],
  },
];

export default function PillarsSection() {
  return (
    <section
      className="w-full bg-[#09080f] py-24 border-y border-purple-900/25 relative overflow-hidden"
      id="pillars"
    >
      {/* Bolder Animated Telemetry Radar Backdrop */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
        {/* Glowing Telemetry graphic with animation & pulsing luminosity */}
        <div className="absolute w-[1200px] h-[1200px] max-w-none flex items-center justify-center animate-telemetry-pulse">
          <div className="relative w-full h-full animate-radar-sweep">
            <Image
              alt="Radar Telemetry Grid"
              src="/images/radar-telemetry.png"
              fill
              sizes="1200px"
              className="object-contain mix-blend-screen scale-125 filter drop-shadow-[0_0_60px_rgba(139,92,246,0.45)]"
            />
          </div>
        </div>
        {/* Radial edge fades to blend smoothly into surrounding sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09080f] via-transparent to-[#09080f]"></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 20%, #09080f 78%)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-300 uppercase tracking-widest pb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>Core Intelligence Foundation</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Architected for Every Reality
          </h2>
          <p className="font-body text-text-secondary text-base">
            Unified intelligence primitives built to span synthetic game
            engines, physical robotics, and high-frequency real-time inference.
          </p>
        </div>

        {/* 3 Pillar Cards with Dark Obsidian Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="violet-border-glow rounded-2xl bg-[#0e0e14]/85 backdrop-blur-md border border-[#8b5cf6]/25 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.85)] p-8 flex flex-col justify-between space-y-8 group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/35 flex items-center justify-center text-primary shadow-[0_0_16px_rgba(168,85,247,0.25)] group-hover:scale-105 group-hover:border-purple-400 transition-transform">
                    <span className="material-symbols-outlined text-[26px]">
                      {pillar.icon}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-purple-400/80 px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-800/30">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-sans text-xl font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Spec Tag Pills */}
              <div className="pt-4 border-t border-purple-900/30 flex flex-wrap gap-2">
                {pillar.specs.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-[11px] text-[#cbd5e1] px-2.5 py-1 rounded bg-[#07070a]/80 border border-purple-900/40"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
