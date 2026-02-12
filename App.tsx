
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-slate-300 text-zinc-900'}`}>
      {/* Decorative Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className={`absolute top-0 -left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] transition-opacity duration-1000 ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-100/50'}`} />
        <div className={`absolute bottom-0 -right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] transition-opacity duration-1000 ${darkMode ? 'bg-violet-900/20' : 'bg-violet-100/50'}`} />
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
