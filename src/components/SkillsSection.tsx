
import React from 'react';
import { 
  Python, Javascript, Code, Database, 
  Figma, Github, Globe
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', icon: Python, category: 'Languages' },
  { name: 'JavaScript', icon: Javascript, category: 'Languages' },
  { name: 'Node.js', icon: Javascript, category: 'Frameworks' },
  { name: 'Next.js', icon: Javascript, category: 'Frameworks' },
  { name: 'SQL', icon: Database, category: 'Languages' },
  { name: 'HTML', icon: Code, category: 'Frontend' },
  { name: 'CSS', icon: Figma, category: 'Frontend' },
  { name: 'Tailwind', icon: Code, category: 'Frontend' },
  { name: 'React', icon: Code, category: 'Frontend' },
  { name: 'Git', icon: Github, category: 'Tools' },
  { name: 'GitHub', icon: Github, category: 'Tools' },
  { name: 'VS Code', icon: Code, category: 'Tools' },
  { name: 'REST APIs', icon: Globe, category: 'Other' }
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
                <div className="mb-3 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <skill.icon size={24} />
                </div>
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
