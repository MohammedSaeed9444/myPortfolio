
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
    <section id="skills" className="py-24 relative overflow-hidden skills-section">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70 parallax"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-blue-200 rounded-full blur-3xl opacity-20 floating"></div>
        <div className="absolute w-80 h-80 bottom-12 left-24 bg-indigo-200 rounded-full blur-2xl opacity-15 scroll-rotate"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-reveal">Skills & Technologies</h2>

        <div className="glass p-8 rounded-2xl scroll-scale">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/40 hover:bg-white/60 transition-all duration-300 hover:shadow-md group skill-item hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={skill.iconSrc}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <span className="text-sm font-medium text-reveal">{skill.name}</span>
                <span className="text-xs text-muted-foreground text-reveal">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
