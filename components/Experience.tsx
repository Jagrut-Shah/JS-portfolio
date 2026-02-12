
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24 space-y-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Experience</h2>
        <p className="text-zinc-500 dark:text-zinc-400">My journey through companies and internships</p>
      </div>

      <div className="relative max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col items-center justify-center p-12 rounded-3xl glass border border-zinc-200/10 text-center space-y-4">
           <Briefcase size={32} className="text-zinc-300 dark:text-zinc-700" />
           <p className="text-zinc-500 italic">"Experience section will be updated soon."</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
