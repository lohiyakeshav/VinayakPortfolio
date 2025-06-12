import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BootLoader from './components/BootLoader';
import MatrixRain from './components/MatrixRain';
import TerminalHero from './components/TerminalHero';
import SkillsRadar from './components/SkillsRadar';
import ProjectVault from './components/ProjectVault';
import CertAuthority from './components/CertAuthority';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactForm from './components/ContactForm';

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial boot sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleBootComplete = () => {
    setIsBooting(false);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-hacker-black flex items-center justify-center">
        <div className="text-hacker-green font-mono">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hacker-black text-white selection overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        {isBooting ? (
          <BootLoader onComplete={handleBootComplete} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen"
          >
            {/* Matrix Rain Background - behind everything */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <MatrixRain />
            </div>
            
            {/* Main Content - above matrix rain with transparent backgrounds */}
            <div className="relative z-10">
              <TerminalHero />
              <SkillsRadar />
              <ProjectVault />
              <CertAuthority />
              <ExperienceTimeline />
              <ContactForm />
              
              {/* Footer */}
              <footer className="py-8 px-4 border-t border-hacker-green/20 relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                  <div className="text-hacker-green font-mono text-sm mb-2">
                    root@hackerden:~$ exit
                  </div>
                  <div className="text-gray-500 text-xs font-mono">
                    © 2025 Vinayak Bansal | Crafted with React + TypeScript | 
                    Secured with 256-bit encryption
                  </div>
                  <div className="text-hacker-cyan text-xs font-mono mt-2">
                    "In code we trust, in bugs we debug" - Anonymous Hacker
                  </div>
                </div>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;