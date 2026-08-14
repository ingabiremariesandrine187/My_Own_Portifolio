'use client';

import { useEffect, useRef } from 'react';

const ITEMS = [
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    desc: 'Knowledge in security best practices and vulnerability assessment',
    color: '#508cff',
  },
  {
    icon: '⚡',
    title: 'Frontend Specialist',
    desc: 'React, Next.js, TypeScript — my strongest expertise in creating beautiful, responsive interfaces',
    color: '#f58232',
    badge: 'Primary',
  },
  {
    icon: '🗄️',
    title: 'Backend Skills',
    desc: 'MongoDB, PostgreSQL, Firebase, Supabase — solid database and API development',
    color: '#64c896',
  },
];

export default function Expertise() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-base py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              data-reveal
              data-delay={`${i * 150}`}
              className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
              style={{ borderColor: `${item.color}30` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{item.title}</h3>
                </div>
                {item.badge && (
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${item.color}20`,
                      color: item.color,
                      border: `1px solid ${item.color}40`,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
              <div className="mt-4 h-px" style={{ background: `linear-gradient(90deg, ${item.color}50, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
