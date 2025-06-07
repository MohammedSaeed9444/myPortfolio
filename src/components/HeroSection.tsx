
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Enhanced Background with More Dynamic Parallax */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] -top-64 -left-64 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${scrollY * 0.5}px, ${scrollY * 0.4}px) rotate(${scrollY * 0.1}deg) scale(${1 + scrollY * 0.001})` }}
        ></div>
        <div 
          className="absolute w-[600px] h-[600px] -bottom-64 -right-64 bg-gradient-to-br from-purple-200/40 to-pink-300/40 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s', transform: `translate(${-scrollY * 0.4}px, ${scrollY * 0.6}px) rotate(${-scrollY * 0.15}deg)` }}
        ></div>
        <div 
          className="absolute w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-indigo-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '2s', transform: `translate(-50%, -50%) translateY(${-scrollY * 0.2}px) rotate(${scrollY * 0.2}deg) scale(${1 + scrollY * 0.0008})` }}
        ></div>
        
        {/* Enhanced floating particles with varied scroll effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                transform: `translateY(${scrollY * (0.15 + Math.random() * 0.3)}px) translateX(${scrollY * (Math.random() * 0.2 - 0.1)}px) rotate(${scrollY * 0.5}deg) scale(${0.5 + Math.random() * 0.5 + scrollY * 0.001})`
              }}
            />
          ))}
        </div>
      </div>

      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text Content with Enhanced Scroll Effects */}
          <div 
            className="lg:w-1/2 space-y-8 order-2 lg:order-1 text-center lg:text-left"
            style={{ transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.05}px)` }}
          >
            {/* Greeting with enhanced animation */}
            <div 
              className="inline-block animate-fade-in"
              style={{ transform: `translateY(${scrollY * 0.15}px) scale(${1 - scrollY * 0.0002})` }}
            >
              <span className="text-lg font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 animate-bounce">
                👋 Hello, I'm
              </span>
            </div>

            {/* Name with enhanced scroll animation */}
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in" 
              style={{ 
                animationDelay: '0.2s',
                transform: `translateY(${scrollY * 0.08}px) scale(${1 - scrollY * 0.0001})`,
                opacity: Math.max(0.3, 1 - scrollY * 0.002)
              }}
            >
              <span 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse"
                style={{ transform: `translateX(${-scrollY * 0.03}px)` }}
              >
                Mohammed
              </span>
              <br />
              <span 
                className="text-foreground relative"
                style={{ transform: `translateX(${scrollY * 0.03}px)` }}
              >
                Saeed
                <span className="absolute -right-2 top-0 w-1 h-full bg-primary animate-pulse"></span>
              </span>
            </h1>

            {/* Role with enhanced slide and fade animation */}
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground animate-slide-in-right" 
              style={{ 
                animationDelay: '0.4s',
                transform: `translateY(${scrollY * 0.12}px) translateX(${scrollY * 0.02}px)`,
                opacity: Math.max(0.4, 1 - scrollY * 0.0015)
              }}
            >
              Software Developer
            </h2>

            {/* Description with stagger and scroll animation */}
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" 
              style={{ 
                animationDelay: '0.6s',
                transform: `translateY(${scrollY * 0.18}px)`,
                opacity: Math.max(0.2, 1 - scrollY * 0.0025)
              }}
            >
              Passionate about creating innovative digital solutions with 
              <span className="text-primary font-medium hover:scale-110 inline-block transition-transform duration-300"> Python</span>, 
              <span className="text-primary font-medium hover:scale-110 inline-block transition-transform duration-300"> JavaScript</span>, 
              <span className="text-primary font-medium hover:scale-110 inline-block transition-transform duration-300"> Swift</span>, and modern frameworks. 
              Let's build something amazing together.
            </p>

            {/* Call to Action Buttons with enhanced scroll effects */}
            <div 
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start animate-fade-in" 
              style={{ 
                animationDelay: '0.8s',
                transform: `translateY(${scrollY * 0.25}px) scale(${Math.max(0.8, 1 - scrollY * 0.0003)})`,
                opacity: Math.max(0.3, 1 - scrollY * 0.003)
              }}
            >
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

            {/* Stats with enhanced counter and scroll animation */}
            <div 
              className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 text-center lg:text-left animate-fade-in" 
              style={{ 
                animationDelay: '1s',
                transform: `translateY(${scrollY * 0.3}px)`,
                opacity: Math.max(0.1, 1 - scrollY * 0.004)
              }}
            >
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary animate-pulse">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary animate-pulse" style={{ animationDelay: '0.5s' }}>10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary animate-pulse" style={{ animationDelay: '1s' }}>4</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Image with enhanced scroll animations */}
          <div 
            className="lg:w-1/2 flex justify-center order-1 lg:order-2"
            style={{ transform: `translateY(${-scrollY * 0.2}px) translateX(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)` }}
          >
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* Enhanced decorative layers with scroll effects */}
              <div 
                className="absolute -inset-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20 animate-pulse"
                style={{ transform: `rotate(${scrollY * 0.05}deg) scale(${1 + scrollY * 0.0005})` }}
              ></div>
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-2xl opacity-30 animate-pulse" 
                style={{ 
                  animationDelay: '1s',
                  transform: `rotate(${-scrollY * 0.03}deg) scale(${1 + scrollY * 0.0003})`
                }}
              ></div>
              
              {/* Main image container with enhanced scroll effects */}
              <div 
                className="relative glass-card p-2 hover:scale-110 hover:rotate-1 transition-all duration-500 group"
                style={{ transform: `scale(${Math.max(0.9, 1 - scrollY * 0.0002)}) rotate(${scrollY * 0.01}deg)` }}
              >
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[480px] bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold overflow-hidden shadow-2xl">
                  <img 
                    src='3.png' 
                    alt="Mohammed Saeed - Software Developer"
                    className='object-cover w-full h-full rounded-2xl group-hover:scale-110 transition-transform duration-700'
                  />
                </div>
              </div>

              {/* Enhanced floating elements with dynamic scroll animations */}
              <div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce hover:animate-spin"
                style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.2}deg)` }}
              >
                <span className="text-2xl">⚡</span>
              </div>
              <div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg animate-bounce hover:animate-ping" 
                style={{ 
                  animationDelay: '0.5s',
                  transform: `translateY(${-scrollY * 0.25}px) translateX(${scrollY * 0.1}px) rotate(${-scrollY * 0.15}deg)`
                }}
              >
                <span className="text-xl">🚀</span>
              </div>
              <div 
                className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center shadow-lg animate-pulse hover:animate-bounce" 
                style={{ 
                  animationDelay: '1.5s',
                  transform: `translateY(${scrollY * 0.4}px) translateX(${-scrollY * 0.2}px) scale(${1 + scrollY * 0.0008})`
                }}
              >
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
