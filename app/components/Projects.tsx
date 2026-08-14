'use client';

import { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { FiHeart, FiShoppingCart, FiFileText } from 'react-icons/fi';

const PROJECTS = [
  {
    title: 'Healthcare Management System',
    description:
      'A comprehensive healthcare platform for managing patient records, appointments, and medical history with secure data handling and real-time updates.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    deployedLink: 'https://healthcareapp-jfrg.vercel.app/',
    githubLink: '#',
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Secure data encryption',
      'Real-time notifications',
    ],
    icon: <FiHeart className="text-4xl" />,
    number: '01',
    accent: '#f58232',
    bg: 'var(--bg-card)',
    iconBg: 'rgba(245,130,50,0.12)',
  },
  {
    title: 'Medium-Inspired Blog Platform',
    description:
      'A responsive blogging platform with rich text editing, user authentication, social features, and a content management system inspired by Medium.',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Prisma'],
    deployedLink: 'https://phase-two-capstone-project-x6up.vercel.app/',
    githubLink: '#',
    features: [
      'Rich text editor',
      'User authentication',
      'Payment integration',
      'Social sharing',
    ],
    icon: <FiFileText className="text-4xl" />,
    number: '02',
    accent: '#f58232',
    bg: 'var(--bg-card)',
    iconBg: 'rgba(245,130,50,0.12)',
  },
  {
    title: 'E-Commerce Store',
    description:
      'A fully responsive e-commerce homepage with product showcasing, shopping cart functionality, payment integration, and inventory management.',
    technologies: ['React', 'Firebase', 'WebSocket', 'Tailwind CSS'],
    deployedLink: 'https://static-e-commerce-homepage-theta.vercel.app/',
    githubLink: '#',
    features: [
      'Shopping cart',
      'Payment integration',
      'Product filtering',
      'Responsive design',
    ],
    icon: <FiShoppingCart className="text-4xl" />,
    number: '03',
    accent: '#f58232',
    bg: 'var(--bg-card)',
    iconBg: 'rgba(245,130,50,0.12)',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-base py-20 md:py-28">
      <div className="section-glow-line mb-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16" data-reveal="fade">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-[rgba(245,130,50,0.3)] text-[#f58232] mb-4">
            My work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-3">
            Featured <span className="text-amber-gradient">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {PROJECTS.map((p, index) => (
            <div
              key={p.title}
              data-reveal
              data-delay={`${index * 120}`}
              className="glass-card rounded-3xl p-7 md:p-10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,130,50,0.10)] group"
              style={{ background: p.bg }}
            >
              <div className="flex flex-col md:flex-row gap-8">

                {/* Left — icon + number */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-6 md:w-28 flex-shrink-0">
                  {/* Icon circle */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: p.iconBg, color: p.accent }}
                  >
                    {p.icon}
                  </div>
                  {/* Project number */}
                  <span
                    className="text-5xl font-extrabold leading-none select-none hidden md:block"
                    style={{ color: `${p.accent}25` }}
                  >
                    {p.number}
                  </span>
                </div>

                {/* Right — content */}
                <div className="flex-1 min-w-0">

                  {/* Title row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                      {p.title}
                    </h3>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${p.accent}18`,
                        color: p.accent,
                        border: `1px solid ${p.accent}35`,
                      }}
                    >
                      Live
                    </span>
                    <span
                      className="text-5xl font-extrabold leading-none select-none md:hidden ml-auto"
                      style={{ color: `${p.accent}20` }}
                    >
                      {p.number}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-5 max-w-2xl">
                    {p.description}
                  </p>

                  {/* Tech + features row */}
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">

                    {/* Tech stack */}
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs font-medium rounded-lg border border-[var(--border)] text-[var(--text-secondary)] bg-[var(--bg-card)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                        Key Features
                      </p>
                      <ul className="space-y-1">
                        {p.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-xs text-[var(--text-secondary)]"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: p.accent }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[var(--border)] mb-5" />

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={p.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg,var(--amber),var(--amber-light))`,
                      }}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[var(--text-primary)] glass-card border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300"
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16" data-reveal="scale" data-delay="100">
          <div
            className="glass-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 border border-[rgba(245,130,50,0.2)]"
            style={{ background: 'rgba(245,130,50,0.05)' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.07)] flex items-center justify-center flex-shrink-0">
              <FaGithub className="text-3xl text-[var(--text-primary)]" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                Want to see the code?
              </h4>
              <p className="text-[var(--text-secondary)] text-sm">
                All projects are built with clean, maintainable code following best practices.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://github.com/ingabiremariesandrine187"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg,var(--amber),var(--amber-light))' }}
              >
                <FaGithub />
                Explore GitHub
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[var(--text-primary)] glass-card border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300"
              >
                <FaArrowRight />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
