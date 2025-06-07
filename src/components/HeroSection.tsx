
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70"></div>
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Mobile: Image first, Desktop: Text first */}
          <div className="md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-12 animate-fade-in w-full max-w-md" style={{ animationDelay: '0.3s' }}>
              <div className="w-full aspect-square md:aspect-[4/5] bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
                <img 
                  src='3.png' 
                  alt="Mohammed Saeed"
                  className='object-cover w-full h-full rounded-xl'
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-6 animate-fade-in order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Mohammed Saeed
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Software Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              Building sleek, responsive websites with Python, JavaScript, Swift and modern frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="group"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
