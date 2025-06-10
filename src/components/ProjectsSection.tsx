
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Lamp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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

  return (
    <section id="projects" className="py-24 relative overflow-hidden projects-section bg-black">
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

        {/* Animated main light beam from lamppost */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 h-full">
          <div 
            className="w-full h-full opacity-15 blur-3xl animate-pulse"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.1) 70%, transparent 100%)`,
              animationDuration: '4s',
            }}
          ></div>
        </div>

        {/* Animated secondary light beam */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-full">
          <div 
            className="w-full h-full opacity-20 blur-xl animate-bounce"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 80%, transparent 100%)`,
              animationDuration: '6s',
            }}
          ></div>
        </div>

        {/* Animated side lampposts for additional lighting */}
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
                top: '15%',
                transform: `rotate(${-15 + i * 6}deg)`,
                transformOrigin: 'top center',
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${2 + i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Expanding animated light circles */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className="absolute border border-white/5 rounded-full animate-ping"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${5 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-reveal text-white drop-shadow-lg animate-pulse" style={{ animationDuration: '4s' }}>My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-black/60 backdrop-blur-md border border-white/20 shadow-lg shadow-white/10 rounded-2xl p-6 transition-all duration-300 group project-card scroll-scale hover:shadow-2xl hover:shadow-white/20 hover:scale-105 hover:border-white/40 animate-pulse"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                {/* Animated overlay effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-reveal text-white animate-pulse" style={{ animationDuration: '3s' }}>{project.name}</h3>
              <p className="text-gray-300 mb-4 text-reveal">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech, techIndex) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="border-white/40 text-white/90 hover:bg-white/10 animate-on-scroll animate-pulse"
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
                <Button variant="outline" size="sm" asChild className="hover-lift border-white/40 text-white/90 hover:bg-white/10 animate-pulse" style={{ animationDuration: '5s' }}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 animate-spin" style={{ animationDuration: '8s' }} />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="hover-lift bg-white hover:bg-gray-200 text-black animate-pulse" style={{ animationDuration: '4s' }}>
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
