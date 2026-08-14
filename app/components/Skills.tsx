'use client';

import { useState, useEffect, useRef } from 'react';
import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs,
  SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiPostgresql, SiFirebase, SiSupabase,
} from 'react-icons/si';
import { FaComments, FaLightbulb, FaUsers, FaClock, FaExchangeAlt, FaSearch, FaMobileAlt } from 'react-icons/fa';

type Category = 'frontend' | 'backend' | 'mobile' | 'softskills';

const DATA = {
  frontend: {
    title: 'Frontend',
    skills: [
      { name: 'TypeScript',   pct: 90, icon: <SiTypescript  className="text-blue-400"  /> },
      { name: 'JavaScript',   pct: 95, icon: <SiJavascript  className="text-yellow-400" /> },
      { name: 'React',        pct: 90, icon: <SiReact        className="text-cyan-400"  /> },
      { name: 'Next.js',      pct: 85, icon: <SiNextdotjs    className="text-white"     /> },
      { name: 'HTML / CSS',   pct: 95, icon: <span className="flex gap-1"><SiHtml5 className="text-orange-400" /><SiCss3 className="text-blue-400" /></span> },
      { name: 'Tailwind CSS', pct: 90, icon: <SiTailwindcss  className="text-cyan-500"  /> },
    ],
  },
  backend: {
    title: 'Backend',
    skills: [
      { name: 'Node.js',     pct: 85, icon: <SiNodedotjs   className="text-green-400" /> },
      { name: 'REST APIs',   pct: 90, icon: <span className="text-purple-400 font-bold text-sm">API</span> },
      { name: 'MongoDB',     pct: 80, icon: <SiMongodb     className="text-green-400" /> },
      { name: 'PostgreSQL',  pct: 75, icon: <SiPostgresql  className="text-blue-400"  /> },
      { name: 'Supabase',    pct: 70, icon: <SiSupabase    className="text-green-400" /> },
      { name: 'Firebase',    pct: 85, icon: <SiFirebase    className="text-yellow-400" /> },
    ],
  },
  mobile: {
    title: 'Mobile',
    skills: [
      { name: 'React Native',     pct: 85, icon: <SiReact       className="text-cyan-400"   /> },
      { name: 'Expo',             pct: 80, icon: <FaMobileAlt   className="text-white"      /> },
      { name: 'TypeScript',       pct: 90, icon: <SiTypescript  className="text-blue-400"   /> },
      { name: 'Firebase',         pct: 85, icon: <SiFirebase    className="text-yellow-400" /> },
      { name: 'REST APIs',        pct: 90, icon: <span className="text-purple-400 font-bold text-sm">API</span> },
      { name: 'Responsive UI',    pct: 92, icon: <FaMobileAlt   className="text-pink-400"   /> },
    ],
  },
  softskills: {
    title: 'Soft Skills',
    skills: [
      { name: 'Communication',       pct: 95, icon: <FaComments     className="text-blue-400"   /> },
      { name: 'Problem Solving',     pct: 90, icon: <FaLightbulb    className="text-amber-400"  /> },
      { name: 'Team Collaboration',  pct: 92, icon: <FaUsers        className="text-green-400"  /> },
      { name: 'Time Management',     pct: 88, icon: <FaClock        className="text-purple-400" /> },
      { name: 'Adaptability',        pct: 90, icon: <FaExchangeAlt  className="text-pink-400"   /> },
      { name: 'Attention to Detail', pct: 94, icon: <FaSearch       className="text-red-400"    /> },
    ],
  },
};

const TICKER = [
  { name: 'TypeScript',    icon: <SiTypescript  className="text-blue-400"   /> },
  { name: 'React',         icon: <SiReact       className="text-cyan-400"   /> },
  { name: 'React Native',  icon: <FaMobileAlt   className="text-cyan-300"   /> },
  { name: 'Next.js',       icon: <SiNextdotjs   className="text-white"      /> },
  { name: 'Node.js',       icon: <SiNodedotjs   className="text-green-400"  /> },
  { name: 'MongoDB',       icon: <SiMongodb     className="text-green-400"  /> },
  { name: 'PostgreSQL',    icon: <SiPostgresql  className="text-blue-400"   /> },
  { name: 'Firebase',      icon: <SiFirebase    className="text-yellow-400" /> },
  { name: 'Tailwind CSS',  icon: <SiTailwindcss className="text-cyan-500"   /> },
  { name: 'HTML5',         icon: <SiHtml5       className="text-orange-400" /> },
  { name: 'CSS3',          icon: <SiCss3        className="text-blue-400"   /> },
  { name: 'JavaScript',    icon: <SiJavascript  className="text-yellow-400" /> },
  { name: 'Supabase',      icon: <SiSupabase    className="text-green-400"  /> },
];

function SkillBar({ pct, animated }: { pct: number; animated: boolean }) {
  return (
    <div className="w-full h-1.5 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full progress-fill"
        style={{
          width: animated ? `${pct}%` : '0%',
          background: 'linear-gradient(90deg,#f58232,#ffb366)',
          transition: animated ? 'width 1.1s cubic-bezier(0.22,1,0.36,1)' : 'none',
        }}
      />
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<Category>('frontend');
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger bar animation when section enters view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);

    // Also reveal data-reveal elements
    const targets = el.querySelectorAll('[data-reveal]');
    const revObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('revealed'); revObs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    targets.forEach((t) => revObs.observe(t));

    return () => { obs.disconnect(); revObs.disconnect(); };
  }, []);

  // Re-animate bars when category changes
  const handleCategory = (cat: Category) => {
    setAnimated(false);
    setActive(cat);
    setTimeout(() => setAnimated(true), 60);
  };

  const current = DATA[active];

  return (
    <section id="skills" ref={sectionRef} className="section-base py-20 md:py-28 overflow-hidden">
      <div className="section-glow-line mb-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-14" data-reveal="fade">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-[rgba(245,130,50,0.3)] text-[#f58232] mb-4">
            What I know
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-3">
            Skills &amp; <span className="text-amber-gradient">Expertise</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12" data-reveal="fade" data-delay="100">
          <div className="inline-flex p-1 rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)]">
            {(Object.keys(DATA) as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`px-5 sm:px-7 py-2 rounded-lg text-sm font-semibold transition-all duration-250 ${
                  active === cat
                    ? 'text-white shadow-lg'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                style={active === cat ? { background: 'linear-gradient(135deg,#f58232,#ffb366)' } : {}}
              >
                {DATA[cat].title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {current.skills.map((skill, i) => (
            <div
              key={`${active}-${skill.name}`}
              className="glass-card rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-300"
              style={{
                animation: `skillFadeIn 0.4s ease forwards`,
                animationDelay: `${i * 60}ms`,
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl flex items-center">{skill.icon}</div>
                <div className="flex-1 flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">{skill.name}</h3>
                  <span className="text-sm font-bold text-[#f58232]">{skill.pct}%</span>
                </div>
              </div>
              <SkillBar pct={skill.pct} animated={animated} />
            </div>
          ))}
        </div>

        <style jsx global>{`
          @keyframes skillFadeIn {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>

      {/* Tech ticker */}
      <div className="mt-20 md:mt-24 relative overflow-hidden">
        <div className="section-glow-line mb-0" />
        <div className="py-8 relative">
          <div className="animate-scroll flex items-center gap-12">
            {[...TICKER, ...TICKER].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0 group">
                <div className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform">
                  {s.icon}
                </div>
                <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors duration-200 whitespace-nowrap">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="section-glow-line" />

        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--bg-deep)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--bg-deep)] to-transparent" />
      </div>
    </section>
  );
}
