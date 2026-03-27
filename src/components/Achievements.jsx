import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Award } from 'lucide-react';

const achievements = [
  {
    title: 'AI Integrations',
    description: 'Developed and launched specialized AI-powered tools, including AK Debt Planner, leveraging the Google Gemini API.',
    icon: Bot,
    iconColor: 'text-purple-400',
  },
  {
    title: 'Hackathon participant',
    description: 'Led the frontend design and organized the project structure for our team’s solution at the Binary Blitz Hackathon by Coding Ninjas',
    icon: Award,
    iconColor: 'text-yellow-400',
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Key Achievements</h2>
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
              className="glass-card flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent)]/10 overflow-hidden bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)] border-l-2 border-t-2 border-l-[var(--color-accent)] border-t-[var(--color-accent)]"
            >
              <div className="p-6 md:p-8 flex items-start gap-4 md:gap-6 flex-grow">
                <div className={`flex-shrink-0 p-3 md:p-4 rounded-xl bg-[var(--color-bg-tertiary)] ${item.iconColor} shadow-lg`}>
                  <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>

                <div className="flex flex-col mt-0 md:mt-1">
                  <h3 className="font-bold mb-2 md:mb-3 text-xl md:text-2xl text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed md:text-lg">
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
