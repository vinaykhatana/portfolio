import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'YourTherapist',
    description: '',
    details: [
      { label: 'The Challenge', text: 'People seeking mental health support face friction in finding trusted professionals, booking sessions, and managing care in one secure place.' },
      { label: 'The Action', text: 'Built a full-stack MERN platform with secure authentication, verified therapist and patient profile flows, and an intuitive appointment scheduling experience.' },
      { label: 'The Result', text: 'Reduced booking friction, improved trust through secure access and structured profiles, and enabled users to manage therapy journeys from one reliable dashboard.' }
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/vinaykhatana',
    live: 'https://yourtherapist.designschool.in/',
    image: '/projects/yourtherapist.png',
  },
  {
    title: 'Sudoku Solver Visualizer',
    description: '',
    details: [
      { label: 'The Challenge', text: 'Students and beginners find it hard to understand how backtracking works in practice without an interactive, step-by-step visual explanation.' },
      { label: 'The Action', text: 'Built an interactive grid for custom puzzle input, visualized each solving step, and strengthened input validation with optimized backtracking logic.' },
      { label: 'The Result', text: 'Made backtracking easier to understand for learners and reduced solution computation time by 35% through constraint-based optimizations.' }
    ],
    tech: ['React.js', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/vinaykhatana',
    live: 'https://sudoku-solver-theta-nine.vercel.app/',
    image: '/projects/sudokusolver.png',
  },
  {
    title: 'AK Debt Planner',
    description: '',
    details: [
      { label: 'The Challenge', text: 'Many people struggle to prioritize multiple debts and create realistic repayment plans, leading to confusion, stress, and poor financial decisions.' },
      { label: 'The Action', text: 'Built a React-based planning dashboard that captures debt inputs, prioritizes repayment paths, and uses the Google Gemini API for personalized financial guidance.' },
      { label: 'The Result', text: 'Helped users turn scattered debt data into clear repayment strategies, reducing decision confusion and improving confidence in monthly financial planning.' }
    ],
    tech: ['Javascript', 'Google Gemini API', 'Tailwind CSS'],
    github: 'https://github.com/vinaykhatana',
    live: 'https://arun.42web.io/?i=2',
    image: '/projects/debtplanner.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent)]/10 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors mt-[-48px] shadow-lg relative z-10">
                    <Folder className="w-8 h-8" />
                  </div>
                  <div className="flex gap-4 relative z-10 mt-[-24px] bg-[var(--color-bg-tertiary)] p-2 rounded-xl glass-effect shadow-md">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="font-bold mb-4 text-xl">
                  <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </a>
                </h3>

                {project.details ? (
                  <div className="mb-8 flex-grow flex flex-col gap-3">
                    {project.details.map((detail, idx) => (
                      <div key={idx} className="text-[13px] leading-relaxed">
                        <span className="font-semibold text-[var(--color-accent)] block mb-0.5">{detail.label}</span>
                        <span className="text-[var(--color-text-secondary)]">{detail.text}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[var(--color-text-secondary)] mb-8 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                )}

                <ul className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-mono text-[var(--color-accent)]/90 px-3 py-1 bg-[var(--color-accent)]/5 rounded-full border border-[var(--color-accent)]/20"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

