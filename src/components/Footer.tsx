
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 glass mt-0 mb-0" style={{ marginBottom: 0, paddingBottom: '2rem' }}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Mohammed Saeed. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Built with React, Tailwind CSS, and shadcn/ui
        </p>
      </div>
    </footer>
  );
};

export default Footer;
