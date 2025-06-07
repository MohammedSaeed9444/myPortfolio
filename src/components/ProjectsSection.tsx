import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';

interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Sberbank App",
    description: "A simple bank dashboard with user login, transaction tracking, and balance summaries.",
    techStack: ["Next.js", "Shadcn/ui", "Express" ],
    image: "p11.png",
    githubUrl: "https://github.com/MohammedSaeed9444/cberbank",
    liveUrl: "https://dreamy-biscotti-2e5efc.netlify.app"
  },
  {
    id: 2,
    name: "Real Estate Website",
    description: "A responsive site showcasing properties, search/filter features, and contact form integration.",
    techStack: ["Next.js", "Tailwind CSS", "Firebase"],
    image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Real+Estate+Website",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    name: "Bank Website",
    description: "An online cinema booking system with real-time seat selection and user authentication.",
    techStack: ["Python (Flask)", "SQL", "CSS"],
    image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Bank+Website",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { isDayMode } = useTheme();

  const sectionBg = isDayMode ? 'bg-gradient-to-br from-blue-50 via-green-50 to-purple-50' : 'bg-black';
  const textColor = isDayMode ? 'text-gray-900' : 'text-white';
  const cardBg = isDayMode ? 'bg-white/80 border border-gray-200' : 'bg-black/60 border border-white/20';
  const lightEffects = !isDayMode;

  return (
    <section id="projects" className={`py-0 relative overflow-hidden projects-section ${sectionBg}`}>
      {/* Light effects only in night mode */}
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

          {/* Animated secondary light beam */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-full">
            <div 
              className="w-full h-full opacity-20 blur-xl animate-bounce"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 80%, transparent 100%)`,
                animationDuration: '6s',
              }}
            ></div>
          </div>

          {/* Side mysterious light sources */}
          <div className="absolute top-0 left-20 w-32 h-full">
            <div 
              className="w-full h-full opacity-15 blur-2xl animate-pulse"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)`,
                animationDuration: '4s',
              }}
            ></div>
          </div>
          
          <div className="absolute bottom-0 right-16 w-24 h-3/4">
            <div 
              className="w-full h-full opacity-10 blur-xl animate-pulse"
              style={{
                background: `linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.2) 100%)`,
                animationDelay: '1s',
                animationDuration: '5s',
              }}
            ></div>
          </div>

          {/* Animated ambient lighting zones */}
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-white/5 rounded-full blur-3xl opacity-40 animate-pulse floating" style={{ animationDuration: '8s' }}></div>
          <div className="absolute w-64 h-64 bottom-24 left-12 bg-white/5 rounded-full blur-2xl opacity-30 scroll-rotate animate-bounce" style={{ animationDuration: '7s' }}></div>
          
          {/* Animated illuminated particles */}
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

          {/* Animated light beam effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-48 h-48 border border-white/10 rotate-45 -top-24 -right-24 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute w-32 h-32 border border-white/10 rotate-12 -bottom-16 -left-16 animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute w-24 h-24 bg-gradient-to-br from-white/5 to-white/5 rounded-full top-1/3 right-1/5 animate-bounce" style={{ animationDuration: '3s' }}></div>
            
            {/* Animated light rays */}
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="absolute bg-white/3 animate-pulse"
                style={{
                  width: '1px',
                  height: '60%',
                  left: `${40 + i * 5}%`,
                  top: '0%',
                  transform: `rotate(${-15 + i * 6}deg)`,
                  transformOrigin: 'top center',
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${2 + i * 0.3}s`,
                }}
              />
            ))}
          </div>

          {/* Expanding animated light circles */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                className="absolute border border-white/5 rounded-full animate-ping"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: '50%',
                  top: '0%',
                  transform: 'translate(-50%, 0%)',
                  animationDelay: `${i * 1.2}s`,
                  animationDuration: `${5 + i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="section-container">
        <h2 className={`section-title text-reveal drop-shadow-lg animate-pulse ${textColor}`} style={{ animationDuration: '4s' }}>My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`${cardBg} backdrop-blur-md shadow-lg ${isDayMode ? 'shadow-gray-200/50 hover:shadow-gray-300/80' : 'shadow-white/10 hover:shadow-white/20'} rounded-2xl p-6 transition-all duration-300 group project-card scroll-scale hover:scale-105 ${isDayMode ? 'hover:border-gray-300' : 'hover:border-white/40'} animate-pulse`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${4 + index * 0.5}s`
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-lg mb-5 h-48">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className={`absolute inset-0 ${isDayMode ? 'bg-gradient-to-t from-gray-900/40 to-transparent' : 'bg-gradient-to-t from-black/40 to-transparent'} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                {!isDayMode && <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>}
              </div>
              
              <h3 className={`text-xl font-semibold mb-2 text-reveal animate-pulse ${textColor}`} style={{ animationDuration: '3s' }}>{project.name}</h3>
              <p className={`mb-4 text-reveal ${isDayMode ? 'text-gray-600' : 'text-gray-300'}`}>{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech, techIndex) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className={`${isDayMode ? 'border-gray-300 text-gray-700 hover:bg-gray-100' : 'border-white/40 text-white/90 hover:bg-white/10'} animate-on-scroll animate-pulse`}
                    style={{ 
                      animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s`,
                      animationDuration: `${2 + techIndex * 0.2}s`
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild className={`hover-lift ${isDayMode ? 'border-gray-300 text-gray-700 hover:bg-gray-100' : 'border-white/40 text-white/90 hover:bg-white/10'} animate-pulse`} style={{ animationDuration: '5s' }}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 animate-spin" style={{ animationDuration: '8s' }} />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className={`hover-lift ${isDayMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-white hover:bg-gray-200 text-black'} animate-pulse`} style={{ animationDuration: '4s' }}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
