"use client";

import Image from "next/image";
import Link from "next/link";

// Custom geometric vector logo
function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`fill-white drop-shadow-[0_0_16px_rgba(168,85,247,0.65)] inline-block align-baseline ${className}`}
      viewBox="0 0 340 60"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4 6h17c17 0 25 11 25 24S38 54 21 54H4l5-8h12c10 0 16-7 16-16s-6-16-16-16H9z" />
      <path d="M70 6h44l-5 8H75zm0 20h44l-5 8H75zm5 20h34l5 8H70z" />
      <path d="M137 6h29c12 0 19 7 19 17s-7 17-19 17h-5l29 14h-19l-34-23h29c7 0 10-3 10-8s-3-9-10-9h-24z" />
      <path d="M209 6h12l19 21 19-21h12l-26 29v19h-10V35z" />
      <path d="M339 6h-14l-36 24 36 24h14l-36-24z" />
    </svg>
  );
}

export default function CtaSection() {
  return (
    <section className="w-full py-20 relative overflow-hidden" id="cta">
      {/* Glow ambient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-black pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-[#110e1e] to-[#07070a] p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_80px_-20px_rgba(168,85,247,0.4)]">
          {/* Glowing Eyes Feature */}
          <div className="relative w-48 h-28 md:w-64 md:h-36 mb-6 flex items-center justify-center">
            <Image
              alt="DERYK Cybernetic Vision"
              src="/images/cybernetic-vision.png"
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className="object-contain filter drop-shadow-[0_0_24px_rgba(168,85,247,0.9)]"
            />
          </div>

          {/* Headline featuring the vector logo instead of plain text */}
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-white tracking-tight mb-3 flex flex-wrap items-center justify-center gap-3">
            <span>Start Building with</span>
            <Wordmark className="h-7 md:h-10 w-auto" />
          </h2>

          <p className="font-mono text-xs md:text-sm text-purple-300 tracking-widest uppercase mb-8">
            Real Intelligence. Real World.
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              className="btn-violet-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-[15px] tracking-wide"
              href="#contact"
            >
              <span>Contact DERYK</span>
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Bottom subtle note */}
          <span className="font-mono text-xs text-text-muted mt-6">
            EARLY SDK ACCESS • PRIVATE CLUSTER SANDBOX
          </span>
        </div>
      </div>
    </section>
  );
}