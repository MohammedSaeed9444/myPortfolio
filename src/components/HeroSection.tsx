
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute w-[500px] h-[500px] -top-64 -left-64 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-64 -right-64 bg-gradient-to-br from-purple-200/40 to-pink-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-indigo-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text Content - Mobile: order-2, Desktop: order-1 */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting */}
            <div className="inline-block">
              <span className="text-lg font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                👋 Hello, I'm
              </span>
            </div>

            {/* Name with gradient text */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Mohammed
              </span>
              <br />
              <span className="text-foreground">Saeed</span>
            </h1>

            {/* Role */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              Software Developer
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating innovative digital solutions with 
              <span className="text-primary font-medium"> Python</span>, 
              <span className="text-primary font-medium"> JavaScript</span>, 
              <span className="text-primary font-medium"> Swift</span>, and modern frameworks. 
              Let's build something amazing together.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Stats or Quick Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Image - Mobile: order-1, Desktop: order-2 */}
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative glass-card p-2 hover:scale-105 transition-transform duration-300">
                <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[480px] bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold overflow-hidden shadow-2xl">
                  <img 
                    src='3.png' 
                    alt="Mohammed Saeed - Software Developer"
                    className='object-cover w-full h-full rounded-2xl hover:scale-110 transition-transform duration-500'
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
