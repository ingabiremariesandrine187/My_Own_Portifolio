'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiLinkedin, FiGithub, FiDownload } from 'react-icons/fi';
import { FiArrowDown } from 'react-icons/fi';

const TITLES = [
   'Full Stack Developer',
  'Software Engineer',
  'Mobile Developer',
  'Information Systems Analyst',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const tickRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Immediately reveal all data-reveal elements in the Hero (already in viewport on load)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // Small delay so CSS transitions play as entrance animations
    const timer = setTimeout(() => {
      el.querySelectorAll('[data-reveal]').forEach((node) => {
        node.classList.add('revealed');
      });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = TITLES[titleIndex];

    if (!deleting && charIndex <= current.length) {
      tickRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex > current.length) {
      tickRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      tickRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 45);
    } else {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
      setCharIndex(0);
    }

    return () => { if (tickRef.current) clearTimeout(tickRef.current); };
  }, [charIndex, deleting, titleIndex]);

  return (
    <section
      ref={sectionRef}
      className="section-base relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden pt-20"
      id="hero"
    >
      {/* Subtle amber vignette at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[rgba(245,130,50,0.06)] to-transparent" />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: Text ─────────────────────────────────────── */}
          <div className="space-y-6 text-left">

            {/* Greeting badge */}
            <div
              data-reveal="left"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(245,130,50,0.3)] bg-[rgba(245,130,50,0.08)] text-sm text-[#f58232] font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-[#f58232] animate-pulse" />
              Available for opportunities
            </div>

            {/* Name */}
            <div data-reveal="left" data-delay="100">
              <p className="text-[var(--text-secondary)] text-lg mb-1">Hi, I&apos;m</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="text-[var(--text-primary)]">Marie Sandrine</span>
                <br />
                <span className="text-amber-gradient">Ingabire</span>
              </h1>
            </div>

            {/* Typewriter title */}
            <div data-reveal="left" data-delay="200" className="h-10 flex items-center">
              <span className="text-xl sm:text-2xl font-light text-[var(--text-secondary)]">
                {displayed}
                <span className="ml-0.5 inline-block w-0.5 h-6 bg-[#f58232] align-middle animate-blink" />
              </span>
            </div>

            {/* Bio */}
            <p
              data-reveal="left"
              data-delay="300"
              className="max-w-lg text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed"
            >
              Crafting beautiful, responsive user interfaces with{' '}
              <strong className="text-[var(--text-primary)]">React &amp; Next.js</strong>.
              Strong frontend expertise complemented by solid backend skills in
              database design and API development.
            </p>

            {/* CTA row */}
            <div
              data-reveal="left"
              data-delay="400"
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group relative px-7 py-3 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300"
                style={{ background: 'linear-gradient(135deg,#f58232,#ffb366)' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <FiArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-lg font-semibold border border-[var(--border)] text-[var(--text-primary)] hover:border-[#f58232] hover:text-[#f58232] transition-all duration-300"
              >
                Hire Me
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1e4edqvX_W2RLee79MUimS1kp7fblmD9k"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-7 py-3 rounded-lg font-semibold border border-[rgba(245,130,50,0.35)] text-[#f58232] hover:bg-[rgba(245,130,50,0.08)] hover:border-[#f58232] transition-all duration-300"
              >
                <FiDownload className="group-hover:translate-y-0.5 transition-transform duration-300" />
                Download CV
              </a>

              {/* Social icons */}
              <div className="flex gap-3 sm:ml-2">
                <Link
                  href="https://www.linkedin.com/in/ingabire-marie-sandrine-74b147276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-[#f58232] transition-colors duration-200"
                >
                  <FiLinkedin size={18} />
                </Link>
                <Link
                  href="https://github.com/ingabiremariesandrine187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-[#f58232] transition-colors duration-200"
                >
                  <FiGithub size={18} />
                </Link>
              </div>
            </div>

            {/* Stats row */}
            <div data-reveal="left" data-delay="500" className="flex gap-8 pt-4">
              {[
                { value: '3+', label: 'Years Exp.' },
                { value: '10+', label: 'Projects' },
                { value: '100%', label: 'Dedication' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-amber-gradient">{s.value}</p>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile image ────────────────────────────── */}
          <div
            data-reveal="right"
            data-delay="200"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[240px] h-[240px] sm:w-[270px] sm:h-[270px] md:w-[310px] md:h-[310px] lg:w-[350px] lg:h-[350px]">

              {/* Outer decorative spinning rings */}
              <div className="absolute inset-[-18px] rounded-full border border-[rgba(245,130,50,0.15)] animate-spin-slow" />
              <div className="absolute inset-[-36px] rounded-full border border-[rgba(245,130,50,0.07)] animate-spin-slow-reverse" />

              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[rgba(245,130,50,0.4)] animate-pulse-ring" />

              {/* Amber glow backdrop */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(245,130,50,0.18)_0%,transparent_70%)]" />

              {/* Profile circle */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[rgba(245,130,50,0.35)] shadow-[0_0_60px_rgba(245,130,50,0.25)]">
                <Image
                  src="/Sandrine Marie.jpeg"
                  alt="Marie Sandrine Ingabire – Software Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating experience card */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 w-36 text-center animate-float shadow-lg border border-[rgba(245,130,50,0.25)]">
                <p className="text-3xl font-extrabold text-amber-gradient leading-none">3+</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Years Experience</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-[10px] tracking-[0.25em] text-[var(--text-muted)] font-mono uppercase">Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-[#f58232] to-transparent" />
      </div>
    </section>
  );
}
