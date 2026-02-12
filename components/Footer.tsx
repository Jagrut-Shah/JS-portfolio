
import React from 'react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">JS</div>
            <span className="font-bold text-xl tracking-tight">Jagrut Shah</span>
          </div>

          <p className="text-sm text-zinc-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Jagrut Shah. Built with Passion & Persistence.
          </p>

          <div className="flex items-center space-x-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-zinc-400 hover:text-indigo-500 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-[10px] text-zinc-600 dark:text-zinc-500 uppercase tracking-widest">
            India &bull; Data Science &bull; Engineering
        </div>
      </div>
    </footer>
  );
};

export default Footer;
