"use client";

import Link from "next/link";
import { useState } from "react";

// The custom geometric vector logo component
export function Wordmark() {
  return (
    <svg
      className="h-6 md:h-7 w-auto fill-white drop-shadow-[0_0_12px_rgba(168,85,247,0.55)] transition-transform duration-200 group-hover:scale-105"
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#07070a]/90 backdrop-blur-xl border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto h-18 px-6 lg:px-12 flex items-center justify-between">
        {/* Logo and Sub-label */}
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-3 group" href="/">
            <Wordmark />
          </Link>
          <span className="hidden sm:inline-block font-mono text-xs tracking-widest text-[#94a3b8]">
            / GAMING AI
          </span>
        </div>

        {/* Navigation Links */}
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