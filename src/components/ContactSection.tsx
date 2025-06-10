
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Lamp } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        {/* Animated Lamppost at the top */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            {/* Lamppost pole */}
            <div className="w-2 h-20 bg-gradient-to-b from-gray-400 to-gray-600 mx-auto"></div>
            {/* Animated Lamp fixture */}
            <div className="relative -mt-2">
              <Lamp className="w-12 h-12 text-white drop-shadow-lg animate-pulse mx-auto" />
              <div className="absolute -inset-6 bg-white/20 rounded-full blur-xl animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -inset-8 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s' }}></div>
            </div>
          </div>
        </div>

        {/* Animated main light beam */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 h-full">
          <div 
            className="w-full h-full opacity-15 blur-3xl animate-pulse"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.1) 70%, transparent 100%)`,
              animationDuration: '4s',
            }}
          ></div>
        </div>

        {/* Animated side lampposts */}
        <div className="absolute top-10 right-20">
          <div className="relative">
            <Lamp className="w-10 h-10 text-white/80 animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute -inset-4 bg-white/15 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }}></div>
          </div>
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
            <h4 className="font-semibold mb-2 text-reveal text-white">Looking for a developer?</h4>
            <p className="text-gray-300 mb-4 text-reveal">
              I'm currently available for freelance work and full-time positions.
            </p>
            <Button variant="outline" asChild className="hover-lift border-white/40 text-white hover:bg-white/10">
              <a href="/resume.pdf" download>
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
