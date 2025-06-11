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
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 bg-black">
        {/* Mysterious Light Effects - No visible source */}
        <div className="absolute inset-0 -z-10">
          {/* Animated main vertical light beam from unknown source */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-full animate-pulse" style={{ animationDuration: '4s' }}>
            <div 
              className="w-full h-full opacity-20 blur-3xl light-sweep"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.2) 60%, transparent 100%)`,
              }}
            ></div>
          </div>

          {/* Animated secondary light beam - narrower */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-full">
            <div 
              className="w-full h-full opacity-30 blur-xl animate-bounce"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.2) 70%, transparent 100%)`,
                animationDuration: '5s',
              }}
            ></div>
          </div>

          {/* Animated core light beam - brightest */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-full">
            <div 
              className="w-full h-full opacity-40 blur-sm animate-pulse"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.3) 80%, transparent 100%)`,
                animationDuration: '2s',
              }}
            ></div>
          </div>

          {/* Side mysterious light sources */}
          <div className="absolute top-0 left-20 w-32 h-full">
            <div 
              className="w-full h-full opacity-15 blur-2xl animate-pulse"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)`,
                animationDuration: '3s',
              }}
            ></div>
          </div>

          <div className="absolute bottom-0 right-16 w-24 h-3/4">
            <div 
              className="w-full h-full opacity-10 blur-xl animate-pulse"
              style={{
                background: `linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.2) 100%)`,
                animationDelay: '1s',
                animationDuration: '2s',
              }}
            ></div>
          </div>

          {/* Animated floating illuminated particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white blur-sm animate-ping"
                style={{
                  width: `${8 + i * 4}px`,
                  height: `${8 + i * 4}px`,
                  left: `${5 + i * 8}%`,
                  top: `${30 + i * 6}%`,
                  opacity: `${0.1 + (i * 0.02)}`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${2 + i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Animated light rays */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="absolute bg-white/5 animate-pulse"
                style={{
                  width: '2px',
                  height: '100%',
                  left: `${45 + i * 2}%`,
                  top: '0%',
                  transform: `rotate(${-10 + i * 4}deg)`,
                  transformOrigin: 'top center',
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + i * 0.4}s`,
                }}
              />
            ))}
          </div>

          {/* Expanding light circles */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className="absolute border border-white/10 rounded-full animate-ping"
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  left: '50%',
                  top: '0%',
                  transform: 'translate(-50%, 0%)',
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${4 + i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className={`space-y-8 text-center lg:text-left transition-all duration-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Animated Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm transition-all duration-800 delay-200 animate-pulse ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-sm font-medium text-white">Available for work</span>
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black leading-none transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className="block text-white drop-shadow-lg animate-pulse" style={{ animationDuration: '3s' }}>Software</span>
                  <span className="block text-white drop-shadow-lg animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                    Developer
                  </span>
                </h1>
                
                <div className={`flex items-center gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-20 animate-pulse"></div>
                  <span className="text-2xl font-bold text-white drop-shadow-lg">Mohammed Saeed</span>
                  <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-20 animate-pulse"></div>
                </div>
              </div>

              {/* Description */}
              <p className={`text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Crafting exceptional digital experiences with cutting-edge technologies. 
                Specializing in <span className="text-white font-semibold animate-pulse">FrontEnd</span> and{' '}
                <span className="text-white font-semibold animate-pulse">iOS</span>.
              </p>

              {/* Tech Stack Icons */}
              <div className={`flex justify-center lg:justify-start gap-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {[
                  { icon: Code, label: '', color: 'text-white' },
                  { icon: Zap, label: '', color: 'text-white' },
                  { icon: Sparkles, label: '', color: 'text-white' },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="p-3 rounded-full bg-white/5 border border-white/30 group-hover:border-white/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/20 animate-bounce" style={{ animationDelay: `${index * 0.3}s`, animationDuration: '2s' }}>
                      <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button 
                  size="lg" 
                  className="group text-lg px-8 py-6 bg-white text-black hover:bg-gray-200 border-0 shadow-lg shadow-white/25 hover:shadow-white/40 transition-all duration-300 hover:scale-105 animate-pulse"
                  onClick={() => scrollToSection('projects')}
                  style={{ animationDuration: '4s' }}
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-white/50 text-white bg-transparent 
hover:bg-white hover:text-black hover:border-white 
transition-all duration-300 hover:scale-105"
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
                  <div className="absolute -inset-4 bg-white rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse" style={{ animationDuration: '5s' }}></div>
                  <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden border border-white/30 bg-black/50 backdrop-blur-sm group-hover:scale-105 transition-all duration-500">
                    <img 
                      src="3.png" 
                      alt="Mohammed Saeed - Creative Developer"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Animated Floating Elements */}

                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-white/30 animate-pulse">
                  <Code className="w-7 h-7 text-black" />
                </div>
                

                {/* Code Snippet Floating Card */}
                  <div className="absolute -bottom-4 right-8 bg-black/80 backdrop-blur-sm border border-white/30 rounded-lg p-4 shadow-xl shadow-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-300 animate-pulse" style={{ animationDuration: '6s' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" style={{ animationDuration: '1s' }}></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                    </div>

                    <div className="text-xs font-mono text-gray-300 space-y-1">
                      <div className="text-blue-300">const</div>
                    <div className="text-yellow-300">developer = &#123;</div>
                    <div className="text-green-400 ml-2">creative: true</div>
                    <div className="text-yellow-300">&#125;</div>
                    </div>
                  </div>

              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '8+', label: 'Projects Completed' },
              { number: '3', label: 'Tech Stacks' },
            ].map((stat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300 animate-pulse" style={{ animationDelay: `${index * 0.2}s`, animationDuration: '3s' }}>
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
