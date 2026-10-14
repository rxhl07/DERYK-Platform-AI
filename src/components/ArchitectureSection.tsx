"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PipelineStage {
  id: string;
  stepNumber: string;
  shortTag: string;
  title: string;
  status: string;
  statusColor: string;
  desc: string;
  spec1Label: string;
  spec1Value: string;
  spec2Label: string;
  spec2Value: string;
  benchmark: string;
}

const pipelineStages: PipelineStage[] = [
  {
    id: "STAGE 01 // INGRESS",
    stepNumber: "01",
    shortTag: "INGRESS",
    title: "Environment Interface",
    status: "READY • HARDWARE LINKED",
    statusColor: "text-emerald-400",
    desc: "Connectors for Unreal Engine 5.4+, Unity DOTS, and headless physics engines mapped directly to POSIX shared memory buffers. Eliminates kernel copy overhead for sub-millisecond bidirectional sensor injection.",
    spec1Label: "Target Interface",
    spec1Value: "Unreal 5.4 / Unity / Isaac Sim",
    spec2Label: "Buffer Architecture",
    spec2Value: "RING_SHM_ZERO_COPY",
    benchmark: "< 0.42 ms",
  },
  {
    id: "STAGE 02 // KERNEL",
    stepNumber: "02",
    shortTag: "KERNEL",
    title: "Runtime Engine",
    status: "SYNCED • TICK-LOCKED",
    statusColor: "text-primary",
    desc: "Bitwise deterministic state synchronization with tick locking, rollback cache ring, and hardware-isolated scheduler. Guarantees 100% reproducible execution across heterogeneous cluster nodes.",
    spec1Label: "Frequency Target",
    spec1Value: "120 Hz Strict Determinism",
    spec2Label: "Cache Strategy",
    spec2Value: "ROLLBACK_RING_CACHE",
    benchmark: "0.00% JITTER",
  },
  {
    id: "STAGE 03 // INFERENCE",
    stepNumber: "03",
    shortTag: "INFERENCE",
    title: "AI Services Pool",
    status: "ACTIVE • MODEL ORCHESTRATION",
    statusColor: "text-emerald-400",
    desc: "Unified model orchestration, multi-modal spatial perception pipelines, and real-time actor-critic network dispatch. Delivers high-throughput sensory evaluation with sub-4ms end-to-end inference budget.",
    spec1Label: "Memory Throughput",
    spec1Value: "48 GB/s Bus Bandwidth",
    spec2Label: "Dispatch Architecture",
    spec2Value: "ACTOR_CRITIC_DISTRIBUTED",
    benchmark: "< 3.8 ms ROUNDTRIP",
  },
  {
    id: "STAGE 04 // EGRESS",
    stepNumber: "04",
    shortTag: "EGRESS",
    title: "Gateway & Registry",
    status: "VERIFIED • CRYPTO ENFORCED",
    statusColor: "text-emerald-400",
    desc: "Schema verification, cryptographically signed policy enforcement, and live audit telemetry stream. Formats output action vectors into certified execution contracts dispatched to physical or virtual actuators.",
    spec1Label: "Security Protocol",
    spec1Value: "mTLS v1.3 / Proto Buffers",
    spec2Label: "Audit Pipeline",
    spec2Value: "LIVE_SIGNED_TELEMETRY",
    benchmark: "CRYPT_VERIFIED",
  },
];

