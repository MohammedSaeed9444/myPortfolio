
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative about-section">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white opacity-80 parallax"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-blue-200 rounded-full blur-3xl opacity-20 floating"></div>
        <div className="absolute w-72 h-72 top-24 right-12 bg-purple-200 rounded-full blur-2xl opacity-10 scroll-rotate"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title text-reveal">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-2">
            <div className="glass-card about-card scroll-scale">
              <h3 className="text-xl font-semibold mb-4 text-reveal">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
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
            <div className="glass-card h-full flex flex-col justify-center about-card scroll-scale" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-4 text-reveal">Certifications</h3>
              
              <div className="space-y-4">
                <Card className="overflow-hidden hover-lift">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-white shadow floating">
                      <img src="/meta.jpg" alt="Meta Logo" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-medium text-reveal">Meta Front-End Developer</h4>
                      <a
                        href="https://www.coursera.org/account/accomplishments/specialization/SAU2JSL6S75M"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm transition duration-300 transform hover:underline hover:scale-105 hover:text-blue-800"
                      >
                        Certificate
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover-lift">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-white shadow floating">
                      <img src="/google.png" alt="Google Logo" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <h4 className="font-medium text-reveal">Google Python Crash</h4>
                      <a
                        href="https://www.coursera.org/account/accomplishments/verify/635GP4PSHVEK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm transition duration-300 transform hover:underline hover:scale-105 hover:text-blue-800"
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
