
'use client';

import React from 'react';
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
  return (
    <section id="skills" className="py-24 relative overflow-hidden skills-section bg-black">
      <div className="absolute inset-0 -z-10">
        {/* Animated Lamppost at the top */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            {/* Lamppost pole */}
            <div className="w-2 h-20 bg-gradient-to-b from-gray-400 to-gray-600 mx-auto"></div>
            {/* Animated Lamp fixture */}
            <div className="relative -mt-2">
              <Lamp className="w-12 h-12 text-white drop-shadow-lg animate-pulse mx-auto" />
              <div className="absolute -inset-6 bg-white/20 rounded-full blur-xl animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -inset-8 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s' }}></div>
            </div>
          </div>
        </div>

        {/* Animated main light beam */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 h-full">
          <div 
            className="w-full h-full opacity-15 blur-3xl animate-pulse"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.1) 70%, transparent 100%)`,
              animationDuration: '4s',
            }}
          ></div>
        </div>

        {/* Animated side lampposts */}
        <div className="absolute top-10 left-20">
          <div className="relative">
            <Lamp className="w-10 h-10 text-white/80 animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute -inset-4 bg-white/15 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }}></div>
          </div>
        </div>
        
        <div className="absolute bottom-20 right-16">
          <div className="relative">
            <Lamp className="w-8 h-8 text-white/70 animate-pulse" style={{ animationDelay: '1s', animationDuration: '2s' }} />
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-lg animate-ping" style={{ animationDuration: '5s' }}></div>
          </div>
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

      <div className="section-container">
        <h2 className="section-title text-reveal text-white drop-shadow-lg animate-pulse" style={{ animationDuration: '4s' }}>Skills & Technologies</h2>

        <div className="bg-black/60 backdrop-blur-md border border-white/20 shadow-lg shadow-white/10 p-8 rounded-2xl scroll-scale animate-pulse" style={{ animationDuration: '5s' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-black/40 border border-white/30 hover:bg-black/60 hover:border-white/50 transition-all duration-300 hover:shadow-md hover:shadow-white/20 group skill-item hover-lift animate-pulse"
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
                <span className="text-sm font-medium text-reveal text-white">{skill.name}</span>
                <span className="text-xs text-gray-400 text-reveal">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
