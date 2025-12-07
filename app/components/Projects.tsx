'use client';

import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Healthcare Management System',
      description: 'A comprehensive healthcare platform for managing patient records, appointments, and medical history with secure data handling and real-time updates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      deployedLink: 'https://healthcareapp-jfrg.vercel.app/',
      githubLink: '#',
      imageSrc: '/projects/healthcare-system.jpg',
      features: [
        'Patient record management',
        'Appointment scheduling',
        'Secure data encryption',
        'Real-time notifications'
      ]
    },
    {
      title: 'Medium-Inspired Blog Platform',
      description: 'A responsive blogging platform with rich text editing, user authentication, social features, and content management system inspired by Medium.',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Prisma'],
      deployedLink: 'https://phase-two-capstone-project-x6up.vercel.app/',
      githubLink: '#',
      imageSrc: '/projects/blog-platform.jpg',
      features: [
        'Rich text editor',
        'User authentication',
        'Payment integration',
        'Social sharing'
      ]
    },
    {
      title: 'Static E-Commerce Store',
      description: 'A fully responsive e-commerce homepage with product showcasing, shopping cart functionality, payment integration, and inventory management.',
      technologies: ['React', 'Firebase', 'WebSocket', 'Tailwind CSS'],
      deployedLink: 'https://static-e-commerce-homepage-theta.vercel.app/',
      githubLink: '#',
      imageSrc: '/projects/ecommerce-store.jpg',
      features: [
        'Shopping cart functionality',
        'Payment integration',
        'Product filtering',
        'Responsive design'
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">PORTFOLIO</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-6">
            Featured Projects
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Real-world applications built with modern technologies. Click on images to view live demos.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex lg:items-stretch`}
            >
              {/* Image/Preview Section */}
              <div className="lg:w-1/2">
                <div className="relative h-64 md:h-80 lg:h-full min-h-[300px] overflow-hidden bg-gray-100">
                  {/* Direct link to live site */}
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                  >
                    {/* Real Image - Replace placeholder with this */}
                    <div className="relative w-full h-full">
                      {/* Modified container for full screenshot visibility */}
                      <div className="absolute inset-0 flex items-center justify-center bg-white p-2">
                        <div className="relative w-full h-full max-w-[95%] max-h-[95%]">
                          <Image
                            src={project.imageSrc}
                            alt={`${project.title} Screenshot`}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <FaExternalLinkAlt className="text-2xl text-gray-800" />
                      </div>
                    </div>
                    
                    {/* Live badge */}
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 z-10">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      LIVE
                    </div>
                    
                    {/* Project number */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold z-10">
                      #{index + 1}
                    </div>
                  </a>
                </div>
              </div>

              {/* Content Section - UNCHANGED */}
              <div className="lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                        Featured
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-700">
                          <span className="w-5 h-5 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-all duration-200 shadow-md hover:shadow-lg group"
                    >
                      <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform" />
                      View Live Demo
                    </a>
                    
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 group"
                    >
                      <FaGithub className="group-hover:scale-110 transition-transform" />
                      Source Code
                    </a>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Production Ready</span>
                    </div>
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                    >
                      {new URL(project.deployedLink).hostname} →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-20 md:mt-24 lg:mt-28">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 shadow-lg p-8 md:p-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-900 text-white rounded-xl p-6 inline-block">
                  <FaGithub className="text-5xl" />
                </div>
              </div>
              <div className="md:w-2/3 text-left">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Want to see the code?
                </h4>
                <p className="text-gray-600 text-lg mb-6">
                  All projects are built with clean, maintainable code and follow best practices.
                  Visit my GitHub to explore the complete source code and implementation details.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/ingabiremariesandrine187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 hover:scale-105"
                  >
                    <FaGithub className="text-xl" />
                    Explore GitHub
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-semibold hover:border-amber-500 hover:text-amber-600 transition-all duration-200"
                  >
                    <FaArrowRight />
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}