import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BootLoaderProps {
  onComplete: () => void;
}

const BootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [text, setText] = useState('');

  const bootSequence = [
    'SYSTEM BOOT INITIATED...',
    'LOADING KERNEL MODULES...',
    'INITIALIZING SECURITY PROTOCOLS...',
    'MOUNTING FILE SYSTEMS...',
    'STARTING NETWORK SERVICES...',
    'LOADING USER PROFILE: VINAYAK.BANSAL',
    'DECRYPTING PORTFOLIO DATA...',
    'AUTHENTICATION SUCCESSFUL',
    'WELCOME TO THE HACKER\'S DEN'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (stage < bootSequence.length) {
        setText(bootSequence[stage]);
        setStage(stage + 1);
      } else {
        setTimeout(onComplete, 1000);
      }
    }, stage === 0 ? 500 : 800);

    return () => clearTimeout(timer);
  }, [stage, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-hacker-black z-50 flex items-center justify-center matrix-bg px-4"
    >
      <div className="text-center w-full max-w-2xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="text-hacker-green text-4xl sm:text-6xl font-mono font-bold animate-pulse-neon">
            [VB]
          </div>
          <div className="text-hacker-cyan text-xs sm:text-sm mt-2">HACKER'S DEN v2.0.1</div>
        </motion.div>

        <div className="h-48 sm:h-64 flex flex-col justify-center">
          {bootSequence.slice(0, stage).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-left font-mono text-xs sm:text-sm mb-2 ${
                index === stage - 1 ? 'text-hacker-green' : 'text-gray-500'
              } break-words`}
            >
              <span className="text-hacker-cyan">root@hackerden:~$</span> {line}
              {index === stage - 1 && (
                <span className="animate-cursor-blink text-hacker-green">_</span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8">
          <motion.div
            className="w-full max-w-64 h-1 bg-hacker-dark rounded mx-auto overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-hacker-green to-hacker-cyan"
              initial={{ width: '0%' }}
              animate={{ width: `${(stage / bootSequence.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <div className="text-hacker-green text-xs mt-2 font-mono">
            {Math.round((stage / bootSequence.length) * 100)}% COMPLETE
          </div>
        </div>
      </div>

      {/* Matrix rain effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-hacker-green text-xs font-mono opacity-20"
            style={{ left: `${i * 6.67}%`, top: '-10%' }}
            animate={{
              y: ['0vh', '110vh'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'linear',
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BootLoader;