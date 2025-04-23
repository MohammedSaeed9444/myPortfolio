
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-2">
            <div className="glass-card animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate software developer focused on creating elegant, user-friendly solutions to real-world problems. 
                  With expertise in both front-end and back-end technologies, I enjoy the full development process from concept to deployment.
                </p>
                <p>
                  My approach combines clean code practices with modern frameworks to build applications that are not only functional
                  but also intuitive and enjoyable to use. I'm constantly learning and exploring new technologies to enhance my skillset.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="glass-card h-full flex flex-col justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              
              <div className="space-y-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">M</div>
                    <div>
                      <h4 className="font-medium">Meta Front-End Developer</h4>
                      <p className="text-sm text-muted-foreground">Certificate</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">G</div>
                    <div>
                      <h4 className="font-medium">Google Python Intensive</h4>
                      <p className="text-sm text-muted-foreground">Certificate</p>
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
