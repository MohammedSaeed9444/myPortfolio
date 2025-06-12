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
  { name: 'GitHub', iconSrc: '/github.png', category: 'Tools' },
  { name: 'Figma', iconSrc: '/fig.webp', category: 'Tools' },
  { name: 'Tailwind', iconSrc: '/ti.webp', category: 'library' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative bg-black">
      {/* Simplified background */}
      <div className="absolute inset-0 -z-10">
        {/* Single subtle gradient */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-full">
          <div 
            className="w-full h-full opacity-10 md:opacity-15 blur-xl md:blur-2xl"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 40%, transparent 100%)`,
            }}
          ></div>
        </div>
      </div>

      <div className="section-container px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Skills & Technologies
        </h2>

        <div className="bg-black/70 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg bg-black/50 border border-white/20 hover:bg-black/80 hover:border-white/50 transition-all duration-300 skill-item"
              >
                <img
                  src={skill.iconSrc}
                  alt={skill.name}
                  width={36}
                  height={36}
                  className="mb-2 md:mb-3"
                />
                <span className="text-sm font-medium text-white">{skill.name}</span>
                <span className="text-xs text-gray-400">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
