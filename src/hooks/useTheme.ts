import { useEffect, useState } from "react";

const isDarkTheme = window && window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleChangeTheme = isDark => {
    setTheme(isDark ? 'dark' : 'light');
  };

  return { toggleChangeTheme };
};