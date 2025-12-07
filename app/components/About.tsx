'use client'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ABOUT ME
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Frontend specialist creating impactful experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Introduction */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              I m <span className="font-semibold text-gray-900">Marie Sandrine Ingabire</span>, a frontend-focused software engineer with strong capabilities in backend development. My specialty lies in building beautiful, responsive, and performant user interfaces using React, Next.js, and TypeScript.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Currently a <span className="font-semibold text-gray-900">Level 4 Information Systems</span> student at the University of Rwanda, I combine academic knowledge with hands-on experience to deliver exceptional user experiences backed by solid architecture.
            </p>

            {/* Timeline Experience */}
            <div className="space-y-6 pt-4">
              {/* Timeline Item 1 */}
              <div className="relative pl-8 border-l-2 border-amber-500">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-amber-500 rounded-full"></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">2023 - PRESENT</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Software Engineer</h4>
                  <p className="text-gray-600">
                    Building full-stack applications with modern technologies
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">2021 - PRESENT</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">University of Rwanda</h4>
                  <p className="text-gray-600">
                    Information Systems | Level 4
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="space-y-6">
            {/* Cybersecurity Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">C</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cybersecurity</h3>
              </div>
              <p className="text-gray-600">
                Knowledge in security best practices and vulnerability assessment
              </p>
            </div>

            {/* Frontend Specialist Card */}
            <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-amber-600 font-bold text-xl">F</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Frontend Specialist</h3>
                </div>
                <span className="text-sm font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                  Primary
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                React, Next.js, TypeScript - my strongest expertise in creating beautiful, responsive interfaces
              </p>
              <div className="inline-flex items-center gap-1 text-amber-600 font-semibold">
                <span>B</span>
                <div className="w-16 h-1 bg-amber-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-3/4"></div>
                </div>
              </div>
            </div>

            {/* Backend Skills Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-xl">B</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Backend Skills</h3>
              </div>
              <p className="text-gray-600">
                MongoDB, PostgreSQL, Firebase, Supabase - solid database and API development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}