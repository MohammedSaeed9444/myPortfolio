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
    name: "CRM Ticketing",
    description: "full-stack ticket management system for the CRM team at BALY, enabling agents to create, view, and manage trip-related tickets", 
    techStack: ["Next.js", " Tailwind", "PostgreSQL", "RESTful APIs"],
    image: "CRM.png",
    githubUrl: "https://github.com/MohammedSaeed9444/Zbaly",
    liveUrl: "https://balytickets.netlify.app/"
  },
  {
    
    id: 2,
  name: "Sama Alain",
    description: "Landing Page for Printing Solutions Company, showcasing services, portfolio, and contact information with a modern design.",
    techStack: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    image: "Sama.png",
    githubUrl: "",
    liveUrl: "https://samaalain.netlify.app/"
  },
  {
    id: 3,
    name: "Cinema Green",
    description: "A site for viewing movies and seriesز",
    techStack: ["React", "CSS"],
    image: "cin1.png",
    githubUrl: "#",
    liveUrl: "https://cinemagreen.netlify.app/"
  }
  {

    id: 4,
    name: "Sberbank App",
    description: "A simple bank dashboard with user login, transaction tracking, and balance summaries.",
    techStack: ["Next.js", "Shadcn/ui", "Express" ],
    image: "p11.png",
    githubUrl: "https://github.com/MohammedSaeed9444/cberbank",
    liveUrl: "https://dreamy-biscotti-2e5efc.netlify.app"
  },
  {
    id: 5,
    name: "Aziz",
    description: "Application to search for missing persons",
    techStack: ["Next.js", "Tailwind CSS", "Firebase"],
    image: "aziz.png",
    githubUrl: "https://github.com/MohammedSaeed9444/aziz",
    liveUrl: "https://preview--aziz.lovable.app"
  },
  {
    id: 6,
    name: "3AL TAREEQ",
    description: "An application for transporting passengers between governorates.",
    techStack: ["Python (Flask)", "SQL", "CSS"],
    image: "3la.png",
    githubUrl: "#",
    liveUrl: "https://imaginative-boba-5cf18f.netlify.app"
  },
  
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 relative bg-black">
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 -z-10">
        {/* Single subtle gradient for all screen sizes */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-full">
          <div 
            className="w-full h-full opacity-10 md:opacity-15 blur-2xl md:blur-3xl"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.1) 70%, transparent 100%)`,
            }}
          ></div>
        </div>

        {/* Single ambient light for mobile */}
        <div className="absolute w-64 h-64 bottom-24 left-12 bg-white/5 rounded-full blur-xl opacity-20 md:opacity-30 hidden md:block"></div>
      </div>

      <div className="section-container px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-white">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-xl p-5 transition-all duration-300 group project-card hover:border-white/40"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-44 md:h-48">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="border-white/40 text-white/90 hover:bg-white/10 text-xs md:text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild className="bg-black/10 border-white/40 text-white/90 hover:bg-white/90 hover:text-black">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="bg-white/90 text-black border-white/40 text-black hover:bg-yellow-200 hover:text-black">
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
