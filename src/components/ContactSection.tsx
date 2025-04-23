
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission to a backend
    console.log('Form submitted:', formData);
    alert('Thanks for your message! This is a demo - in a real portfolio this would send an email.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass-card animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>

          <div className="glass-card flex flex-col justify-between animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <a href="mailto:mohammed@example.com" className="hover:text-primary transition-colors">
                    mohammed@example.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-primary" />
                  <a href="https://linkedin.com/in/mohammedsaeed" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    linkedin.com/in/mohammedsaeed
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-3 text-primary" />
                  <a href="https://github.com/mohammedsaeed" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
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
              <Button variant="secondary">Download Resume</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
