'use client';

import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiAlertCircle } from 'react-icons/fi';

const WHATSAPP_NUMBER = '250786205253'; // +250786205253

const CONTACT_ITEMS = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'ingabiremariesandrine187@gmail.com',
    href: 'mailto:ingabiremariesandrine187@gmail.com',
    sub: 'Typically responds within 24 hours',
    color: '#f58232',
    bg: 'rgba(245,130,50,0.12)',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+250 786 205 253',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    sub: 'Chat with me directly on WhatsApp',
    color: '#25d366',
    bg: 'rgba(37,211,102,0.12)',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/ingabire-marie-sandrine-74b147276/',
    sub: 'Professional network and updates',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.12)',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'Check my code',
    href: 'https://github.com/ingabiremariesandrine187',
    sub: 'Open-source projects and contributions',
    color: '#a0b0c8',
    bg: 'rgba(160,176,200,0.10)',
  },
];

interface FormData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  from_name?: string;
  from_email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const [form, setForm] = useState<FormData>({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors]   = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Scroll reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      }),
      { threshold: 0.10 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  // Validation
  const validate = (data: FormData): FormErrors => {
    const e: FormErrors = {};
    if (!data.from_name.trim())
      e.from_name = 'Name is required';
    if (!data.from_email.trim())
      e.from_email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.from_email))
      e.from_email = 'Enter a valid email address';
    if (!data.subject.trim())
      e.subject = 'Subject is required';
    if (!data.message.trim())
      e.message = 'Message is required';
    else if (data.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const fieldErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }));
  };

  // Submit — opens WhatsApp with pre-filled message
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ from_name: true, from_email: true, subject: true, message: true });
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    const text = [
      `👋 Hello Marie Sandrine!`,
      ``,
      `*Name:* ${form.from_name}`,
      `*Email:* ${form.from_email}`,
      `*Subject:* ${form.subject}`,
      ``,
      `*Message:*`,
      form.message,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    // Reset form after opening WhatsApp
    setForm({ from_name: '', from_email: '', subject: '', message: '' });
    setTouched({});
    setErrors({});
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const fieldClass = (name: keyof FormErrors) => `
    w-full px-4 py-3 rounded-xl text-sm text-[var(--text-primary)]
    bg-[var(--bg-card)] border transition-all duration-200 outline-none
    placeholder:text-[var(--text-muted)]
    focus:border-[var(--amber)] focus:ring-2 focus:ring-[rgba(245,130,50,0.15)]
    ${touched[name] && errors[name]
      ? 'border-red-400 ring-2 ring-red-400/20'
      : 'border-[var(--border)] hover:border-[rgba(245,130,50,0.3)]'}
  `;

  return (
    <section id="contact" ref={sectionRef} className="section-base py-20 md:py-28">
      <div className="section-glow-line mb-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Header */}
        <div className="mb-14" data-reveal="left">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-[rgba(245,130,50,0.3)] text-[#f58232] mb-4">
            Say Hello
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-3">
            Get in <span className="text-amber-gradient">Touch</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
            Fill in the form and it will open WhatsApp with your message pre-filled —
            so you can reach me directly and instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── Left — contact info ──────────────────────────── */}
          <div className="space-y-4">
            {CONTACT_ITEMS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal="left"
                data-delay={`${i * 100}`}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 group transition-all duration-300 hover:scale-[1.02]"
                style={{ borderColor: `${item.color}30` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.bg, color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="font-semibold text-sm sm:text-base truncate" style={{ color: item.color }}>
                    {item.value}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.sub}</p>
                </div>
                <div className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" style={{ color: item.color }}>
                  →
                </div>
              </a>
            ))}
          </div>

          {/* ── Right — form ─────────────────────────────────── */}
          <div data-reveal="right" data-delay="100">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-card rounded-2xl p-6 md:p-8 border border-[var(--border)] space-y-5"
            >
              <div>
                <h4 className="text-lg font-bold text-[var(--text-primary)]">Send a Message</h4>
                <p className="text-xs text-[var(--text-muted)] mt-1 flex items-center gap-1.5">
                  <FaWhatsapp className="text-[#25d366]" />
                  Opens WhatsApp with your message ready to send
                </p>
                <div className="w-12 h-px bg-[var(--amber)] mt-4" />
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] text-sm pointer-events-none" />
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={`${fieldClass('from_name')} pl-10`}
                  />
                </div>
                {touched.from_name && errors.from_name && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.from_name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] text-sm pointer-events-none" />
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={`${fieldClass('from_email')} pl-10`}
                  />
                </div>
                {touched.from_email && errors.from_email && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.from_email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Project Collaboration / Job Opportunity"
                  className={fieldClass('subject')}
                />
                {touched.subject && errors.subject && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3.5 top-3.5 text-[var(--text-muted)] text-sm pointer-events-none" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={`${fieldClass('message')} pl-10 resize-none`}
                  />
                </div>
                {touched.message && errors.message && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <FiAlertCircle /> {errors.message}
                  </p>
                )}
                <p className="text-xs text-[var(--text-muted)] mt-1 text-right">
                  {form.message.length} chars
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg,#25d366,#128c7e)' }}
              >
                <FaWhatsapp className="text-lg" />
                Send via WhatsApp
                <FiSend className="text-sm" />
              </button>
            </form>

            {/* Back to top */}
            <div className="mt-6 text-center">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#f58232] transition-colors duration-200"
              >
                <FaArrowUp className="text-xs" />
                Back to top
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
