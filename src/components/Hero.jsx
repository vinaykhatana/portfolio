import React from 'react';
import { Download, Users, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-center text-center">

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.2] mb-6"
        >
          Hi, I'm <span className="text-[var(--color-accent)]">Vinay</span> Kumar
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed mb-10"
        >
          "Full Stack Developer and CSE Student, crafting responsive, user-focused web apps that blend performance with pixel-perfect design."
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          {[
            { icon: Github, href: 'https://github.com/vinaykhatana' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/vinay-khatana' },
            { icon: Mail, href: 'mailto:vinaykhatana999@gmail.com' },
            // { icon: Twitter, href: 'https://x.com/vinaykhatana' }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-white hover:bg-[var(--color-border)] transition-all shadow-md hover:-translate-y-1"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 rounded-xl font-bold tracking-wide transition-all shadow-lg shadow-red-900/50 hover:-translate-y-0.5"
          >
            LET'S COLLABORATE
            <Users className="w-5 h-5 ml-2" />
          </a>
          <a
            href="/resume.pdf"
            download="Vinay_Kumar_Resume.pdf"
            className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 text-white bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:bg-[var(--color-border)] rounded-xl font-bold tracking-wide transition-all hover:-translate-y-0.5 shadow-md"
          >
            GET RESUME
            <Download className="w-5 h-5 ml-2" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;


