"use client";

import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // בדוק את מצב ה-DOM ושמור ב-localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg transition"
    >
      {theme === "light" ? "מצב כהה" : "מצב בהיר"}
    </button>
  );
};

export default ThemeToggle;
