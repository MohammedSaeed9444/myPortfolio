
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Sparkles, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <React.Fragment>
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
        {/* Dynamic Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white/80"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="h-full w-full" 
              style={{
                backgroundImage: `radial-gradient(circle at ${(mousePosition.x / window.innerWidth) * 100}% ${(mousePosition.y / window.innerHeight) * 100}%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)`,
                transition: 'background-image 0.3s ease'
              }}
            ></div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute inset-0">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-20 blur-xl animate-pulse"
                style={{
                  width: `${100 + i * 20}px`,
                  height: `${100 + i * 20}px`,
                  left: `${10 + i * 12}%`,
                  top: `${15 + i * 10}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + i * 0.5}s`,
                }}
              />
            ))}
          </div>

          {/* Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-64 h-64 border border-green-500/30 rotate-45 -top-32 -right-32 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute w-48 h-48 border border-green-500/30 rotate-12 -bottom-24 -left-24 animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute w-32 h-32 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full top-1/4 right-1/4 animate-bounce" style={{ animationDuration: '3s' }}></div>
          </div>
        </div>

        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className={`space-y-8 text-center lg:text-left transition-all duration-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 backdrop-blur-sm transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Available for work</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black leading-none transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className="block text-gray-900">Creative</span>
                  <span className="block bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                
                <div className={`flex items-center gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1 max-w-20"></div>
                  <span className="text-2xl font-bold text-green-700">Mohammed Saeed</span>
                  <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1 max-w-20"></div>
                </div>
              </div>

              {/* Description */}
              <p className={`text-xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Crafting exceptional digital experiences with cutting-edge technologies. 
                Specializing in <span className="text-green-600 font-semibold">full-stack development</span> and{' '}
                <span className="text-green-700 font-semibold">innovative solutions</span>.
              </p>

              {/* Tech Stack Icons */}
              <div className={`flex justify-center lg:justify-start gap-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {[
                  { icon: Code, label: 'Code', color: 'text-green-600' },
                  { icon: Zap, label: 'Fast', color: 'text-yellow-600' },
                  { icon: Sparkles, label: 'Creative', color: 'text-green-600' },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="p-3 rounded-full bg-white/70 border border-gray-300 group-hover:border-green-500/50 transition-all duration-300 group-hover:scale-110">
                      <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-green-700 transition-colors duration-300">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button 
                  size="lg" 
                  className="group text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 border-0 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('projects')}
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-gray-400 text-gray-700 hover:bg-gray-100 hover:border-green-500 hover:text-green-700 transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('contact')}
                >
                  Let&apos;s Connect
                </Button>
              </div>
            </div>

            {/* Visual Content */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-600 via-green-500 to-green-700 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden border border-gray-300 bg-white/70 backdrop-blur-sm group-hover:scale-105 transition-all duration-500">
                    <img 
                      src="3.png" 
                      alt="Mohammed Saeed - Creative Developer"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-1/3 -right-4 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-ping" style={{ animationDuration: '2s' }}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>

                {/* Code Snippet Floating Card */}
                <div className="absolute -bottom-4 right-8 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg p-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-700">
                    <div className="text-green-600">const</div>
                    <div className="text-green-700">developer = &#123;</div>
                    <div className="text-green-600 ml-2">creative: true</div>
                    <div className="text-green-700">&#125;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { number: '3+', label: 'Years Experience', color: 'from-green-600 to-green-700' },
              { number: '15+', label: 'Projects Completed', color: 'from-green-500 to-green-600' },
              { number: '4', label: 'Tech Stacks', color: 'from-green-600 to-green-800' },
              { number: '100%', label: 'Client Satisfaction', color: 'from-green-400 to-green-600' },
            ].map((stat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm mt-1 group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
