import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Sparkles, Zap } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const { isDayMode } = useTheme();

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

  const sectionBg = isDayMode ? 'bg-gradient-to-br from-green-100 via-blue-100 to-purple-100' : 'bg-black';
  const textColor = isDayMode ? 'text-gray-900' : 'text-white';
  const lightEffects = !isDayMode;

  return (
    <React.Fragment>
      <section id="home" className={`min-h-screen flex items-center relative overflow-hidden pt-16 ${sectionBg}`}>
        {/* Night mode light effects */}
        {lightEffects && (
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
        )}

        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className={`space-y-8 text-center lg:text-left transition-all duration-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black leading-none transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <span className={`block drop-shadow-lg animate-pulse ${textColor}`} style={{ animationDuration: '3s' }}>Creative</span>
                  <span className={`block drop-shadow-lg animate-pulse ${textColor}`} style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                    Developer
                  </span>
                </h1>
                
                <div className={`flex items-center gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className={`h-px ${isDayMode ? 'bg-gradient-to-r from-transparent via-gray-400 to-transparent' : 'bg-gradient-to-r from-transparent via-white to-transparent'} flex-1 max-w-20 animate-pulse`}></div>
                  <span className={`text-2xl font-bold drop-shadow-lg ${textColor}`}>Mohammed Saeed</span>
                  <div className={`h-px ${isDayMode ? 'bg-gradient-to-r from-transparent via-gray-400 to-transparent' : 'bg-gradient-to-r from-transparent via-white to-transparent'} flex-1 max-w-20 animate-pulse`}></div>
                </div>
              </div>

              {/* Description */}
              <p className={`text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-700 ${isDayMode ? 'text-gray-700' : 'text-gray-300'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Crafting exceptional digital experiences with cutting-edge technologies. 
                Specializing in <span className={`font-semibold animate-pulse ${isDayMode ? 'text-green-600' : 'text-white'}`}>full-stack development</span> and{' '}
                <span className={`font-semibold animate-pulse ${isDayMode ? 'text-blue-600' : 'text-white'}`}>innovative solutions</span>.
              </p>

              {/* Call to Action */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button 
                  size="lg" 
                  className={`group text-lg px-8 py-6 ${isDayMode ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-white text-black hover:bg-gray-200'} border-0 shadow-lg ${isDayMode ? 'shadow-green-600/25 hover:shadow-green-600/40' : 'shadow-white/25 hover:shadow-white/40'} transition-all duration-300 hover:scale-105 animate-pulse`}
                  onClick={() => scrollToSection('projects')}
                  style={{ animationDuration: '4s' }}
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className={`text-lg px-8 py-6 border-2 ${isDayMode ? 'border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600' : 'border-white/50 text-white hover:bg-white/10 hover:border-white'} transition-all duration-300 hover:scale-105`}
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
                  <div className={`absolute -inset-4 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse ${isDayMode ? 'bg-green-300' : 'bg-white'}`} style={{ animationDuration: '5s' }}></div>
                  <div className={`relative w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden border ${isDayMode ? 'border-green-300 bg-green-50/50' : 'border-white/30 bg-black/50'} backdrop-blur-sm group-hover:scale-105 transition-all duration-500`}>
                    <img 
                      src="3.png" 
                      alt="Mohammed Saeed - Creative Developer"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 ${isDayMode ? 'bg-gradient-to-t from-green-100/50 via-transparent to-transparent' : 'bg-gradient-to-t from-black/50 via-transparent to-transparent'}`}></div>
                  </div>
                </div>

                {/* Animated Floating Elements */}
                <div className={`absolute -top-6 -right-6 w-16 h-16 ${isDayMode ? 'bg-yellow-400' : 'bg-white'} rounded-2xl flex items-center justify-center shadow-lg ${isDayMode ? 'shadow-yellow-400/30' : 'shadow-white/30'} animate-bounce`} style={{ animationDuration: '3s' }}>
                  <Zap className={`w-8 h-8 ${isDayMode ? 'text-white' : 'text-black'} animate-spin`} style={{ animationDuration: '4s' }} />
                </div>
                <div className={`absolute -bottom-6 -left-6 w-14 h-14 ${isDayMode ? 'bg-blue-500' : 'bg-white'} rounded-xl flex items-center justify-center shadow-lg ${isDayMode ? 'shadow-blue-500/30' : 'shadow-white/30'} animate-pulse`}>
                  <Code className={`w-7 h-7 ${isDayMode ? 'text-white' : 'text-black'}`} />
                </div>
                <div className={`absolute top-1/3 -right-4 w-12 h-12 ${isDayMode ? 'bg-purple-500' : 'bg-white'} rounded-full flex items-center justify-center shadow-lg ${isDayMode ? 'shadow-purple-500/30' : 'shadow-white/30'} animate-ping`} style={{ animationDuration: '2s' }}>
                  <Sparkles className={`w-6 h-6 ${isDayMode ? 'text-white' : 'text-black'} animate-spin`} style={{ animationDuration: '2s' }} />
                </div>

                {/* Code Snippet Floating Card */}
                <div className={`absolute -bottom-4 right-8 ${isDayMode ? 'bg-white/90 border border-gray-300' : 'bg-black/80 border border-white/30'} backdrop-blur-sm rounded-lg p-4 shadow-xl ${isDayMode ? 'shadow-gray-300/20' : 'shadow-white/20'} transform rotate-3 hover:rotate-0 transition-transform duration-300 animate-pulse`} style={{ animationDuration: '6s' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full animate-ping ${isDayMode ? 'bg-red-500' : 'bg-white'}`} style={{ animationDuration: '1s' }}></div>
                    <div className={`w-3 h-3 rounded-full animate-ping ${isDayMode ? 'bg-yellow-500' : 'bg-gray-400'}`} style={{ animationDuration: '1.5s' }}></div>
                    <div className={`w-3 h-3 rounded-full animate-ping ${isDayMode ? 'bg-green-500' : 'bg-gray-600'}`} style={{ animationDuration: '2s' }}></div>
                  </div>
                  <div className="text-xs font-mono">
                    <div className={isDayMode ? 'text-blue-600' : 'text-white'}>const</div>
                    <div className={isDayMode ? 'text-purple-600' : 'text-white'}>developer = &#123;</div>
                    <div className={`ml-2 ${isDayMode ? 'text-green-600' : 'text-gray-300'}`}>creative: true</div>
                    <div className={isDayMode ? 'text-purple-600' : 'text-white'}>&#125;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '15+', label: 'Projects Completed' },
              { number: '4', label: 'Tech Stacks' },
            ].map((stat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`text-3xl font-black group-hover:scale-110 transition-transform duration-300 animate-pulse ${textColor}`} style={{ animationDelay: `${index * 0.2}s`, animationDuration: '3s' }}>
                  {stat.number}
                </div>
                <div className={`text-sm mt-1 group-hover:text-opacity-80 transition-colors duration-300 ${isDayMode ? 'text-gray-600 group-hover:text-gray-800' : 'text-gray-400 group-hover:text-gray-300'}`}>
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
