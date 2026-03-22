import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Nexus Marketing',
    description: 'A comprehensive MERN stack e-portal designed for marketing and digital presence. Features seamless user authentication, intuitive dashboard, and optimized data delivery.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/vinaykhatana',
    live: '#',
    image: '/projects/nexus.png',
  },
  {
    title: 'DSA Visualizer',
    description: 'An interactive web application built to visualize complex Data Structures and Algorithms. Helps students understand sorting, searching, and pathfinding algorithms in real-time.',
    tech: ['React.js', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/vinaykhatana',
    live: '#',
    image: '/projects/dsa.png',
  },
  {
    title: 'DevChat Application',
    description: 'A real-time chat application for developers with channels, direct messaging, and code snippet sharing capabilities.',
    tech: ['Next.js', 'Socket.io', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/vinaykhatana',
    live: '#',
    image: '/projects/devchat.png',
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

                <p className="text-[var(--color-text-secondary)] mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

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

