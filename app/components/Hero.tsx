'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-20 sm:pt-24 md:pt-32">
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(90deg, #e5e7eb 1px, transparent 1px),
              linear-gradient(180deg, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Subtle background blurs */}
      <div className="absolute top-1/4 -left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

      {/* Main content container */}
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-left space-y-4 md:space-y-6 pt-8 sm:pt-0">
            
            {/* Greeting */}
            <div className="mb-2">
              <h2 className="text-lg md:text-xl font-light text-gray-600">
                Hi, I&apos;m
              </h2>
            </div>
            
            {/* Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-gray-900">Marie Sandrine</span>
                <br />
                <span className="text-amber-500">Ingabire</span>
              </h1>
            </div>
            
            {/* Nickname subtitle */}
            <div className="mb-4">
              <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700">
                <span className="text-gray-400">(</span>
                <span className="text-gray-700">Sandrine</span>
                <span className="text-gray-400">)</span>
              </p>
            </div>
            
            {/* Title */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-700 mb-2">
                Frontend-Focused Software Engineer
              </h3>
            </div>
            
            {/* Description */}
            <div className="max-w-xl pt-2">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                Crafting beautiful, responsive user interfaces with <strong className="text-gray-800">React & Next.js</strong>. 
                Strong frontend expertise complemented by solid backend skills in 
                database design and API development.
              </p>
            </div>

            {/* Actions: Button and Social Icons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6 md:pt-8">
              {/* Button - Fixed to scroll to projects section */}
              <a 
                href="#projects" 
                className="group px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 flex items-center bg-amber-500 hover:bg-amber-600 text-white shadow-md hover:shadow-lg"
              >
                View My Work
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </a>
              
              {/* Social Icons */}
              <div className="flex space-x-3 sm:space-x-4">
                <Link href="#" className="text-gray-600 hover:text-amber-500 text-lg sm:text-xl p-1.5 sm:p-2 rounded-full hover:bg-amber-50 transition-colors duration-200">
                  <FiLinkedin />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-amber-500 text-lg sm:text-xl p-1.5 sm:p-2 rounded-full hover:bg-amber-50 transition-colors duration-200">
                  <FiGithub />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile Picture */}
          <div className="flex justify-center lg:justify-end mt-12 sm:mt-16 md:mt-0">
            <div className="relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]">
              
              {/* Main circle with profile picture - Center the image properly */}
              <div className="absolute inset-0 rounded-full shadow-lg sm:shadow-xl md:shadow-2xl border border-gray-200 overflow-hidden bg-white">
                {/* Profile Image Container */}
                <div className="relative w-full h-full">
                  <Image
                    src="/Sandrine Marie.jpeg"
                    alt="Marie Sandrine Ingabire - Software Engineer"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Experience Card with floating animation */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white/95 backdrop-blur-sm shadow-lg sm:shadow-xl rounded-lg p-3 sm:p-4 md:p-5 w-28 sm:w-32 md:w-36 lg:w-40 text-center border border-gray-100 animate-float">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-none text-amber-500">
                  3+
                </p>
                <p className="text-xs sm:text-sm mt-0.5 sm:mt-1 text-gray-600">
                  Years Experience
                </p>
              </div>

              {/* Additional decorative element */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 border-2 border-gray-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1.5 sm:space-y-2">
        <p className="text-xs tracking-widest font-mono text-gray-400 opacity-70">SCROLL</p>
        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-amber-400 to-transparent"></div>
      </div>

      {/* Add floating animation CSS */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}