"use client";

import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full py-20 relative overflow-hidden" id="cta">
      {/* Glow ambient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-black pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-[#110e1e] to-[#07070a] p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_80px_-20px_rgba(168,85,247,0.4)]">
          {/* Glowing Eyes Feature from Reference Poster */}
          <div className="relative w-48 h-28 md:w-64 md:h-36 mb-6 flex items-center justify-center">
            <Image
              alt="DERYK Cybernetic Vision"
              src="/images/cybernetic-vision.png"
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className="object-contain filter drop-shadow-[0_0_24px_rgba(168,85,247,0.9)]"
            />
          </div>

          {/* Headline & Subtitle without overlap */}
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Start Building with DERYK
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
