import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { skills } from '../data/portfolio';
import { Code2, Shield, Smartphone, TestTube, Wrench, Database } from 'lucide-react';

const SkillsRadar: React.FC = () => {
  const categoryIcons = {
    frontend: Code2,
    backend: Database,
    mobile: Smartphone,
    testing: TestTube,
    security: Shield,
    tools: Wrench,
  };

  const categoryColors = {
    frontend: '#39ff14',
    backend: '#00ffff',
    mobile: '#b388ff',
    testing: '#ff073a',
    security: '#ffff00',
    tools: '#ff8c00',
  };

  const aggregatedSkills = Object.keys(categoryIcons).map(category => {
    const categorySkills = skills.filter(skill => skill.category === category);
    const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
    return {
      category: category.charAt(0).toUpperCase() + category.slice(1),
      level: Math.round(avgLevel),
      fullMark: 100,
      skills: categorySkills.map(s => s.name).join(', ')
    };
  });

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-hacker-green mb-4 animate-pulse-neon">
            {'</'} TECHNICAL_CAPABILITIES {'>'}
          </h2>
          <p className="text-hacker-cyan font-mono text-sm sm:text-base">
            Expertise mapping across development domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-4 sm:p-6 neon-border"
          >
            <div className="h-64 sm:h-80 lg:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={aggregatedSkills}>
                  <PolarGrid 
                    stroke="#39ff14" 
                    strokeOpacity={0.3}
                  />
                  <PolarAngleAxis 
                    dataKey="category" 
                    tick={{ fill: '#00ffff', fontSize: 10, fontFamily: 'JetBrains Mono' }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fill: '#39ff14', fontSize: 8 }}
                    tickCount={6}
                  />
                  <Radar
                    dataKey="level"
                    stroke="#39ff14"
                    fill="#39ff14"
                    fillOpacity={0.2}
                    strokeWidth={2}
                    dot={{ fill: '#39ff14', strokeWidth: 2, r: 3 }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Skills Breakdown */}
          <div className="space-y-4 sm:space-y-6">
            {Object.entries(categoryIcons).map(([category, IconComponent], index) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-lg p-3 sm:p-4 hover:neon-border transition-all group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <IconComponent 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-hacker-green group-hover:animate-pulse-neon" 
                    />
                    <h3 className="text-base sm:text-lg font-mono text-hacker-cyan capitalize">
                      {category}
                    </h3>
                    <div className="ml-auto text-hacker-green font-mono text-sm sm:text-base">
                      {Math.round(avgLevel)}%
                    </div>
                  </div>
                  
                  <div className="w-full bg-hacker-dark rounded-full h-2 mb-3">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: categoryColors[category as keyof typeof categoryColors] }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${avgLevel}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                        className="text-xs px-2 py-1 rounded border border-hacker-green/30 text-gray-300 font-mono hover:border-hacker-green hover:text-hacker-green transition-all"
                      >
                        {skill.name} ({skill.level}%)
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* System Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-lg p-4 sm:p-6 neon-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-green font-bold">1+</div>
              <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-cyan font-bold">10+</div>
              <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-purple font-bold">20+</div>
              <div className="text-xs sm:text-sm text-gray-400">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-mono text-hacker-yellow font-bold">99.9%</div>
              <div className="text-xs sm:text-sm text-gray-400">Uptime Reliability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsRadar;