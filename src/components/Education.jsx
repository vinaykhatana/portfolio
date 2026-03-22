import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
  const certifications = [
    { title: 'Java Programming', issuer: 'NeoCollab' },
    { 
      title: 'Network Communication', 
      issuer: 'Coursera',
      link: 'https://drive.google.com/file/d/1d9ZlpiGQ19_N8kgyCNu66REoF4xwmgT9/view?usp=sharing'
    },
    { title: 'Web Development Bootcamp', issuer: 'Udemy' },
  ];

  return (
    <section id="certifications" className="py-24 relative bg-[var(--color-bg-secondary)]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-[var(--color-accent)]">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="glass-card p-8 border-l-4 border-l-[var(--color-accent)]">
              <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                B.Tech in Computer Science & Engineering
              </h4>
              <p className="text-[var(--color-accent)] font-medium mb-4">
                Lovely Professional University
              </p>
              <div className="flex justify-between items-center text-[var(--color-text-secondary)] text-sm mb-4 bg-[var(--color-bg-primary)] px-4 py-2 rounded-lg inline-flex">
                <span>2023 - Present</span>
                <span className="mx-2">•</span>
                <span>6th Semester</span>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Specializing in software engineering, full-stack web development, and algorithmic problem-solving. Active participant in coding clubs and technical seminars.
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => {
                const CardWrapper = cert.link ? 'a' : 'div';
                const wrapperProps = cert.link ? { href: cert.link, target: '_blank', rel: 'noreferrer' } : {};
                
                return (
                  <CardWrapper
                    key={cert.title}
                    {...wrapperProps}
                    className={`glass-card p-6 flex items-start gap-4 transition-all duration-300 ${cert.link ? 'hover:-translate-x-1 hover:border-cyan-500/50 cursor-pointer block' : 'hover:-translate-x-1 hover:border-cyan-500/30'}`}
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-[var(--color-text-primary)] mb-1 flex items-center gap-2">
                        {cert.title}
                        {cert.link && <ExternalLink className="w-3.5 h-3.5 text-cyan-400 opacity-60" />}
                      </h4>
                      <p className="text-sm text-[var(--color-text-secondary)]">{cert.issuer}</p>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
