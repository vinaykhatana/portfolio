import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6+)', 'Java', 'C++', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    category: 'Tools',
    skills: ['Git/GitHub', 'VS Code', 'AWS Quick Starts'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-[var(--color-bg-secondary)]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500/30"
            >
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 pb-4 border-b border-[var(--color-border)] group-hover:border-emerald-500/30 transition-colors">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]/80 group-hover:scale-150 group-hover:bg-emerald-400 transition-all duration-300"></span>
                    <span className="font-medium group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
