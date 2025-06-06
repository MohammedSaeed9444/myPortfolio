'use client';

import React from 'react';


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
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="glass p-8 rounded-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/40 hover:bg-white/60 transition-all duration-300 hover:shadow-md group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={skill.iconSrc}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="mb-3"
                />
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
