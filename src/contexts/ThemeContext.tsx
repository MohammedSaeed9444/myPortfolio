
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  isDayMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDayMode, setIsDayMode] = useState(false);

  const toggleTheme = () => {
    setIsDayMode(!isDayMode);
  };

  return (
    <ThemeContext.Provider value={{ isDayMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
