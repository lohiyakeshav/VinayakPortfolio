import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import { 
  Lock, 
  Unlock, 
  ExternalLink, 
  Github, 
  Eye, 
  EyeOff, 
  FileCode, 
  Database,
  Terminal,
  Shield
} from 'lucide-react';

const ProjectVault: React.FC = () => {
  const [accessLevel, setAccessLevel] = useState(1);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'public': return 'text-hacker-green';
      case 'classified': return 'text-hacker-red';
      case 'archived': return 'text-gray-500';
      default: return 'text-hacker-cyan';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'public': return Unlock;
      case 'classified': return Lock;
      case 'archived': return Database;
      default: return FileCode;
    }
  };

  const canAccess = (project: typeof projects[0]) => {
    return accessLevel >= project.accessLevel;
  };

  const upgradeAccess = () => {
    if (accessLevel < 5) {
      setAccessLevel(accessLevel + 1);
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-hacker-green mb-4 animate-pulse-neon">
            {'</'} PROJECT_VAULT {'>'}
          </h2>
          <p className="text-hacker-cyan font-mono mb-4 text-sm sm:text-base">
            Secure repository of development artifacts
          </p>
          
          {/* Access Level Display */}
          <div className="inline-flex items-center gap-2 glass px-3 sm:px-4 py-2 rounded-full">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-hacker-green" />
            <span className="text-hacker-green font-mono text-xs sm:text-sm">
              CLEARANCE LEVEL: {accessLevel}/5
            </span>
            {accessLevel < 5 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={upgradeAccess}
                className="ml-2 text-xs px-2 py-1 border border-hacker-yellow text-hacker-yellow hover:bg-hacker-yellow hover:text-black transition-all rounded"
              >
                UPGRADE
              </motion.button>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => {
            const StatusIcon = getStatusIcon(project.status);
            const accessible = canAccess(project);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass rounded-lg p-4 sm:p-6 transition-all cursor-pointer ${
                  accessible 
                    ? 'hover:neon-border hover:scale-105' 
                    : 'opacity-50 hover:opacity-70'
                }`}
                onClick={() => accessible && setSelectedProject(
                  selectedProject === project.id ? null : project.id
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-hacker-cyan" />
                    <h3 className="text-base sm:text-lg font-mono text-hacker-green">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusIcon className={`w-3 h-3 sm:w-4 sm:h-4 ${getStatusColor(project.status)}`} />
                    <span className={`text-xs font-mono ${getStatusColor(project.status)}`}>
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                {!accessible ? (
                  <div className="text-center py-6 sm:py-8">
                    <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-hacker-red mx-auto mb-2" />
                    <p className="text-hacker-red font-mono text-sm">
                      ACCESS DENIED
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Required clearance: Level {project.accessLevel}
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-300 mb-4 font-mono text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          className="text-xs px-2 py-1 rounded border border-hacker-green/30 text-hacker-cyan font-mono"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <AnimatePresence>
                      {selectedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-hacker-green/20 pt-4 mt-4"
                        >
                          <div className="space-y-2 mb-4">
                            <div className="font-mono text-xs">
                              <span className="text-hacker-cyan">Project ID:</span>{' '}
                              <span className="text-hacker-green">{project.id}</span>
                            </div>
                            <div className="font-mono text-xs">
                              <span className="text-hacker-cyan">Access Level:</span>{' '}
                              <span className="text-hacker-green">{project.accessLevel}</span>
                            </div>
                            <div className="font-mono text-xs">
                              <span className="text-hacker-cyan">Status:</span>{' '}
                              <span className={getStatusColor(project.status)}>
                                {project.status.toUpperCase()}
                              </span>
                            </div>
                          </div>

                          {project.status === 'public' && (
                            <div className="flex flex-col sm:flex-row gap-2">
                              {project.github && (
                                <motion.a
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center gap-2 px-3 py-2 border border-hacker-green text-hacker-green hover:bg-hacker-green hover:text-black transition-all rounded text-sm font-mono"
                                >
                                  <Github className="w-4 h-4" />
                                  SOURCE
                                </motion.a>
                              )}
                              {project.live && (
                                <motion.a
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center gap-2 px-3 py-2 border border-hacker-cyan text-hacker-cyan hover:bg-hacker-cyan hover:text-black transition-all rounded text-sm font-mono"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  LIVE
                                </motion.a>
                              )}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* System Log */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-lg p-4 sm:p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-hacker-green" />
            <span className="text-hacker-green font-mono text-sm">SYSTEM.LOG</span>
          </div>
          <div className="space-y-1 text-xs font-mono">
            <div className="text-gray-500">
              [2024-01-15 14:30:22] USER vinayak.bansal logged in
            </div>
            <div className="text-gray-500">
              [2024-01-15 14:30:23] ACCESS_LEVEL set to {accessLevel}
            </div>
            <div className="text-hacker-green">
              [2024-01-15 14:30:24] PROJECT_VAULT accessed successfully
            </div>
            <div className="text-hacker-cyan">
              [2024-01-15 14:30:25] Displaying {projects.filter(p => canAccess(p)).length}/{projects.length} projects
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectVault;