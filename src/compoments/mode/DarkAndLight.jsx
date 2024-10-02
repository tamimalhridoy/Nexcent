import React, { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

const DarkAndLight = ({ children }) => {
  const [theme, SetTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const taggleTheme = () => {
    SetTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, taggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default DarkAndLight;
