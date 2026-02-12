
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profile from "../profile-Image.png";




const Hero: React.FC = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-10 min-h-[70vh]">
      <div className="flex-1 space-y-8 text-center lg:text-left">
        <div className="space-y-4">
          <h2 className="text-indigo-500 font-semibold tracking-wide uppercase text-sm">Welcome to my universe</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">Jagrut Shah</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-zinc-500 dark:text-zinc-400">
            Data Science Student
          </p>
          <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-zinc-500 dark:text-zinc-500 leading-relaxed">
            I am a growth-oriented, disciplined, and consistent learner passionate about leveraging data to solve complex real-world problems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-indigo-500/25 group"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-white dark:hover:text-blue-600 rounded-full font-semibold transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="relative flex-1 flex justify-center lg:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-3xl rotate-6 blur-2xl opacity-20 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-3xl -rotate-6 opacity-10" />
            
            <div className="relative w-full h-full rounded-3xl bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 overflow-hidden flex items-center justify-center shadow-2xl">
              <img 
                 src={profile} 

                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
