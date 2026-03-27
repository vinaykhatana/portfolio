import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'glass-effect shadow-lg shadow-black/10 py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-3 items-center">
        {/* Logo Section */}
        <div className="flex justify-start">
          <a href="#" onClick={(e) => handleNavClick(e, '#hero')} className="w-10 h-10 flex items-center justify-center bg-[var(--color-accent)] rounded-lg shadow-[0_0_15px_var(--color-accent)] hover:scale-105 transition-transform">
            <span className="text-2xl font-black text-white">v</span>
          </a>
        </div>

        {/* Desktop Navigation (Center Pill) */}
        <div className="hidden lg:flex items-center justify-center bg-[#131b2c] border border-white/5 py-2.5 px-6 rounded-full w-max mx-auto gap-6 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Right Side CV */}
        <div className="hidden lg:flex justify-end items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2.5 bg-[#131b2c] border border-white/5 rounded-full text-gray-300 hover:text-white transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a
            href="/resume.pdf"
            download="Vinay_Kumar_Resume.pdf"
            className="px-6 py-2.5 flex items-center gap-2 text-sm font-bold text-white bg-[var(--color-accent)] rounded-full hover:bg-[var(--color-accent)]/80 transition-colors shadow-[0_0_15px_var(--color-accent)]/40"
          >
            <Download className="w-4 h-4" /> CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex justify-end lg:hidden">
          <button
            className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full glass-effect border-t border-[var(--color-border)] transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0 border-t-0'
          }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Vinay_Kumar_Resume.pdf"
            className="flex items-center justify-center gap-2 px-6 py-3 mt-2 text-sm font-bold text-white bg-[var(--color-accent)] rounded-lg text-center"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
