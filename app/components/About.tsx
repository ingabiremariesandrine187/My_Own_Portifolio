'use client';

import { useEffect, useRef } from 'react';

const CARDS = [
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    desc: 'Knowledge in security best practices, vulnerability assessment, and building resilient systems.',
    color: 'rgba(80,140,255,0.12)',
    border: 'rgba(80,140,255,0.25)',
  },
  {
    icon: '⚡',
    title: 'Full Stack Developer',
    desc: 'React, Next.js, TypeScript — my strongest expertise in creating beautiful, responsive interfaces, paired with solid Node.js backend skills.',
    color: 'rgba(245,130,50,0.12)',
    border: 'rgba(245,130,50,0.35)',
    badge: 'Primary',
  },
  {
    icon: '🗄️',
    title: 'Backend Skills',
    desc: 'MongoDB, PostgreSQL, Firebase, Supabase — solid database and API development.',
    color: 'rgba(100,200,150,0.10)',
    border: 'rgba(100,200,150,0.25)',
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section-base py-20 md:py-28" ref={ref}>
      {/* Top divider */}
      <div className="section-glow-line mb-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16" data-reveal="fade">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-[rgba(245,130,50,0.3)] text-[#f58232] mb-4">
            Who I am
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-3">
            About <span className="text-amber-gradient">Me</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Frontend specialist creating impactful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — bio + timeline */}
          <div className="space-y-6">
            <p data-reveal="left" className="text-[var(--text-secondary)] text-lg leading-relaxed">
              I&apos;m{' '}
              <span className="text-[var(--text-primary)] font-semibold">Marie Sandrine Ingabire</span>,
              a frontend-focused software engineer with strong capabilities in backend development.
              My specialty lies in building beautiful, responsive, and performant user interfaces
              using React, Next.js, and TypeScript.
            </p>

            <p data-reveal="left" data-delay="100" className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Holder of a{' '}
              <span className="text-[var(--text-primary)] font-semibold">Bachelor&apos;s Degree in Information Systems</span>{' '}
              from the University of Rwanda, combining solid academic foundations with hands-on
              experience to deliver exceptional user experiences backed by solid architecture.
            </p>

            {/* Timeline */}
            <div className="space-y-6 pt-4">
              {[
                {
                  period: '2023 – Present',
                  title: 'Full Stack Developer',
                  sub: 'Building full-stack and mobile applications with modern technologies',
                  active: true,
                },
                {
                  period: '2021 – 2025',
                  title: 'University of Rwanda',
                  sub: 'Bachelor\'s Degree · Information Systems',
                  active: false,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  data-reveal="left"
                  data-delay={`${(i + 2) * 100}`}
                  className="relative pl-8"
                  style={{
                    borderLeft: `2px solid ${item.active ? '#f58232' : 'rgba(255,255,255,0.12)'}`,
                  }}
                >
                  <div
                    className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2"
                    style={{
                      background: item.active ? '#f58232' : 'var(--bg-mid)',
                      borderColor: item.active ? '#f58232' : 'rgba(255,255,255,0.2)',
                      boxShadow: item.active ? '0 0 12px rgba(245,130,50,0.5)' : 'none',
                    }}
                  />
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{
                      background: item.active ? 'rgba(245,130,50,0.12)' : 'rgba(255,255,255,0.06)',
                      color: item.active ? '#f58232' : 'var(--text-muted)',
                    }}
                  >
                    {item.period}
                  </span>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mt-1">{item.title}</h4>
                  <p className="text-[var(--text-secondary)] text-sm">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — specialty cards */}
          <div className="space-y-5">
            {CARDS.map((card, i) => (
              <div
                key={card.title}
                data-reveal="right"
                data-delay={`${i * 150}`}
                className="glass-card rounded-2xl p-6 transition-all duration-300"
                style={{ background: card.color, borderColor: card.border }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{card.icon}</span>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{card.title}</h3>
                  </div>
                  {card.badge && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(245,130,50,0.18)] text-[#f58232] border border-[rgba(245,130,50,0.3)]">
                      {card.badge}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-[var(--text-secondary)] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