export default function ArchitectureSection() {
  const [activeStep, setActiveStep] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Setup Interactive Ambient Topology Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;

    const particleCount = 42;
    const colors = [
      "rgba(192, 132, 252, ",
      "rgba(168, 85, 247, ",
      "rgba(216, 180, 254, ",
      "rgba(56, 189, 248, ",
    ];

    function resize() {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    }

    class Particle {
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
      radius = 0;
      baseAlpha = 0;
      alpha = 0;
      pulseSpeed = 0;
      pulseOffset = 0;
      color = "";

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * (width || 1000);
        this.y = Math.random() * (height || 600);
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 2.2 + 1;
        this.baseAlpha = Math.random() * 0.55 + 0.25;
        this.alpha = this.baseAlpha;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(t: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -20) this.x = width + 20;
        else if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        else if (this.y > height + 20) this.y = -20;

        this.alpha =
          this.baseAlpha + Math.sin(t * this.pulseSpeed + this.pulseOffset) * 0.2;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.max(0.05, this.alpha) + ")";
        ctx.shadowBlur = this.radius * 5;
        ctx.shadowColor = this.color + "0.9)";
        ctx.fill();
        ctx.restore();
      }
    }

    resize();
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let time = 0;
    function render() {
      time++;
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const maxDistance = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            if ((i + j + Math.floor(time / 20)) % 18 === 0) {
              const progress = (time * 0.02) % 1;
              const px =
                particles[i].x + (particles[j].x - particles[i].x) * progress;
              const py =
                particles[i].y + (particles[j].y - particles[i].y) * progress;
              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(216, 180, 254, 0.9)";
              ctx.shadowBlur = 8;
              ctx.shadowColor = "rgba(192, 132, 252, 1)";
              ctx.fill();
            }
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(time);
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    window.addEventListener("resize", resize);
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stage = pipelineStages[activeStep];

  return (
    <section
      className="w-full bg-[#07070a] py-24 relative overflow-hidden"
      id="architecture"
    >
      {/* Ambient Background Lighting & Grid with Dynamic Interactive Topology Particles */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Dynamic Glowing Violet Core Lighting & Atmosphere with Pulsing Energy Surge */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.38)_0%,rgba(139,92,246,0.22)_45%,transparent_75%)] rounded-full blur-[90px] energy-surge"></div>
        <div
          className="absolute bottom-0 right-1/4 w-[750px] h-[500px] bg-purple-600/25 rounded-full blur-[110px] energy-surge"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div className="absolute top-1/3 left-10 w-[550px] h-[450px] bg-violet-900/30 rounded-full blur-[100px]"></div>

        {/* Cybernetic Constellation Background Mesh */}
        <div className="absolute inset-0 flex items-center justify-center opacity-70 mix-blend-screen overflow-hidden">
          <div className="relative w-full h-full constellation-drift">
            <Image
              alt="Deterministic Topology Mesh"
              src="/images/topology-mesh.png"
              fill
              sizes="100vw"
              className="object-cover object-center filter contrast-125 brightness-125 scale-105"
            />
          </div>
        </div>

        {/* Interactive High-Performance Canvas for Ambient Floating Topology Particles */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-85 mix-blend-screen"
        ></canvas>

        {/* Dynamic Cybernetic Circuit Flow Overlays with Pulsing SVG Dash-Offset Streams */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-65 mix-blend-screen"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
        >
          <defs>
            <filter
              height="140%"
              id="topo-glow"
              width="140%"
              x="-20%"
              y="-20%"
            >
              <feGaussianBlur
                result="blur"
                stdDeviation="3.5"
              ></feGaussianBlur>
              <feMerge>
                <feMergeNode in="blur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <linearGradient
              id="topo-grad-1"
              x1="0%"
              x2="100%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9"></stop>
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4"></stop>
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8"></stop>
            </linearGradient>
            <linearGradient
              id="topo-grad-2"
              x1="100%"
              x2="0%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#e879f9" stopOpacity="0.85"></stop>
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.5"></stop>
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9"></stop>
            </linearGradient>
          </defs>

          {/* Static Matrix Interconnect Guides */}
          <path
            d="M 120 180 L 320 280 L 720 220 L 1080 340 L 1340 260"
            fill="none"
            stroke="rgba(168, 85, 247, 0.16)"
            strokeWidth="1.2"
          ></path>
          <path
            d="M 220 580 L 460 480 L 860 620 L 1180 510 L 1380 660"
            fill="none"
            stroke="rgba(168, 85, 247, 0.14)"
            strokeWidth="1.2"
          ></path>
          <path
            d="M 320 280 L 460 480"
            fill="none"
            stroke="rgba(168, 85, 247, 0.15)"
            strokeDasharray="4 4"
            strokeWidth="1"
          ></path>
          <path
            d="M 720 220 L 860 620"
            fill="none"
            stroke="rgba(168, 85, 247, 0.15)"
            strokeDasharray="4 4"
            strokeWidth="1"
          ></path>
          <path
            d="M 1080 340 L 1180 510"
            fill="none"
            stroke="rgba(168, 85, 247, 0.15)"
            strokeDasharray="4 4"
            strokeWidth="1"
          ></path>

          {/* Animated Glowing Packet Flow Lines with Dash-Offset Streaming */}
          <path
            className="topology-flow-trace"
            d="M 120 180 L 320 280 L 720 220 L 1080 340 L 1340 260"
            fill="none"
            filter="url(#topo-glow)"
            stroke="url(#topo-grad-1)"
            strokeLinecap="round"
            strokeWidth="2.5"
          ></path>
          <path
            className="topology-flow-reverse"
            d="M 220 580 L 460 480 L 860 620 L 1180 510 L 1380 660"
            fill="none"
            filter="url(#topo-glow)"
            stroke="url(#topo-grad-2)"
            strokeLinecap="round"
            strokeWidth="2.2"
          ></path>
          <path
            className="topology-flow-fast"
            d="M 320 280 L 460 480 L 860 620"
            fill="none"
            filter="url(#topo-glow)"
            stroke="#c084fc"
            strokeLinecap="round"
            strokeWidth="2"
          ></path>
          <path
            className="topology-flow-fast"
            d="M 720 220 L 1080 340 L 1180 510"
            fill="none"
            filter="url(#topo-glow)"
            stroke="#38bdf8"
            strokeLinecap="round"
            strokeWidth="1.8"
            style={{ animationDelay: "2s" }}
          ></path>

          {/* Cybernetic Corner Target Crosses & Orbit Node Rings */}
          <circle
            cx="320"
            cy="280"
            fill="none"
            r="16"
            stroke="rgba(192, 132, 252, 0.35)"
            strokeDasharray="6 6"
            strokeWidth="1.2"
          ></circle>
          <circle
            cx="720"
            cy="220"
            fill="none"
            r="22"
            stroke="rgba(168, 85, 247, 0.4)"
            strokeWidth="1.4"
          ></circle>
          <circle
            cx="860"
            cy="620"
            fill="none"
            r="18"
            stroke="rgba(216, 180, 254, 0.35)"
            strokeDasharray="4 4"
            strokeWidth="1.2"
          ></circle>
          <circle
            cx="1080"
            cy="340"
            fill="none"
            r="24"
            stroke="rgba(56, 189, 248, 0.4)"
            strokeWidth="1.2"
          ></circle>
        </svg>

        {/* Dynamic Coordinate Reticle & Precision Radar Accents with subtle animated grid drift */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.18)_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-70 pointer-events-none topology-grid-drift"></div>

        {/* Pulsing Interactive Highlight Nodes positioned along constellation pathways */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[28%] left-[22%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 rounded-full bg-fuchsia-300 node-pulse-1 drop-shadow-[0_0_12px_rgba(232,121,249,0.9)]"></div>
            <div
              className="absolute inset-0 rounded-full border border-fuchsia-400/80"
              style={{ animation: "ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite" }}
            ></div>
          </div>
          <div className="absolute top-[38%] left-[48%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-3.5 h-3.5 rounded-full bg-primary node-pulse-2 drop-shadow-[0_0_16px_rgba(192,132,252,0.95)]"></div>
            <div
              className="absolute inset-0 rounded-full border border-purple-400/90"
              style={{ animation: "ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite 1.4s" }}
            ></div>
          </div>
          <div className="absolute top-[52%] left-[68%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 rounded-full bg-purple-200 node-pulse-3 drop-shadow-[0_0_12px_rgba(216,180,254,0.9)]"></div>
            <div
              className="absolute inset-0 rounded-full border border-purple-300/80"
              style={{ animation: "ping-slow 3.4s cubic-bezier(0, 0, 0.2, 1) infinite 0.6s" }}
            ></div>
          </div>
          <div className="absolute top-[70%] left-[82%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 rounded-full bg-violet-300 node-pulse-4 drop-shadow-[0_0_12px_rgba(196,181,253,0.9)]"></div>
            <div
              className="absolute inset-0 rounded-full border border-violet-400/80"
              style={{ animation: "ping-slow 4.2s cubic-bezier(0, 0, 0.2, 1) infinite 2.2s" }}
            ></div>
          </div>
          <div className="absolute top-[76%] left-[18%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-300 node-pulse-2 drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]"></div>
          </div>
          <div className="absolute top-[22%] left-[76%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 node-pulse-1 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]"></div>
            <div
              className="absolute inset-0 rounded-full border border-cyan-400/70"
              style={{ animation: "ping-slow 4.6s cubic-bezier(0, 0, 0.2, 1) infinite 1.8s" }}
            ></div>
          </div>
          <div className="absolute top-[82%] left-[54%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 node-pulse-3 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
          </div>
        </div>

        {/* Edge Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070a] via-transparent to-[#07070a] pointer-events-none opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070a]/90 via-transparent to-[#07070a]/90 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header with Live Sync Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-md">
              Deterministic Topology Flow
            </h2>
            <p className="font-body text-text-secondary text-base leading-relaxed">
              A streamlined 4-step execution fabric connecting sensory input,
              runtime scheduling, and action vectors.
            </p>
          </div>

          {/* Live Sync Telemetry Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0e0e14]/90 border border-purple-500/30 backdrop-blur-md shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
            <span className="font-mono text-xs text-purple-200 font-semibold tracking-wider">
              LIVE SYNC // 120 HZ STRICT
            </span>
          </div>
        </div>

        {/* Interconnected Pipeline Stepper Track */}
        <div className="w-full mb-10" id="pipeline-stepper">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineStages.map((p, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveStep(idx)}
                  className={`step-btn group text-left p-3.5 md:p-4 rounded-xl transition-all flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? "active border border-primary bg-purple-950/40 shadow-[0_0_20px_rgba(168,85,247,0.25)] scale-[1.02]"
                      : "border border-purple-900/40 bg-[#0e0e14]/60 hover:bg-purple-950/30 hover:border-purple-500/40"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span
                      className={`font-bold ${
                        isActive ? "text-primary" : "text-text-muted"
                      }`}
                    >
                      {p.stepNumber}
                    </span>
                    <span
                      className={`text-[10px] tracking-wider uppercase ${
                        isActive ? "text-purple-300 font-semibold" : "text-text-muted"
                      }`}
                    >
                      {p.shortTag}
                    </span>
                  </div>
                  <div
                    className={`font-sans text-sm md:text-base font-bold transition-colors ${
                      isActive ? "text-white" : "text-[#cbd5e1] group-hover:text-white"
                    }`}
                  >
                    {p.title}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono">
                    <span className={p.statusColor}>{p.status.split("•")[0]}</span>
                    <span className="text-purple-400/80">{p.benchmark}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Split View: Active Stage Inspector Card (Left) & Telemetry Metrics Matrix (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Cols: Active Node Terminal Inspector */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full rounded-2xl bg-[#0c0d12]/90 border border-purple-500/30 p-6 md:p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_16px_48px_-12px_rgba(0,0,0,0.95)] flex flex-col justify-between space-y-6">
              {/* Ambient radial lighting behind active card */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="space-y-5 relative z-10">
                {/* Inspector Title Bar */}
                <div className="flex items-center justify-between border-b border-purple-900/40 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                    <span
                      className="font-mono text-xs text-primary font-bold tracking-wider"
                      id="inspector-stage-id"
                    >
                      {stage.id}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-xs font-bold ${stage.statusColor}`}
                    id="inspector-status"
                  >
                    {stage.status}
                  </span>
                </div>

                {/* Stage Name & Description */}
                <div>
                  <h3
                    className="font-sans text-2xl font-bold text-white tracking-tight mb-2"
                    id="inspector-title"
                  >
                    {stage.title}
                  </h3>
                  <p
                    className="font-body text-sm text-[#cbd5e1] leading-relaxed"
                    id="inspector-desc"
                  >
                    {stage.desc}
                  </p>
                </div>

                {/* Technical Architecture Specs & Verified Contracts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#07070a]/90 border border-purple-900/40 font-mono">
                    <div className="text-[10px] text-text-muted tracking-wider uppercase mb-1">
                      {stage.spec1Label}
                    </div>
                    <div
                      className="text-xs text-white font-semibold truncate"
                      id="inspector-spec-1"
                    >
                      {stage.spec1Value}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#07070a]/90 border border-purple-900/40 font-mono">
                    <div className="text-[10px] text-text-muted tracking-wider uppercase mb-1">
                      {stage.spec2Label}
                    </div>
                    <div
                      className="text-xs text-purple-200 font-semibold truncate"
                      id="inspector-spec-2"
                    >
                      {stage.spec2Value}
                    </div>
                  </div>
                </div>
              </div>

              {/* Telemetry Readout Pill Footer */}
              <div className="flex items-center justify-between border-t border-purple-900/40 pt-4 font-mono text-xs">
                <span className="text-text-muted">BENCHMARK VERIFICATION:</span>
                <span
                  className="text-white font-bold tracking-wide"
                  id="inspector-benchmark"
                >
                  {stage.benchmark}
                </span>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Compact Pipeline Telemetry Matrix */}
          <div className="lg:col-span-5 flex flex-col space-y-3 justify-between">
            <div className="px-2 flex items-center justify-between font-mono text-xs text-text-muted">
              <span className="tracking-wider uppercase font-semibold text-purple-300">
                Telemetry Matrix
              </span>
              <span className="text-[10px] text-emerald-400">● 4/4 CHANNELS OK</span>
            </div>

            {/* Metric Row 1 */}
            <div
              onClick={() => setActiveStep(0)}
              className={`p-4 rounded-xl bg-[#0c0d12]/85 border backdrop-blur-md flex items-center justify-between font-mono shadow-md transition-all cursor-pointer ${
                activeStep === 0
                  ? "border-primary bg-purple-950/30"
                  : "border-purple-500/20 hover:border-purple-400/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-purple-950/50 border border-purple-800/40 text-primary font-bold text-xs flex items-center justify-center">
                  01
                </span>
                <div>
                  <div className="text-white text-xs font-bold font-sans">
                    Ingress Latency
                  </div>
                  <div className="text-[11px] text-text-muted">POSIX SHM Adapter</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white text-xs font-bold font-mono">0.38 ms</div>
                <div className="text-[11px] text-emerald-400 font-mono">P99 TARGET</div>
              </div>
            </div>

            {/* Metric Row 2 */}
            <div
              onClick={() => setActiveStep(1)}
              className={`p-4 rounded-xl bg-[#0c0d12]/85 border backdrop-blur-md flex items-center justify-between font-mono shadow-md transition-all cursor-pointer ${
                activeStep === 1
                  ? "border-primary bg-purple-950/30"
                  : "border-purple-500/20 hover:border-purple-400/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-purple-950/50 border border-purple-800/40 text-primary font-bold text-xs flex items-center justify-center">
                  02
                </span>
                <div>
                  <div className="text-white text-xs font-bold font-sans">
                    Kernel Frequency
                  </div>
                  <div className="text-[11px] text-text-muted">Tick-Locked Engine</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white text-xs font-bold font-mono">120.0 Hz</div>
                <div className="text-[11px] text-primary font-mono">LOCKED</div>
              </div>
            </div>

            {/* Metric Row 3 */}
            <div
              onClick={() => setActiveStep(2)}
              className={`p-4 rounded-xl bg-[#0c0d12]/85 border backdrop-blur-md flex items-center justify-between font-mono shadow-md transition-all cursor-pointer ${
                activeStep === 2
                  ? "border-primary bg-purple-950/30"
                  : "border-purple-500/20 hover:border-purple-400/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-purple-950/50 border border-purple-800/40 text-primary font-bold text-xs flex items-center justify-center">
                  03
                </span>
                <div>
                  <div className="text-white text-xs font-bold font-sans">
                    Inference Bandwidth
                  </div>
                  <div className="text-[11px] text-text-muted">AI Actor-Critic Pool</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white text-xs font-bold font-mono">48.2 GB/s</div>
                <div className="text-[11px] text-purple-300 font-mono">SATURATED</div>
              </div>
            </div>

            {/* Metric Row 4 */}
            <div
              onClick={() => setActiveStep(3)}
              className={`p-4 rounded-xl bg-[#0c0d12]/85 border backdrop-blur-md flex items-center justify-between font-mono shadow-md transition-all cursor-pointer ${
                activeStep === 3
                  ? "border-primary bg-purple-950/30"
                  : "border-purple-500/20 hover:border-purple-400/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-purple-950/50 border border-purple-800/40 text-primary font-bold text-xs flex items-center justify-center">
                  04
                </span>
                <div>
                  <div className="text-white text-xs font-bold font-sans">
                    Gateway Protocol
                  </div>
                  <div className="text-[11px] text-text-muted">Cryptographic Stream</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white text-xs font-bold font-mono">TLS 1.3</div>
                <div className="text-[11px] text-emerald-400 font-mono">VERIFIED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
