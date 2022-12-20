import { createContext, useEffect, useState } from "react"
import { themes } from "./themes";

type ThemeContextProviderProps = {
    children : React.ReactNode
}

type ThemeName = "light" | "dark";


export const ThemeContext = createContext({
    themeName: "dark",
    toggleTheme: () => {}
});

export default function ThemeContextProvider( {
    children} : ThemeContextProviderProps ) {

    const [themeName, setThemeName] = useState<ThemeName>("dark");
    const [theme, setTheme] = useState(themes[themeName]);

    const toggleTheme = () => {
        theme === themes.dark ? (setTheme(themes.light), setThemeName("light")) : (setTheme(themes.dark), setThemeName("dark"));
    };

    useEffect(() => {
        document.body.style.setProperty("--text", themes[themeName].text);
        document.body.style.setProperty("--main",themes[themeName].main);
    }, [toggleTheme])

  return (
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
