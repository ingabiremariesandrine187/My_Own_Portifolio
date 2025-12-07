'use client'

import { useState, useEffect } from 'react'
        import Link from 'next/link'

// ... rest of your component code
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-4 md:py-5">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <span className="text-xl md:text-2xl font-bold text-gray-600">
                Dev
                <span className="text-amber-500">Portfolio</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
  

<div className="hidden md:flex items-center gap-8">
  <Link href="#about" className="text-gray-600 hover:text-amber-500 font-medium transition-colors duration-200">
    About
  </Link>
  <Link href="#skills" className="text-gray-600 hover:text-amber-500 font-medium transition-colors duration-200">
    Skills
  </Link>
  <Link href="#projects" className="text-gray-600 hover:text-amber-500 font-medium transition-colors duration-200">
    Projects
  </Link>
  <Link href="#contact" className="text-gray-600 hover:text-amber-500 font-medium transition-colors duration-200">
    Contact
  </Link>
  <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
    Hire Me
  </button>
</div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
  className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
    isOpen 
      ? 'max-h-96 opacity-100 visible' 
      : 'max-h-0 opacity-0 invisible'
  }`}
>
  <div className="flex flex-col p-4 gap-1">
    <Link 
      href="#about" 
      className="text-gray-700 py-3 px-4 hover:bg-amber-50 rounded-md font-medium transition-colors"
      onClick={() => setIsOpen(false)}
    >
      About
    </Link>
    <Link 
      href="#skills" 
      className="text-gray-700 py-3 px-4 hover:bg-amber-50 rounded-md font-medium transition-colors"
      onClick={() => setIsOpen(false)}
    >
      Skills
    </Link>
    <Link 
      href="#projects" 
      className="text-gray-700 py-3 px-4 hover:bg-amber-50 rounded-md font-medium transition-colors"
      onClick={() => setIsOpen(false)}
    >
      Projects
    </Link>
    <Link 
      href="#contact" 
      className="text-gray-700 py-3 px-4 hover:bg-amber-50 rounded-md font-medium transition-colors"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>
    <button 
      className="bg-amber-500 hover:bg-amber-600 text-white mt-2 py-3 px-4 rounded-md font-medium transition-colors"
      onClick={() => setIsOpen(false)}
    >
      Hire Me
    </button>
  </div>
</div>
      </nav>
    </>
  )
}