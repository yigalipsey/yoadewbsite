"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const scrollToSection = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen
          ? "bg-white text-black"
          : "bg-transparent text-[#e5e5e5]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mx-auto h-16">
          {/* כפתור המבורגר */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#fca311] hover:text-[#fca311] focus:outline-none"
            >
              <svg
                className="h-8 w-8"
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
          <div className="flex items-center">
            <Link className="text-xl md:text-2xl font-bold" href="#home">
              <span
                className={`${
                  isScrolled || isOpen ? "text-[#8c52ff]" : "text-[#e5e5e5]"
                }`}
              >
                Yoad
              </span>
              <span className="text-[#fca311] ml-1">Lipsey</span>
            </Link>
          </div>

          {/* תפריט במצב רחב */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("examples")}
              className="hover:text-[#fca311] px-3 py-2 rounded-md text-sm font-medium"
            >
              דוגמאות
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#fca311] px-3 py-2 rounded-md text-sm font-medium"
            >
              קצת עליי
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-[#fca311] px-3 py-2 rounded-md text-sm font-medium"
            >
              שאלות ותשובות
            </button>
          </div>
        </div>
      </div>

      {/* תפריט במצב נייד */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#14213d] text-white z-40 flex flex-col items-start p-6">
          {/* כפתור סגירה */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-[#fca311] hover:text-white"
          >
            <svg
              className="h-8 w-8"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="space-y-6 mt-12 text-right w-full pr-6">
            <button
              onClick={() => scrollToSection("examples")}
              className="block text-3xl hover:text-[#fca311] px-3 py-2 rounded-md font-medium"
            >
              דוגמאות
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block text-3xl hover:text-[#fca311] px-3 py-2 rounded-md font-medium"
            >
              קצת עליי
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block text-3xl hover:text-[#fca311] px-3 py-2 rounded-md font-medium"
            >
              שאלות ותשובות
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
