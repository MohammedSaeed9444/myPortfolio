
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDayMode, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`relative transition-all duration-300 ${
        isDayMode 
          ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-600' 
          : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
      }`}
    >
      {isDayMode ? (
        <Sun className="h-5 w-5 animate-spin" style={{ animationDuration: '8s' }} />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
