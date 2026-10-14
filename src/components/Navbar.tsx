"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#07070a]/90 backdrop-blur-xl border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto h-18 px-6 lg:px-12 flex items-center justify-between">
        {/* Logo using lettermark */}
        <Link className="flex items-center gap-3 group" href="/">
          <div className="relative h-6 md:h-7 w-28 md:w-32">
            <Image
              alt="DERYK"
              src="/images/logo.png"
              fill
              sizes="(max-width: 768px) 112px, 128px"
              className="object-contain filter invert drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]"
              priority
            />
          </div>
        </Link>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-text-secondary font-medium">
          <Link
            className="hover:text-primary transition-colors duration-150"
            href="#architecture"
          >
            Architecture
          </Link>
          <Link
            className="hover:text-primary transition-colors duration-150"
            href="#pillars"
          >
            Worlds
          </Link>
          <Link
            className="hover:text-primary transition-colors duration-150"
            href="#pillars"
          >
            Capabilities
          </Link>
          <Link
            className="hover:text-primary transition-colors duration-150"
            href="#cta"
          >
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
            href="#architecture"
          >
            Architecture
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="text-text-secondary hover:text-primary transition-colors py-2"
            href="#pillars"
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
            href="#cta"
          >
            Careers
          </Link>
        </div>
      )}
    </header>
  );
}
