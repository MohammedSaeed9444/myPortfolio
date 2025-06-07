
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Simplified Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute w-[400px] h-[400px] -top-48 -left-48 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text Content */}
          <div className={`lg:w-1/2 space-y-8 order-2 lg:order-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Greeting */}
            <div className={`inline-block transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <span className="text-lg font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 hover:scale-105 transition-transform duration-300">
                👋 Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform duration-300">
                Mohammed
              </span>
              <br />
              <span className="text-foreground relative hover:scale-105 inline-block transition-transform duration-300">
                Saeed
                <span className="absolute -right-2 top-0 w-1 h-full bg-primary animate-pulse"></span>
              </span>
            </h1>

            {/* Role */}
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Software Developer
            </h2>

            {/* Description */}
            <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Passionate about creating innovative digital solutions with 
              <span className="text-primary font-medium hover:scale-110 inline-block transition-transform duration-300"> Python</span>, 
              <span className="text-primary font-medium hover:scale-110 inline-block transition-transform duration-300"> JavaScript</span>, 
              <span className="text-primary font-medium hover:scale-110 inline-block transition-transform duration-300"> Swift</span>, and modern frameworks. 
              Let's build something amazing together.
            </p>

            {/* Call to Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                size="lg" 
                className="group text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Stats */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-8 pt-8 text-center lg:text-left transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`lg:w-1/2 flex justify-center order-1 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Decorative layers */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-2xl opacity-30"></div>
              
              {/* Main image container */}
              <div className="relative glass-card p-2 hover:scale-105 hover:rotate-1 transition-all duration-500 group">
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[480px] bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold overflow-hidden shadow-2xl">
                  <img 
                    src='3.png' 
                    alt="Mohammed Saeed - Software Developer"
                    className='object-cover w-full h-full rounded-2xl group-hover:scale-110 transition-transform duration-700'
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg hover:animate-spin transition-all duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:animate-bounce transition-all duration-300">
                <span className="text-xl">🚀</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center shadow-lg hover:animate-pulse transition-all duration-300">
                <span className="text-lg">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
