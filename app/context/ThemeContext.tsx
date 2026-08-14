'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeCtx>({ theme: 'light', toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  // On first mount: read saved preference, otherwise default to light
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme | null;
    const initial: Theme = (saved === 'light' || saved === 'dark') ? saved : 'light';
    apply(initial);
    setTheme(initial);
  }, []);

  const apply = (t: Theme) => {
    const html = document.documentElement;
    if (t === 'light') {
      html.classList.add('light');
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
      html.classList.remove('light');
    }
  };

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      apply(next);
      localStorage.setItem('portfolio-theme', next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
