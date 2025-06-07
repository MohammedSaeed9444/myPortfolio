
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { useTheme } from '../contexts/ThemeContext';

const Index = () => {
  const { isDayMode } = useTheme();
  
  const bodyBg = isDayMode 
    ? 'bg-gradient-to-br from-green-100 via-blue-100 to-purple-100' 
    : 'bg-black';

  return (
    <div className={`min-h-screen ${bodyBg}`}>
      <Navbar />
      <main className="space-y-0">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
