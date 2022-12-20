import { createContext, CSSProperties, useEffect, useState } from "react"
import { themes } from "./themes";

type ThemeContextProviderProps = {
    children : React.ReactNode
}

type ThemeName = "light" | "dark";

type ThemeProps = {
    main: CSSProperties,
    text: CSSProperties
}

export const ThemeContext = createContext({
    themeName: "dark" as ThemeName,
    toggleTheme: () => {}
});

export default function ThemeContextProvider( {children} : ThemeContextProviderProps ) {

    const [themeName, setThemeName] = useState<ThemeName>("dark");
    const [theme, setTheme] = useState<ThemeProps>(themes[themeName] as ThemeProps);

    const toggleTheme = () => {
        theme === themes.dark ? (setTheme(themes["light"] as ThemeProps), setThemeName("light")) : (setTheme(themes["dark"] as ThemeProps), setThemeName("dark"));
    };

    function setCSSVariables () {
        let value : keyof ThemeProps;
        for (value in theme) {
          document.documentElement.style.setProperty(`--${value}`, `${theme[value] as CSSProperties}`);
        }
      };

    useEffect(() => {
        setCSSVariables();
    }, [toggleTheme])

  return (
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
