import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send an email or save to a database
    alert('Thank you for your message! This is a placeholder contact form.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                I'm currently looking for new opportunities, internships, and freelance projects. My inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:vinaykhatana999@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors group">
                <div className="p-3 bg-[var(--color-bg-secondary)] rounded-xl group-hover:bg-[var(--color-accent)]/10 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-text-primary)]">Email</p>
                  <p className="opacity-80">vinaykhatana999@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-[var(--color-text-secondary)] group">
                <div className="p-3 bg-[var(--color-bg-secondary)] rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-text-primary)]">Location</p>
                  <p className="opacity-80">Punjab, India (LPU)</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[var(--color-border)]">
              <p className="font-medium mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a href="https://github.com/vinaykhatana" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[#24292e] hover:text-white transition-all shadow-lg hover:-translate-y-1">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[#0077b5] hover:text-white transition-all shadow-lg hover:-translate-y-1">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-secondary)]">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-secondary)]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-secondary)]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 flex items-center justify-center gap-2 text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] rounded-xl font-semibold transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
              >
                Send Message
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
