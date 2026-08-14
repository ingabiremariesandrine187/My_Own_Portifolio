'use client';

import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const LINKS = ['About', 'Skills', 'Projects', 'Contact'];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="section-base py-10 md:py-14 relative">
      {/* Top amber glow line */}
      <div className="section-glow-line mb-10 md:mb-14" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="text-2xl font-extrabold mb-1">
              <span className="text-[#f58232]">Dev</span>
              <span className="text-[var(--text-primary)]">Portfolio</span>
            </div>
            <p className="text-xs text-[var(--text-muted)]">Frontend-Focused Software Engineer</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ingabiremariesandrine187"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-muted)] hover:text-[#f58232] hover:border-[rgba(245,130,50,0.45)] transition-colors duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ingabire-marie-sandrine-74b147276/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-muted)] hover:text-[#3b82f6] hover:border-[rgba(59,130,246,0.45)] transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[rgba(255,255,255,0.06)] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-muted)] text-center md:text-left">
            © {new Date().getFullYear()} Marie Sandrine Ingabire · All rights reserved
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>

          <div className="flex flex-wrap justify-center items-center gap-5">
            {LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs text-[var(--text-muted)] hover:text-[#f58232] transition-colors duration-200"
              >
                {l}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[#f58232] transition-colors duration-200"
            >
              <FaArrowUp className="text-[10px]" />
              Top
            </button>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-8 pt-6 border-t border-[rgba(255,255,255,0.05)]">
          <p className="text-[10px] text-[var(--text-muted)]">
            Made with ❤️ by Marie Sandrine Ingabire · Open to new opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}
