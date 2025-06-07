
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
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
    image: "https://placehold.co/600x400/10B981/FFFFFF/png?text=Real+Estate+Website",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    name: "Bank Website",
    description: "An online cinema booking system with real-time seat selection and user authentication.",
    techStack: ["Python (Flask)", "SQL", "CSS"],
    image: "https://placehold.co/600x400/10B981/FFFFFF/png?text=Bank+Website",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden projects-section">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm parallax"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-green-200/30 rounded-full blur-3xl opacity-40 floating"></div>
        <div className="absolute w-64 h-64 bottom-24 left-12 bg-emerald-200/30 rounded-full blur-2xl opacity-30 scroll-rotate"></div>
        
        {/* Green bubbles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20 opacity-30 blur-xl animate-pulse"
              style={{
                width: `${80 + i * 15}px`,
                height: `${80 + i * 15}px`,
                left: `${5 + i * 15}%`,
                top: `${10 + i * 12}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Green geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-48 h-48 border border-green-500/20 rotate-45 -top-24 -right-24 animate-spin" style={{ animationDuration: '25s' }}></div>
          <div className="absolute w-32 h-32 border border-emerald-500/20 rotate-12 -bottom-16 -left-16 animate-ping" style={{ animationDuration: '5s' }}></div>
          <div className="absolute w-24 h-24 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full top-1/3 right-1/5 animate-bounce" style={{ animationDuration: '4s' }}></div>
        </div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-reveal text-slate-800">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white/80 backdrop-blur-md border border-green-200/50 shadow-lg rounded-2xl p-6 transition-all duration-300 group project-card scroll-scale hover:shadow-2xl hover:scale-105 hover:border-green-300/60"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-lg mb-5 h-48">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-reveal text-slate-800">{project.name}</h3>
              <p className="text-slate-600 mb-4 text-reveal">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech, techIndex) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="border-green-300/60 text-green-700 hover:bg-green-50 animate-on-scroll"
                    style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild className="hover-lift border-green-300 text-green-700 hover:bg-green-50">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="hover-lift bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
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
