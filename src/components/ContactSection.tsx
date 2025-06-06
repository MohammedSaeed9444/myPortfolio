import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="glass-card flex flex-col justify-between animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:mohammedsaeed9444@gmail.com" className="hover:text-primary transition-colors">
                  mohammedsaeed9444@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="https://linkedin.com/in/mohammed-saeed-401b53249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/mohammed-saeed-401b53249
                </a>
              </div>

              <div className="flex items-center">
                <Github className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="https://github.com/MohammedSaeed9444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/mohammedsaeed
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-primary/10 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">Looking for a developer?</h4>
            <p className="text-muted-foreground mb-4">
              I'm currently available for freelance work and full-time positions.
            </p>
            <Button variant="secondary" asChild>
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
