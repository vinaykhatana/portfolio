import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Heart, Mic } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I am a passionate Full Stack Developer and a 5th-semester B.Tech Computer Science & Engineering student at Lovely Professional University. My journey in tech is driven by an insatiable curiosity and a deep love for creating clean, efficient code that solves real-world problems.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I specialize in building scalable MERN stack applications, focusing on delivering dynamic, user-centric solutions. Beyond the screen, I have a strong interest in continuously improving my communication and public speaking skills, believing that communicating ideas effectively is just as important as writing the code that powers them.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-card p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-[var(--color-accent)]">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Clean Code</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Writing scalable, maintainable solutions.</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">User-Centric</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Focusing on seamless intuitive experiences.</p>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Fast Learner</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Adapting swiftly to new technologies.</p>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Communicator</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Advocating for effective tech dialogue.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
