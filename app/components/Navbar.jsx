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

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  mx-auto h-16">
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
              <span className="text-[#e5e5e5]">Yoad</span>
              <span className="text-[#fca311] ml-1">Lipsey</span>
            </Link>
          </div>

          {/* קישורים לתפריט במצב מסך רחב */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#examples"
              className="text-black hover:text-[#fca311] px-3 py-2 rounded-md text-sm font-medium"
            >
              Examples
            </Link>
            <Link
              href="#catalogs"
              className="text-black hover:text-[#fca311] px-3 py-2 rounded-md text-sm font-medium"
            >
              Catalogs
            </Link>
            <Link
              href="#services"
              className="text-black hover:text-[#fca311] px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-black hover:text-[#fca311] px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* תפריט במצב נייד */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#examples"
              className="block text-black hover:text-[#fca311] px-3 py-2 rounded-md text-base font-medium"
            >
              Examples
            </Link>
            <Link
              href="#catalogs"
              className="block text-black hover:text-[#fca311] px-3 py-2 rounded-md text-base font-medium"
            >
              Catalogs
            </Link>
            <Link
              href="#services"
              className="block text-black hover:text-[#fca311] px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="block text-black hover:text-[#fca311] px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
