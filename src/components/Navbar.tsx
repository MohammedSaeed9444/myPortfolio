
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-5'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-primary">
            MS
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-600 hover:text-white hover:drop-shadow-lg transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden "
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu />
          </Button>
        </div>
      </header>

      {/* Mobile Menu and Overlay (outside header to cover whole screen) */}
      {mobileMenuOpen && (
        <div className=" fixed inset-0 z-[60] md:hidden" onClick={() => setMobileMenuOpen(false)}>
          {/* Background overlay */}
          <div className=" absolute inset-0 bg-black/30" />

          {/* Menu */}
          <div
            className="glass absolute top-0 left-0 right-0 p-4 animate-fade-in z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium hover:text-yellow-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
