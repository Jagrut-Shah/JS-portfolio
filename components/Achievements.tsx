
import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="scroll-mt-24 space-y-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Achievements & Certifications</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Recognition and validated skills</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 rounded-2xl glass border border-zinc-200/10 flex flex-col items-center justify-center text-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-not-allowed">
            <Trophy size={32} className="text-yellow-500/40 mb-4" />
            <h4 className="font-bold text-zinc-400">Updating Soon...</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
