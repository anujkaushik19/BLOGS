"use client";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const accessLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(() => {
    return accessLocalStorage();
  });

  const toggleTheme = () => {
    if (theme === "light" ? setTheme("dark") : setTheme("light"));
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
