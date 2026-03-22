import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'glass-effect shadow-lg shadow-black/10 py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-[var(--color-accent)]/10 rounded-lg group-hover:bg-[var(--color-accent)]/20 transition-colors">
            <Code2 className="w-6 h-6 text-[var(--color-accent)]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Vinay<span className="text-[var(--color-accent)]"></span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          {/* <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] rounded-lg transition-colors shadow-lg shadow-emerald-500/20"
          >
            Hire Me
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-effect border-t border-[var(--color-border)] transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0 border-t-0'
          }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
