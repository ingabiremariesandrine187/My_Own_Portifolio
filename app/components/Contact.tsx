'use client';

import { FaArrowUp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">GET IN TOUCH</h2>
          <h3 className="text-2xl md:text-3xl text-gray-700 mb-6">Let&apos;s Build Something Amazing</h3>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column: Contact Info */}
          <div>
            <div className="space-y-8 mb-12">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-1 group-hover:bg-amber-200 transition-colors">
                  <FaEnvelope className="text-amber-600 text-sm" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">Email</div>
                  <a 
                    href="mailto:your.email@example.com"
                    className="text-lg md:text-xl font-medium text-gray-900 hover:text-amber-600 transition-colors"
                  >
                    ingabiremariesandrine187.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Typically responds within 24 hours</p>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-start gap-4 group">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:bg-blue-200 transition-colors">
                  <FaLinkedin className="text-blue-600 text-sm" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">LinkedIn</div>
                  <a 
                    href="https://www.linkedin.com/in/ingabire-marie-sandrine-74b147276/" 
                    className="text-lg md:text-xl font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect with me
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Professional network and updates</p>
                </div>
              </div>
              
              {/* GitHub */}
              <div className="flex items-start gap-4 group">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-1 group-hover:bg-gray-200 transition-colors">
                  <FaGithub className="text-gray-700 text-sm" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">GitHub</div>
                  <a 
                    href="https://github.com/ingabiremariesandrine187" 
                    className="text-lg md:text-xl font-medium text-gray-900 hover:text-amber-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check my code
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Open-source projects and contributions</p>
                </div>
              </div>
            </div>

            {/* Start a Conversation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Start a Conversation</h4>
              <div className="w-20 h-1 bg-amber-500 mb-6"></div>
              <p className="text-gray-600">
                Feel free to reach out for collaborations, job opportunities, or just a friendly hello.
                I&apos;m always excited to connect with fellow developers and potential collaborators.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Navigation */}
          <div>
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Navigation</h4>
              <div className="space-y-4">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-white transition-colors duration-200 group"
                  >
                    <span className="text-gray-700 group-hover:text-amber-600 font-medium">{item}</span>
                    <span className="text-gray-400 group-hover:text-amber-500">→</span>
                  </a>
                ))}
                
                {/* Hire Me Button */}
                <button className="w-full mt-6 px-6 py-4 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                  <FaEnvelope />
                  Hire Me
                </button>
              </div>
            </div>

            {/* Back to Top */}
            <div className="mt-8 text-center">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors duration-200"
              >
                <FaArrowUp />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}