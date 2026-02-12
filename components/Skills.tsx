
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const programmingSkills = SKILLS.filter(s => s.category === 'Programming');
  const toolSkills = SKILLS.filter(s => s.category === 'Tools');

  return (
    <section id="skills" className="scroll-mt-24 space-y-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
        <p className="text-zinc-500 dark:text-zinc-400">My toolbox for building digital solutions</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-indigo-500 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-indigo-500"></span>
            Programming
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {programmingSkills.map(skill => (
              <div key={skill.name} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-white dark:hover:text-blue-600 transition-colors group">
                <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-indigo-500 dark:group-hover:bg-blue-600 transition-colors" />
                <span className="font-medium dark:text-white dark:group-hover:text-blue-600 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-violet-500 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-violet-500"></span>
            Tools & Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {toolSkills.map(skill => (
              <div key={skill.name} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-white dark:hover:text-blue-600 transition-colors group">
                <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-violet-500 dark:group-hover:bg-blue-600 transition-colors" />
                <span className="font-medium dark:text-white dark:group-hover:text-blue-600 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
