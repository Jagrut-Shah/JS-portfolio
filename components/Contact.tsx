
import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-12 pb-20">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Have a question or want to work together?</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:jagrutshah2508@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-white transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-blue-500 dark:group-hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 dark:text-blue-600 dark:group-hover:text-black-700 uppercase tracking-widest font-bold">Email</p>
                <p className="font-medium dark:text-black group-hover:text-green-500 dark:group-hover:text-blue-600 transition-colors">Jagrutshah2508@gmail.com</p>
              </div>
            </a>
            
            <div className="flex gap-4">
              {SOCIALS.map(social => (
                <a 
                  key={social.label} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-white dark:hover:text-green-600 transition-colors group"
                >
                  <span className="dark:text-white dark:group-hover:text-green-600 transition-colors">{social.icon}</span>
                  <span className="font-medium dark:text-white dark:group-hover:text-green-600 transition-colors">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border border-zinc-200/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Dhara Shah"
              />
            </div>
            <div className="space-y-">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Dhara@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can I help you?"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading || submitted}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                submitted
                ? 'bg-green-500 text-white cursor-default'
                : 'bg-indigo-600 hover:bg-white text-white hover:text-black shadow-lg hover:shadow-indigo-500/25'
              }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : submitted ? (
                <>
                  <CheckCircle2 size={20} />
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
