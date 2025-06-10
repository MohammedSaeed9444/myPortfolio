
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Add stagger effect to child elements
          const children = entry.target.querySelectorAll('.animate-on-scroll');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-slide-in-right');
            }, index * 100);
          });

          // Add special effects for different section types
          if (entry.target.classList.contains('projects-section')) {
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
              }, index * 200);
            });
          }

          if (entry.target.classList.contains('skills-section')) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-bounce-in');
              }, index * 50);
            });
          }

          if (entry.target.classList.contains('about-section')) {
            const aboutCards = entry.target.querySelectorAll('.about-card');
            aboutCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-in-left');
              }, index * 300);
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    });

    // Observe all sections and cards
    requestAnimationFrame(() => {
      document.querySelectorAll('section, .glass-card, .project-card, .skill-item, .about-card').forEach(element => {
        observer.observe(element);
      });
    });

    // Enhanced scroll-triggered animations
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const scrollPercent = scrolled / (document.documentElement.scrollHeight - window.innerHeight);
      
      // Parallax effects for background elements
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.2;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });

      // Floating animations for decorative elements
      const floatingElements = document.querySelectorAll('.floating');
      floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const rotation = scrolled * 0.1;
        (element as HTMLElement).style.transform = `translateY(${Math.sin(scrolled * 0.01 + index) * 20}px) rotate(${rotation + (index * 30)}deg)`;
      });

      // Scale effects for certain elements
      const scaleElements = document.querySelectorAll('.scroll-scale');
      scaleElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
          const scale = 0.8 + (progress * 0.2);
          (element as HTMLElement).style.transform = `scale(${scale})`;
        }
      });

      // Progress bar effect
      const progressBars = document.querySelectorAll('.scroll-progress');
      progressBars.forEach((bar) => {
        (bar as HTMLElement).style.width = `${scrollPercent * 100}%`;
      });

      // Text reveal effects
      const revealElements = document.querySelectorAll('.text-reveal');
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          element.classList.add('revealed');
        }
      });

      // Rotate elements based on scroll
      const rotateElements = document.querySelectorAll('.scroll-rotate');
      rotateElements.forEach((element, index) => {
        const rotation = scrolled * 0.1 + (index * 15);
        (element as HTMLElement).style.transform = `rotate(${rotation}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set up animations
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
