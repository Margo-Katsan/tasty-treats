import { useEffect, useState } from "react"

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light';
console.log(defaultTheme)

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme);

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)

  }, [theme])

  const toogleChangeTheme = isDark => {
    console.log(isDark)
     setTheme(isDark ? 'dark' : 'light')
  }

  return { toogleChangeTheme };
}