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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed">
            I'm a Computer Science student at Lovely Professional University with a strong passion for building full-stack web applications that solve real-world problems. My primary tech stack is MERN (MongoDB, Express, React, Node.js), where I enjoy crafting both robust backend logic and polished frontend experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
