import React, { createContext, useState, useContext } from "react";


const ThemeContext = createContext();


export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook for using Theme
export function useTheme() {
  return useContext(ThemeContext);
}
