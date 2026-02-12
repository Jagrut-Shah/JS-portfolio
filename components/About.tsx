
import React from 'react';
import { BookOpen, Target, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 space-y-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Getting to know my journey and aspirations</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl glass border border-zinc-200/10 hover:border-indigo-500/30 transition-all space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
            <BookOpen size={24} />
          </div>
          <h3 className="text-xl font-bold">Education</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Currently pursuing BTech + IITM BS in Data Science. Balancing technical rigor with real-world application.
          </p>
        </div>

        <div className="p-8 rounded-3xl glass border border-zinc-200/10 hover:border-indigo-500/30 transition-all space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
            <Code size={24} />
          </div>
          <h3 className="text-xl font-bold">Focus Area</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Strong focus on programming, problem solving, and building technical foundations that scale.
          </p>
        </div>

        <div className="p-8 rounded-3xl glass border border-zinc-200/10 hover:border-indigo-500/30 transition-all space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
            <Target size={24} />
          </div>
          <h3 className="text-xl font-bold">Career Goal</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            To build robust technical foundations and secure high-quality internships in the tech industry.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
         <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
           "I believe that consistency is the key to mastering any skill. My journey in Data Science is driven by curiosity and a desire to turn raw data into meaningful insights. Whether it's optimization in C++ or data visualization in Python, I strive for excellence in every line of code I write."
         </p>
      </div>
    </section>
  );
};

export default About;
