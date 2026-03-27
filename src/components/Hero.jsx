import React from 'react';
import { Download, Users, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left mt-10 lg:mt-0">
          
          {/* Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-xs font-mono tracking-widest mb-6 bg-[var(--color-accent)]/5"
          >
            HELLO, I'M
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1] mb-4 text-white"
          >
            Vinay <span className="text-[var(--color-accent)]">Kumar</span>
          </motion.h1>

          {/* Sub-headline / Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-[var(--color-text-secondary)] font-semibold mb-6 flex items-center gap-2"
          >
            Full-Stack Developer <span className="text-[var(--color-accent)] animate-pulse">|</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-[var(--color-text-secondary)] max-w-xl leading-relaxed mb-10"
          >
            Building scalable web applications with the <strong className="text-white">MERN stack</strong>, solving complex algorithmic challenges, and shipping production-ready products with measurable impact.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-accent)] text-white rounded-lg font-bold transition-transform hover:-translate-y-1 shadow-[0_0_20px_var(--color-accent)]/40 text-center"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download="Vinay_Kumar_Resume.pdf"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-lg font-bold hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>
          
        </div>

        {/* Right Content - Circular Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:flex items-center justify-center relative hidden"
        >
          <div className="w-[350px] h-[350px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden relative shadow-2xl bg-[#131b2c] flex flex-col items-center justify-center z-10">
            <img 
               src="/projects/profile.jpeg" 
               alt="Vinay Kumar" 
               className="w-full h-full object-cover z-20 relative transition-all duration-500"
               onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Fallback pattern if image is missing */}
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center p-8">
               <Users className="w-16 h-16 text-gray-700 mb-4" />
               <p className="text-gray-500 font-medium">Save photo as <br/><strong className="text-[var(--color-accent)]">profile.png</strong></p>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;


