import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, FileText, Mail, Github, Linkedin } from 'lucide-react';

const TerminalHero: React.FC = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const commands = [
    { cmd: 'whoami', desc: 'Display system user information' },
    { cmd: 'ls -la', desc: 'List all available modules' },
    { cmd: 'cat skills.json', desc: 'View technical capabilities' },
    { cmd: 'tail projects.log', desc: 'Show recent project activities' },
    { cmd: 'sudo access-vault', desc: 'Access secure project files' },
    { cmd: 'cat resume.pdf', desc: 'Download professional profile' },
  ];

  const executeCommand = (cmd: string) => {
    setCommandHistory(prev => [...prev, `> ${cmd}`]);
    setCurrentCommand('');
    
    // Simulate command execution
    setTimeout(() => {
      switch (cmd) {
        case 'whoami':
          setCommandHistory(prev => [...prev, 
            'vinayak.bansal',
            'Role: Software Development Engineer in Test',
            'Education: B.Tech CSE, Galgotias University (8.9/10)',
            'Specialization: iOS Development & Test Automation',
            'Clearance: Certified Ethical Hacker',
            'Status: Active & Available for Opportunities'
          ]);
          break;
        case 'ls -la':
          setCommandHistory(prev => [...prev, 
            'drwxr-xr-x skills/',
            'drwxr-xr-x projects/',
            'drwxr-xr-x certificates/',
            'drwxr-xr-x experience/',
            '-rw-r--r-- resume.pdf',
            '-rw-r--r-- contact.enc',
            '-rw-r--r-- achievements.log'
          ]);
          break;
        case 'cat resume.pdf':
          setCommandHistory(prev => [...prev, 
            'Downloading resume...',
            'Contact: vb.vinayakbansal@gmail.com | +91 6397053122',
            'LinkedIn: ehvinayakbansal',
            'GitHub: itsvinayakop',
            'Current GPA: 8.9/10'
          ]);
          break;
        default:
          setCommandHistory(prev => [...prev, `Command '${cmd}' executed. Scroll down to access module.`]);
      }
    }, 500);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const welcomeSequence = [
      'System initialized successfully...',
      'Welcome to Vinayak Bansal\'s Development Environment',
      'SDET | iOS Developer | Ethical Hacker',
      'Type a command or click on the suggestions below',
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < welcomeSequence.length) {
        setCommandHistory(prev => [...prev, welcomeSequence[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-lg p-4 sm:p-6 neon-border"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-hacker-green/20">
            <Terminal className="text-hacker-green w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-hacker-green font-mono text-sm sm:text-base">root@vinayak-dev:~</span>
            <div className="flex gap-1 ml-auto">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-hacker-red"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-hacker-yellow"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-hacker-green"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="min-h-[250px] sm:min-h-[300px] font-mono text-xs sm:text-sm">
            <div className="max-h-64 sm:max-h-80 overflow-y-auto">
              {commandHistory.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mb-2 ${line && line.startsWith('>') ? 'text-hacker-cyan' : 'text-gray-300'} break-words`}
                >
                  {line}
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center mt-4">
              <span className="text-hacker-green">$</span>
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && currentCommand.trim()) {
                    executeCommand(currentCommand.trim());
                  }
                }}
                className="bg-transparent border-none outline-none text-hacker-cyan ml-2 flex-1 text-xs sm:text-sm"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="animate-cursor-blink text-hacker-green">█</span>
            </div>
          </div>

          {/* Command Suggestions */}
          <div className="mt-6 pt-4 border-t border-hacker-green/20">
            <div className="text-hacker-cyan text-xs mb-3">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {commands.map((cmd, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    executeCommand(cmd.cmd);
                    if (cmd.cmd === 'cat skills.json') scrollToSection('skills');
                    if (cmd.cmd === 'tail projects.log') scrollToSection('projects');
                    if (cmd.cmd === 'sudo access-vault') scrollToSection('experience');
                  }}
                  className="text-left p-2 rounded border border-hacker-green/30 hover:border-hacker-green hover:bg-hacker-green/10 transition-all"
                >
                  <div className="text-hacker-green text-xs">{cmd.cmd}</div>
                  <div className="text-gray-400 text-xs hidden sm:block">{cmd.desc}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 pt-4 border-t border-hacker-green/20 flex gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://github.com/itsvinayakop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hacker-green hover:text-hacker-cyan transition-colors"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              href="https://www.linkedin.com/in/ehvinayakbansal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hacker-green hover:text-hacker-cyan transition-colors"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="mailto:vb.vinayakbansal@gmail.com"
              className="text-hacker-green hover:text-hacker-cyan transition-colors"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalHero;