import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data/portfolio';
import { 
  Building, 
  Calendar, 
  CheckCircle, 
  Lock, 
  Terminal,
  Users,
  Trophy,
  Zap
} from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  const [accessingCompany, setAccessingCompany] = useState<string | null>(null);
  const [accessedCompanies, setAccessedCompanies] = useState<Set<string>>(new Set());

  const infiltrateCompany = (companyId: string) => {
    setAccessingCompany(companyId);
    
    setTimeout(() => {
      setAccessingCompany(null);
      setAccessedCompanies(prev => new Set([...prev, companyId]));
    }, 3000);
  };

  const isAccessed = (companyId: string) => accessedCompanies.has(companyId);
  const isAccessing = (companyId: string) => accessingCompany === companyId;

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-hacker-green mb-4 animate-pulse-neon">
            {'</'} ACCESS_LOG {'>'}
          </h2>
          <p className="text-hacker-cyan font-mono text-sm sm:text-base">
            Professional infiltration history and system access records
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-hacker-green via-hacker-cyan to-hacker-purple"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 ml-12 sm:ml-16"
            >
              {/* Timeline Node */}
              <motion.div
                className={`absolute -left-8 sm:-left-10 top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 ${
                  isAccessed(exp.id) 
                    ? 'bg-hacker-green border-hacker-green' 
                    : isAccessing(exp.id)
                    ? 'bg-hacker-cyan border-hacker-cyan animate-pulse'
                    : 'bg-hacker-black border-gray-500'
                }`}
                animate={{
                  scale: isAccessing(exp.id) ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.5,
                  repeat: isAccessing(exp.id) ? Infinity : 0,
                }}
              />

              <div className={`glass rounded-lg p-4 sm:p-6 transition-all ${
                isAccessed(exp.id) ? 'neon-border' : 'hover:border-hacker-green/50'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-mono text-hacker-green mb-1 break-words">
                      {exp.company}
                    </h3>
                    <p className="text-hacker-cyan font-mono mb-2 text-sm sm:text-base">
                      {exp.role}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      {exp.duration}
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
                        <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                        {exp.location}
                      </div>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => !isAccessed(exp.id) && !isAccessing(exp.id) && infiltrateCompany(exp.id)}
                    disabled={isAccessed(exp.id) || isAccessing(exp.id)}
                    className={`px-3 sm:px-4 py-2 rounded font-mono text-xs sm:text-sm border transition-all w-full sm:w-auto ${
                      isAccessed(exp.id)
                        ? 'border-hacker-green bg-hacker-green text-black'
                        : isAccessing(exp.id)
                        ? 'border-hacker-cyan bg-hacker-cyan text-black'
                        : 'border-hacker-red text-hacker-red hover:bg-hacker-red hover:text-black'
                    }`}
                  >
                    {isAccessed(exp.id) 
                      ? 'ACCESS GRANTED' 
                      : isAccessing(exp.id) 
                      ? 'INFILTRATING...' 
                      : 'GAIN ACCESS'}
                  </motion.button>
                </div>

                <AnimatePresence>
                  {isAccessing(exp.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 p-3 sm:p-4 bg-hacker-cyan/10 border border-hacker-cyan/30 rounded"
                    >
                      <div className="space-y-2 text-xs sm:text-sm font-mono">
                        <div className="text-hacker-cyan">
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                          >
                            → Scanning network infrastructure...
                          </motion.span>
                        </div>
                        <div className="text-hacker-cyan">
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.5 }}
                          >
                            → Bypassing security protocols...
                          </motion.span>
                        </div>
                        <div className="text-hacker-cyan">
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: 1 }}
                          >
                            → Extracting employment records...
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isAccessed(exp.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      <div className="border-t border-hacker-green/20 pt-4">
                        <h4 className="text-hacker-green font-mono mb-3 flex items-center gap-2 text-sm sm:text-base">
                          <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                          MISSION OBJECTIVES
                        </h4>
                        <ul className="space-y-2">
                          {exp.description.map((desc, descIndex) => (
                            <motion.li
                              key={descIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: descIndex * 0.1 }}
                              className="text-gray-300 text-xs sm:text-sm flex items-start gap-2"
                            >
                              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-hacker-green mt-0.5 flex-shrink-0" />
                              <span className="break-words">{desc}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-hacker-cyan font-mono mb-3 flex items-center gap-2 text-sm sm:text-base">
                          <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                          TECH ARSENAL
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {exp.tech.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.05 }}
                              className="text-xs px-2 py-1 rounded border border-hacker-green/30 text-hacker-green font-mono"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isAccessed(exp.id) && !isAccessing(exp.id) && (
                  <div className="text-center py-6 sm:py-8">
                    <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-hacker-red mx-auto mb-2" />
                    <p className="text-hacker-red font-mono text-sm">
                      RESTRICTED ACCESS
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Initiate infiltration protocol to view details
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-lg p-4 sm:p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Building className="w-4 h-4 sm:w-5 sm:h-5 text-hacker-green" />
            <h3 className="text-hacker-green font-mono text-sm sm:text-base">INFILTRATION STATUS</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-green font-bold">
                {accessedCompanies.size}/{experience.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Systems Accessed</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-cyan font-bold">
                {Math.round((accessedCompanies.size / experience.length) * 100)}%
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Completion Rate</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-purple font-bold">
                1+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-yellow font-bold">
                {accessingCompany ? 'ACTIVE' : 'IDLE'}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Current Status</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;