
import React from 'react';
import { Rocket } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24 space-y-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Featured work and side projects</p>
      </div>

      <div className="flex flex-col items-center justify-center p-20 rounded-3xl glass border border-dashed border-zinc-300 dark:border-zinc-700 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
          <Rocket size={40} className="animate-bounce" />
        </div>
        <div className="max-w-sm space-y-2">
          <h3 className="text-2xl font-bold">Projects Coming Soon</h3>
          <p className="text-zinc-500 dark:text-zinc-500">
            Currently working on upgrading my skills and building something amazing. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
