"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#07070a]/90 backdrop-blur-xl border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto h-18 px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo Vector SVG & Sub-label */}
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-3 group" href="/">
            <svg
              viewBox="0 0 540 80"
              className="h-6 md:h-7 w-auto fill-white drop-shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-transform duration-200 group-hover:scale-105"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* D - Open horseshoe curve (no left stem) */}
              <path d="M 22 20 H 60 C 78 20 90 28 90 40 C 90 52 78 60 60 60 H 22 C 18.7 60 16 57.3 16 54 C 16 50.7 18.7 48 22 48 H 58 C 68 48 74 44 74 40 C 74 36 68 32 58 32 H 22 C 18.7 32 16 29.3 16 26 C 16 22.7 18.7 20 22 20 Z" />

              {/* E - Three tapered horizontal bars with angled inner corners */}
              <path d="M 126 20 H 174 C 177.3 20 180 22.7 180 26 C 180 29.3 177.3 32 174 32 H 134 C 129 32 126 29 126 26 V 20 Z" />
              <path d="M 126 34 H 174 C 177.3 34 180 36.7 180 40 C 180 43.3 177.3 46 174 46 H 134 C 129 46 126 43 126 40 V 34 Z" />
              <path d="M 126 48 H 174 C 177.3 48 180 50.7 180 54 C 180 57.3 177.3 60 174 60 H 134 C 129 60 126 57 126 54 V 48 Z" />

              {/* R - Open top arch detached from diagonal sweep */}
              <path d="M 216 20 H 252 C 265 20 274 26 274 34 C 274 42 265 48 252 48 H 222 C 218.7 48 216 45.3 216 42 V 20 Z M 228 32 H 248 C 254 32 260 30 260 34 C 260 38 254 36 248 36 H 228 V 32 Z" />
              <path d="M 216 38 L 268 60 H 250 L 216 45 V 38 Z" />

              {/* Y - Sharp V-fork with central stem */}
              <path d="M 306 20 L 332 45 V 60 H 320 V 48 L 296 20 H 306 Z" />
              <path d="M 358 20 L 332 45 V 60 H 344 V 48 L 368 20 H 358 Z" />

              {/* K - Chevron with sharp central tick */}
              <path d="M 444 20 L 398 40 L 444 60 H 428 L 388 40 L 428 20 H 444 Z" />
            </svg>
          </Link>
          <span className="hidden sm:inline-block font-mono text-xs tracking-widest text-[#94a3b8]">
            / GAMING AI
          </span>
        </div>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-text-secondary font-medium">
          <Link className="hover:text-primary transition-colors duration-150" href="/architecture">
            Architecture
          </Link>
          <Link className="hover:text-primary transition-colors duration-150" href="/worlds">
            Worlds
          </Link>
          <Link className="hover:text-primary transition-colors duration-150" href="#pillars">
            Capabilities
          </Link>
          <Link className="hover:text-primary transition-colors duration-150" href="/careers">
            Careers
          </Link>
        </nav>

        {/* Action Controls & Pill CTA */}
        <div className="flex items-center gap-4">
          <Link
            className="btn-violet-gradient inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold text-white tracking-wide"
            href="#cta"
          >
            <span>EXPLORE DERYK</span>
            <span className="text-[15px] select-none">→</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-secondary hover:text-white p-1"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07070a]/98 border-b border-purple-900/40 px-6 py-6 flex flex-col gap-4 font-sans text-sm backdrop-blur-2xl">
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="text-text-secondary hover:text-primary transition-colors py-2"
            href="/architecture"
          >
            Architecture
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="text-text-secondary hover:text-primary transition-colors py-2"
            href="/worlds"
          >
            Worlds
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="text-text-secondary hover:text-primary transition-colors py-2"
            href="#pillars"
          >
            Capabilities
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="text-text-secondary hover:text-primary transition-colors py-2"
            href="/careers"
          >
            Careers
          </Link>
        </div>
      )}
    </header>
  );
}