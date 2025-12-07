'use client'

import { useState } from 'react';
import { 
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, 
  SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiPostgresql, SiFirebase, SiSupabase
} from 'react-icons/si';
import { 
  FaComments, 
  FaLightbulb, 
  FaUsers, 
  FaClock, 
  FaExchangeAlt, 
  FaSearch 
} from 'react-icons/fa';

type SkillCategory = 'frontend' | 'backend' | 'softskills';

export default function Expertise() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');

  const skillsData = {
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'TypeScript', percentage: 90, icon: <SiTypescript className="text-blue-600" /> },
        { name: 'JavaScript', percentage: 95, icon: <SiJavascript className="text-yellow-500" /> },
        { name: 'React', percentage: 90, icon: <SiReact className="text-blue-400" /> },
        { name: 'Next.js', percentage: 85, icon: <SiNextdotjs className="text-gray-900" /> },
        { name: 'HTML/CSS', percentage: 95, icon: <><SiHtml5 className="text-orange-600" /> <SiCss3 className="text-blue-600" /></> },
        { name: 'Tailwind CSS', percentage: 90, icon: <SiTailwindcss className="text-cyan-500" /> },
      ]
    },
    backend: {
      title: 'Backend',
      skills: [
        { name: 'Node.js', percentage: 85, icon: <SiNodedotjs className="text-green-600" /> },
        { name: 'REST APIs', percentage: 90, icon: <div className="text-purple-600 font-bold text-lg">API</div> },
        { name: 'MongoDB', percentage: 80, icon: <SiMongodb className="text-green-600" /> },
        { name: 'PostgreSQL', percentage: 75, icon: <SiPostgresql className="text-blue-700" /> },
        { name: 'Supabase', percentage: 70, icon: <SiSupabase className="text-green-600" /> },
        { name: 'Firebase', percentage: 85, icon: <SiFirebase className="text-yellow-500" /> },
      ]
    },
    softskills: {
      title: 'Soft Skills',
      skills: [
        { name: 'Communication', percentage: 95, icon: <FaComments className="text-blue-500" /> },
        { name: 'Problem Solving', percentage: 90, icon: <FaLightbulb className="text-amber-500" /> },
        { name: 'Team Collaboration', percentage: 92, icon: <FaUsers className="text-green-500" /> },
        { name: 'Time Management', percentage: 88, icon: <FaClock className="text-purple-500" /> },
        { name: 'Adaptability', percentage: 90, icon: <FaExchangeAlt className="text-pink-500" /> },
        { name: 'Attention to Detail', percentage: 94, icon: <FaSearch className="text-red-500" /> },
      ]
    }
  };

  const currentSkills = skillsData[activeCategory];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            EXPERTISE
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Skills & Technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex bg-white p-1 rounded-lg shadow-sm border border-gray-200">
            {(Object.keys(skillsData) as SkillCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {skillsData[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {currentSkills.skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="text-xl sm:text-2xl">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{skill.name}</h3>
                    <span className="text-sm sm:text-base text-amber-600 font-bold">{skill.percentage}%</span>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-between mt-2">
                {[0, 25, 50, 75, 100].map((point) => (
                  <div key={point} className="flex flex-col items-center">
                    <div className={`w-1 h-1 rounded-full ${
                      skill.percentage >= point ? 'bg-amber-500' : 'bg-gray-300'
                    }`} />
                    <span className="text-xs text-gray-500 mt-0.5">{point}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Category Description */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-sm border border-gray-200">
            <span className="text-xs sm:text-sm font-medium text-gray-600">Currently showing:</span>
            <span className="text-amber-600 font-semibold text-sm sm:text-base">
              {currentSkills.title} Technologies
            </span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500 rounded-full"></div>
          </div>
        </div>

        {/* Horizontal Skills Scroller */}
        <div className="mt-16 sm:mt-20 md:mt-24 relative overflow-hidden">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          
          <div className="py-6 sm:py-8 relative">
            {/* First scrolling row */}
            <div className="animate-scroll flex items-center space-x-8 sm:space-x-12">
              {[
                { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 opacity-80" /> },
                { name: 'React', icon: <SiReact className="text-blue-400 opacity-80" /> },
                { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 opacity-80" /> },
                { name: 'Node.js', icon: <SiNodedotjs className="text-green-600 opacity-80" /> },
                { name: 'MongoDB', icon: <SiMongodb className="text-green-600 opacity-80" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700 opacity-80" /> },
                { name: 'Firebase', icon: <SiFirebase className="text-yellow-500 opacity-80" /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 opacity-80" /> },
                { name: 'HTML5', icon: <SiHtml5 className="text-orange-600 opacity-80" /> },
                { name: 'CSS3', icon: <SiCss3 className="text-blue-600 opacity-80" /> },
                { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 opacity-80" /> },
                { name: 'Supabase', icon: <SiSupabase className="text-green-600 opacity-80" /> },
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center gap-2 sm:gap-3 group flex-shrink-0"
                >
                  <div className="text-3xl sm:text-4xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                    {skill.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-600 opacity-70 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </span>
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {[
                { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 opacity-80" /> },
                { name: 'React', icon: <SiReact className="text-blue-400 opacity-80" /> },
                { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 opacity-80" /> },
                { name: 'Node.js', icon: <SiNodedotjs className="text-green-600 opacity-80" /> },
                { name: 'MongoDB', icon: <SiMongodb className="text-green-600 opacity-80" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700 opacity-80" /> },
                { name: 'Firebase', icon: <SiFirebase className="text-yellow-500 opacity-80" /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 opacity-80" /> },
                { name: 'HTML5', icon: <SiHtml5 className="text-orange-600 opacity-80" /> },
                { name: 'CSS3', icon: <SiCss3 className="text-blue-600 opacity-80" /> },
                { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 opacity-80" /> },
                { name: 'Supabase', icon: <SiSupabase className="text-green-600 opacity-80" /> },
              ].map((skill, index) => (
                <div 
                  key={`dup-${index}`} 
                  className="flex flex-col items-center gap-2 sm:gap-3 group flex-shrink-0"
                >
                  <div className="text-3xl sm:text-4xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                    {skill.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-600 opacity-70 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>

      {/* Add scrolling animation CSS */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1rem));
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}