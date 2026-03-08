import { createContext, useContext, useEffect, useState } from "react";

const DarkLightThemeContext = createContext();

export const DarkLightThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const darkLightToggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <DarkLightThemeContext.Provider value={{ darkMode, darkLightToggleTheme }}>
      {children}
    </DarkLightThemeContext.Provider>
  );
};

export const useDarkLightTheme = () => useContext(DarkLightThemeContext);