import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Code } from 'lucide-react';

const achievements = [
  {
    title: 'Placement Preparation',
    description: 'Actively preparing for placements during my 5th-semester engineering journey at LPU, with a strong focus on mastering Data Structures and Algorithms (DSA) and Problem Solving.',
    tag: 'DSA & Problem Solving',
    icon: Code,
  },
  {
    title: 'MERN Stack Project - Nexus',
    description: 'Successfully built and deployed "Nexus," a comprehensive full-stack e-portal tailored for marketing, utilizing modern MERN stack technologies.',
    tag: 'Full-Stack Development',
    icon: Star,
  },
  {
    title: 'Academic Excellence',
    description: 'Pursuing B.Tech in Computer Science and Engineering, maintaining a strong academic foundation, particularly in core subjects like Finite Automata and Theory of Computation.',
    tag: 'Academic Journey',
    icon: Trophy,
  },
  {
    title: 'Soft Skills Enhancement',
    description: 'Dedicated to continuous personal growth with a strong commitment to improving communication and public speaking skills to effectively convey ideas.',
    tag: 'Personal Growth',
    icon: Medal,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements & Milestones</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent)]/10 overflow-hidden bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)]"
            >
              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="mb-6 flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-colors shadow-lg">
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="mt-2">
                  <span className="inline-block text-sm font-semibold text-[var(--color-accent)] px-4 py-1.5 bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/20 mb-5">
                    {item.tag}
                  </span>
                  
                  <h3 className="font-bold mb-4 text-2xl text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>

                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
