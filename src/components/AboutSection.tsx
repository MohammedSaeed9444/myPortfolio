import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden about-section bg-black">
      <div className="absolute inset-0 -z-10">
        {/* Mysterious Light Effects - No visible source */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-full">
          <div 
            className="w-full h-full opacity-15 blur-3xl animate-pulse"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.1) 70%, transparent 100%)`,
              animationDuration: '4s',
            }}
          ></div>
        </div>

        <div className="absolute top-0 right-20 w-32 h-full">
          <div 
            className="w-full h-full opacity-15 blur-2xl animate-pulse"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)`,
              animationDuration: '4s',
            }}
          ></div>
        </div>

        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/8 opacity-30 blur-xl animate-ping"
              style={{
                width: `${60 + i * 12}px`,
                height: `${60 + i * 12}px`,
                left: `${5 + i * 15}%`,
                top: `${10 + i * 15}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${3 + i * 0.4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-reveal text-white drop-shadow-lg animate-pulse" style={{ animationDuration: '4s' }}>About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-2">
            <div className="bg-black/60 backdrop-blur-md border border-white/20 shadow-lg shadow-white/10 rounded-2xl p-6 about-card scroll-scale animate-pulse" style={{ animationDuration: '5s' }}>
              <h3 className="text-xl font-semibold mb-4 text-reveal text-white">My Journey</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-reveal">
                  I'm a passionate software developer focused on creating elegant, user-friendly solutions to real-world problems. 
                  With expertise in both front-end and back-end technologies, I enjoy the full development process from concept to deployment.
                </p>
                <p className="text-reveal">
                  My approach combines clean code practices with modern frameworks to build applications that are not only functional
                  but also intuitive and enjoyable to use. I'm constantly learning and exploring new technologies to enhance my skillset.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-black/60 backdrop-blur-md border border-white/20 shadow-lg shadow-white/10 rounded-2xl p-6 h-full flex flex-col justify-center about-card scroll-scale animate-pulse" style={{ animationDelay: '0.2s', animationDuration: '4s' }}>
              <h3 className="text-xl font-semibold mb-4 text-reveal text-white">Certifications</h3>
              
              <div className="space-y-4">
                <Card className="overflow-hidden hover-lift bg-black/40 border-white/30">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-white/90 shadow floating">
                      <img src="/meta.jpg" alt="Meta Logo" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-medium text-reveal text-white">Meta Front-End Developer</h4>
                      <a
                        href="https://www.coursera.org/account/accomplishments/specialization/SAU2JSL6S75M"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm transition duration-300 transform hover:underline hover:scale-105 hover:text-white"
                      >
                        Certificate
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover-lift bg-black/40 border-white/30">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-white/90 shadow floating">
                      <img src="/google.png" alt="Google Logo" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-medium text-reveal text-white">Google Python Crash</h4>
                      <a
                        href="https://www.coursera.org/account/accomplishments/verify/635GP4PSHVEK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm transition duration-300 transform hover:underline hover:scale-105 hover:text-white"
                      >
                        Certificate
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
