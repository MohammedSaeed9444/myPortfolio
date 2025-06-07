
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
    image: "https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Real+Estate+Website",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    name: "Bank Website",
    description: "An online cinema booking system with real-time seat selection and user authentication.",
    techStack: ["Python (Flask)", "SQL", "CSS"],
    image: "https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Bank+Website",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden projects-section">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-50 to-indigo-50 opacity-70 parallax"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-blue-200 rounded-full blur-3xl opacity-20 floating"></div>
        <div className="absolute w-64 h-64 bottom-24 left-12 bg-purple-200 rounded-full blur-2xl opacity-15 scroll-rotate"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-reveal">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-card transition-all duration-300 group project-card scroll-scale"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-reveal">{project.name}</h3>
              <p className="text-muted-foreground mb-4 text-reveal">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech, techIndex) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="animate-on-scroll"
                    style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild className="hover-lift">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="hover-lift">
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
