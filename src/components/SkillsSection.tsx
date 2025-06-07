'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Lamp } from 'lucide-react';

interface Skill {
  name: string;
  iconSrc: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', iconSrc: '/py.webp', category: 'Languages' },
  { name: 'JavaScript', iconSrc: '/js.webp', category: 'Languages' },
  { name: 'Swift', iconSrc: '/Swift.png', category: 'Languages' },
  { name: 'Next.js', iconSrc: '/nt.png', category: 'Frameworks' },
  { name: 'SQL', iconSrc: '/sql.png', category: 'Languages' },
  { name: 'React', iconSrc: '/react.png', category: 'Frameworks' },
  { name: 'GitHub', iconSrc: '/github.png', category: 'Frontend' },
  { name: 'Figma', iconSrc: '/fig.webp', category: 'Tools' },
  { name: 'Tailwind', iconSrc: '/ti.webp', category: 'Frontend' },
];

const SkillsSection = () => {
  const { isDayMode } = useTheme();

  const sectionBg = isDayMode ? 'bg-gradient-to-br from-green-50 via-purple-50 to-blue-50' : 'bg-black';
  const textColor = isDayMode ? 'text-gray-900' : 'text-white';
  const cardBg = isDayMode ? 'bg-white/80 border border-gray-200' : 'bg-black/60 border border-white/20';
  const skillCardBg = isDayMode ? 'bg-gray-50 border border-gray-300 hover:bg-gray-100 hover:border-gray-400' : 'bg-black/40 border border-white/30 hover:bg-black/60 hover:border-white/50';
  const lightEffects = !isDayMode;

  return (
    <section id="skills" className={`py-0 relative overflow-hidden skills-section ${sectionBg}`}>
      {lightEffects && (
        <div className="absolute inset-0 -z-10">
          {/* Mysterious Light Effects - No visible source */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-full">
            <div 
              className="w-full h-full opacity-15 blur-3xl animate-pulse"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.1) 70%, transparent 100%)`,
                animationDuration: '4s',
              }}
            ></div>
          </div>

          {/* Side mysterious light sources */}
          <div className="absolute top-0 left-20 w-32 h-full">
            <div 
              className="w-full h-full opacity-15 blur-2xl animate-pulse"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)`,
                animationDuration: '3s',
              }}
            ></div>
          </div>
          
          <div className="absolute bottom-0 right-16 w-24 h-3/4">
            <div 
              className="w-full h-full opacity-10 blur-xl animate-pulse"
              style={{
                background: `linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.2) 100%)`,
                animationDelay: '1s',
                animationDuration: '2s',
              }}
            ></div>
          </div>

          {/* Animated floating particles */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/8 opacity-30 blur-xl animate-ping"
                style={{
                  width: `${60 + i * 12}px`,
                  height: `${60 + i * 12}px`,
                  left: `${5 + i * 12}%`,
                  top: `${10 + i * 10}%`,
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${3 + i * 0.4}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="section-container">
        <h2 className={`section-title text-reveal drop-shadow-lg animate-pulse ${textColor}`} style={{ animationDuration: '4s' }}>Skills & Technologies</h2>

        <div className={`${cardBg} backdrop-blur-md shadow-lg ${isDayMode ? 'shadow-gray-200/50' : 'shadow-white/10'} p-8 rounded-2xl scroll-scale animate-pulse`} style={{ animationDuration: '5s' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`flex flex-col items-center justify-center p-4 rounded-xl ${skillCardBg} transition-all duration-300 ${isDayMode ? 'hover:shadow-md hover:shadow-gray-300/50' : 'hover:shadow-md hover:shadow-white/20'} group skill-item hover-lift animate-pulse`}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  animationDuration: `${3 + index * 0.2}s`
                }}
              >
                <img
                  src={skill.iconSrc}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <span className={`text-sm font-medium text-reveal ${textColor}`}>{skill.name}</span>
                <span className={`text-xs text-reveal ${isDayMode ? 'text-gray-600' : 'text-gray-400'}`}>{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
