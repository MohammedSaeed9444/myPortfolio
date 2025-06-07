
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDayMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const navbarBg = isDayMode 
    ? 'bg-white/90 backdrop-blur-md border-b border-gray-200'
    : 'bg-black/90 backdrop-blur-md border-b border-white/20';

  const textColor = isDayMode ? 'text-gray-900' : 'text-white';
  const logoColor = isDayMode ? 'text-primary' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? `${navbarBg} py-3` : 'py-5'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className={`text-2xl font-bold ${logoColor}`}>
          MS
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-primary transition-colors ${textColor}`}
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            className={textColor}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`${navbarBg} absolute top-full left-0 right-0 p-4 md:hidden animate-fade-in`}>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium hover:text-primary transition-colors ${textColor}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
