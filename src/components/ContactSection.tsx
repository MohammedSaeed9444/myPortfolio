import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
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

        {/* Side mysterious light source */}
        <div className="absolute top-0 right-20 w-32 h-full">
          <div 
            className="w-full h-full opacity-15 blur-2xl animate-pulse"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)`,
              animationDuration: '4s',
            }}
          ></div>
        </div>

        {/* Animated floating particles */}
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
        <h2 className="section-title text-reveal text-white drop-shadow-lg animate-pulse" style={{ animationDuration: '4s' }}>Get In Touch</h2>

        <div className="bg-black/60 backdrop-blur-md border border-white/20 shadow-lg shadow-white/10 rounded-2xl p-6 flex flex-col justify-between scroll-scale animate-pulse" style={{ animationDelay: '0.2s', animationDuration: '5s' }}>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-reveal text-white">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center hover-lift">
                <Mail className="h-5 w-5 mr-3 text-white floating" />
                <a href="mailto:mohammedsaeed9444@gmail.com" className="hover:text-gray-300 transition-colors text-reveal text-white">
                  mohammedsaeed9444@gmail.com
                </a>
              </div>

              <div className="flex items-center hover-lift">
                <Linkedin className="h-5 w-5 mr-3 text-white floating" />
                <a
                  href="https://linkedin.com/in/mohammed-saeed-401b53249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors text-reveal text-white"
                >
                  linkedin.com/in/mohammed-saeed-401b53249
                </a>
              </div>

              <div className="flex items-center hover-lift">
                <Github className="h-5 w-5 mr-3 text-white floating" />
                <a
                  href="https://github.com/MohammedSaeed9444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors text-reveal text-white"
                >
                  github.com/mohammedsaeed
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-white/10 border border-white/20 p-6 rounded-xl scroll-scale">
            {/*<h4 className="font-semibold mb-2 text-reveal text-white">Looking for a developer?</h4>
            <p className="text-gray-300 mb-4 text-reveal">
              I'm currently available for freelance work and full-time positions.
            </p>*/}
            <Button variant="outline" asChild className="bg-black/10 border-white/40 text-white/90 hover:bg-white/90 hover:text-black animate-pulse">
              <a href="Mohamed Saeed__Front-End.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
