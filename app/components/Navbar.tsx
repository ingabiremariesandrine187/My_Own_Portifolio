'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled,    setScrolled]  = useState(false);
  const [isOpen,      setIsOpen]    = useState(false);
  const [activeSection, setActive]  = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['about', 'skills', 'projects', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = (href: string) => {
    const id = href.replace('#', '');
    const active = activeSection === id;
    return [
      'relative text-sm font-medium transition-colors duration-200 py-1',
      active
        ? 'text-[var(--amber)]'
        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
    ].join(' ');
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--glass-bg)] backdrop-blur-xl border-b border-[var(--glass-border)] shadow-[0_4px_30px_rgba(0,0,0,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-between items-center py-4 md:py-5">

            {/* Logo */}
            <Link href="#hero" className="flex items-center gap-1 group">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight">
                <span className="text-[var(--amber)] group-hover:text-[var(--amber-light)] transition-colors duration-200">Dev</span>
                <span className="text-[var(--text-primary)]">Portfolio</span>
              </span>
              <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-[var(--amber)] animate-pulse" />
            </Link>

            {/* Desktop links + toggle */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} className={linkClass(href)}>
                  {label}
                  {activeSection === href.replace('#', '') && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--amber)] rounded-full" />
                  )}
                </Link>
              ))}

              {/* Theme toggle */}
              <ThemeToggle />

              <a
                href="#contact"
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105 animate-glow"
                style={{ background: 'linear-gradient(135deg,var(--amber),var(--amber-light))' }}
              >
                Hire Me
              </a>
            </div>

            {/* Mobile right side: toggle + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--amber)] hover:border-[var(--amber)] transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 border-t border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="py-3 px-4 rounded-lg text-[var(--text-secondary)] hover:text-[var(--amber)] hover:bg-[var(--amber-glow)] font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href="#contact"
              className="mt-2 py-3 px-4 rounded-lg text-center font-semibold text-white"
              style={{ background: 'linear-gradient(135deg,var(--amber),var(--amber-light))' }}
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
