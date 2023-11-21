import { useEffect, useState } from "react";

const isDarkTheme = window && window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

interface IUseTheme {
  toggleChangeTheme: (isDark: boolean) => void;
}

export const useTheme = (): IUseTheme => {

  const [theme, setTheme] = useState<string>(localStorage.getItem('app-theme') || defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleChangeTheme = (isDark: boolean) => {
    setTheme(isDark ? 'dark' : 'light');
  };

  return { toggleChangeTheme };
  
};