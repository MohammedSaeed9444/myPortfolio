
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Sparkles, Zap, Lamp } from 'lucide-react';

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
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 bg-black">
        {/* Lamppost and Light Beam Effect */}
        <div className="absolute inset-0 -z-10">
          {/* Lamppost at the top center */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="relative">
              {/* Lamppost pole */}
              <div className="w-2 h-32 bg-gradient-to-b from-gray-600 to-gray-800 mx-auto"></div>
              {/* Lamp fixture */}
              <div className="relative -mt-2">
                <Lamp className="w-16 h-16 text-yellow-200 drop-shadow-2xl mx-auto animate-pulse" />
                <div className="absolute -inset-8 bg-white/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Main vertical light beam from lamppost */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-96 h-full">
            <div 
              className="w-full h-full opacity-20 blur-3xl"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.2) 60%, transparent 100%)`,
              }}
            ></div>
          </div>

          {/* Secondary light beam - narrower */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-48 h-full">
            <div 
              className="w-full h-full opacity-30 blur-xl"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.2) 70%, transparent 100%)`,
              }}
            ></div>
          </div>

          {/* Core light beam - brightest */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-24 h-full">
            <div 
              className="w-full h-full opacity-40 blur-sm"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.3) 80%, transparent 100%)`,
              }}
            ></div>
          </div>

          {/* Subtle mouse-following ambient light */}
          <div 
            className="absolute w-64 h-64 rounded-full opacity-10 blur-2xl transition-all duration-500"
            style={{
              background: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`,
              left: `${mousePosition.x - 128}px`,
              top: `${mousePosition.y - 128}px`,
            }}
          ></div>

          {/* Floating illuminated particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/10 blur-sm animate-pulse"
                style={{
                  width: `${15 + i * 8}px`,
                  height: `${15 + i * 8}px`,
                  left: `${10 + i * 12}%`,
                  top: `${40 + i * 8}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${3 + i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className={`space-y-8 text-center lg:text-left transition-all duration-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-sm transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-200">Available for work</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black leading-none transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className="block text-white drop-shadow-lg">Creative</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
                    Developer
                  </span>
                </h1>
                
                <div className={`flex items-center gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent flex-1 max-w-20"></div>
                  <span className="text-2xl font-bold text-yellow-300 drop-shadow-lg">Mohammed Saeed</span>
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent flex-1 max-w-20"></div>
                </div>
              </div>

              {/* Description */}
              <p className={`text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Crafting exceptional digital experiences with cutting-edge technologies. 
                Specializing in <span className="text-yellow-400 font-semibold">full-stack development</span> and{' '}
                <span className="text-yellow-300 font-semibold">innovative solutions</span>.
              </p>

              {/* Tech Stack Icons */}
              <div className={`flex justify-center lg:justify-start gap-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {[
                  { icon: Code, label: 'Code', color: 'text-yellow-400' },
                  { icon: Zap, label: 'Fast', color: 'text-yellow-300' },
                  { icon: Sparkles, label: 'Creative', color: 'text-yellow-400' },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="p-3 rounded-full bg-white/5 border border-yellow-500/30 group-hover:border-yellow-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-500/20">
                      <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-yellow-300 transition-colors duration-300">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button 
                  size="lg" 
                  className="group text-lg px-8 py-6 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black border-0 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('projects')}
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-yellow-500/50 text-yellow-300 hover:bg-yellow-500/10 hover:border-yellow-400 hover:text-yellow-200 transition-all duration-300 hover:scale-105"
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden border border-yellow-500/30 bg-black/50 backdrop-blur-sm group-hover:scale-105 transition-all duration-500">
                    <img 
                      src="3.png" 
                      alt="Mohammed Saeed - Creative Developer"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/30 animate-bounce" style={{ animationDuration: '3s' }}>
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30 animate-pulse">
                  <Code className="w-7 h-7 text-black" />
                </div>
                <div className="absolute top-1/3 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 animate-ping" style={{ animationDuration: '2s' }}>
                  <Sparkles className="w-6 h-6 text-black" />
                </div>

                {/* Code Snippet Floating Card */}
                <div className="absolute -bottom-4 right-8 bg-black/80 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 shadow-xl shadow-yellow-500/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-300">
                    <div className="text-yellow-400">const</div>
                    <div className="text-yellow-300">developer = &#123;</div>
                    <div className="text-green-400 ml-2">creative: true</div>
                    <div className="text-yellow-300">&#125;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { number: '3+', label: 'Years Experience', color: 'from-yellow-400 to-yellow-500' },
              { number: '15+', label: 'Projects Completed', color: 'from-yellow-300 to-yellow-400' },
              { number: '4', label: 'Tech Stacks', color: 'from-yellow-500 to-yellow-600' },
              { number: '100%', label: 'Client Satisfaction', color: 'from-yellow-200 to-yellow-400' },
            ].map((stat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">
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
