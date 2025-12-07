'use client';

import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 md:py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <span className="text-amber-500">Dev</span>
              <span>Portfolio</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">Frontend-Focused Software Engineer</p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ingabiremariesandrine187" // Replace with your GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/ingabire-marie-sandrine-74b147276/" // Replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-gray-800 mb-8 md:mb-12"></div>

        {/* Copyright and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Marie Sandrine Ingabire. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm"
              >
                {item}
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm"
            >
              <FaArrowUp className="text-xs" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Made with ❤️ by Marie Sandrine Ingabire • Open to new opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}