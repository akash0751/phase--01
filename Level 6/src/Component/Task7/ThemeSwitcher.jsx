import React from "react";
import { useTheme } from "../Task7/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <h1>Theme Switcher</h1>
      <p>Current Theme: <strong>{theme.toUpperCase()}</strong></p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}



export default ThemeSwitcher;
