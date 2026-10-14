import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050508] border-t border-purple-900/30 text-xs font-mono text-text-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#71717a] font-mono mb-4">
              DEVELOPER ENTRY
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="/architecture"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="/architecture"
                >
                  Core Architecture
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="#architecture"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="#architecture"
                >
                  Autonomous Runtimes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#71717a] font-mono mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="#architecture"
                >
                  SDK Client Toolkits
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="#architecture"
                >
                  Runtime Changelog
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="#telemetry-topology"
                >
                  Telemetry &amp; Benchmarks
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="#architecture"
                >
                  Security &amp; Isolation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#71717a] font-mono mb-4">
              PLATFORM
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="/worlds"
                >
                  Capabilities Overview
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="#cta"
                >
                  Request Developer Access
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="#telemetry-topology"
                >
                  Global Status Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="#cta"
                >
                  Enterprise Deployments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#71717a] font-mono mb-4">
              COMPANY
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="/careers"
                >
                  Engineering Team
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="#terms"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200 block"
                  href="#privacy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-900/25 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#71717a]">
          <div>© 2025 DERYK TECHNOLOGIES INC. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <span className="text-emerald-400">STATUS // SYSTEMS OPERATIONAL</span>
            <span>BUILD 2.0.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
