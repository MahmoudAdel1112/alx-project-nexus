'use client';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useLocalStorage } from '@/app/lib/localStorage';
import { createContext, useContext, useState, useEffect } from 'react';
import { GlobalStyles } from './GlobalStyles';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  if (!isMounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
