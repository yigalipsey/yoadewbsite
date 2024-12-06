"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 bg-opacity-90 text-black dark:text-white"
          : "bg-transparent text-black dark:text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className="ml-6 md:ml-1 text-lg font-bold" href="#home">
              <span className="text-black dark:text-white">Yoad</span>
              <span className="text-[#32FF72] dark:text-[#28D65A] ml-1">
                Lipsey
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#examples"
              className="text-gray-800 dark:text-gray-300 hover:text-[#32FF72] dark:hover:text-[#28D65A] px-3 py-2 rounded-md text-sm font-medium"
            >
              Examples
            </Link>
            <Link
              href="#catalogs"
              className="text-gray-800 dark:text-gray-300 hover:text-[#32FF72] dark:hover:text-[#28D65A] px-3 py-2 rounded-md text-sm font-medium"
            >
              Catalogs
            </Link>
            <Link
              href="#services"
              className="text-gray-800 dark:text-gray-300 hover:text-[#32FF72] dark:hover:text-[#28D65A] px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 dark:text-gray-300 hover:text-[#32FF72] dark:hover:text-[#28D65A] px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-300 hover:text-[#32FF72] dark:hover:text-[#28D65A] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#examples"
              className="block text-gray-800 dark:text-gray-300 hover:text-[#32FF72] dark:hover:text-[#28D65A] px-3 py-2 rounded-md text-base font-medium"
            >
              Examples
            </Link>
            <Link
              href="#catalogs"
              className="block text-gray-800 dark:text-gray-300 hover:text-[#32FF72] dark:hover:text-[#28D65A] px-3 py-2 rounded-md text-base font-medium"
            >
              Catalogs
            </Link>
            <Link
              href="#services"
              className="block text-gray-800 dark:text-gray-300 hover:text-[#32FF72] dark:hover:text-[#28D65A] px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="block text-gray-800 dark:text-gray-300 hover:text-[#32FF72] dark:hover:text-[#28D65A] px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium mx-auto"
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
