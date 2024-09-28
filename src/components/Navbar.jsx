import React, { useState } from "react";
import { Menu, Sun, Moon, X } from "lucide-react";

export default function Navbar({ darkMode, toggleDarkMode, isNavbarVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-800 bg-opacity-70" : "bg-white bg-opacity-70"
      } backdrop-filter backdrop-blur-lg fixed w-full z-10 shadow-lg transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
              VVS
            </span>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <a
              href="#home"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-900 hover:text-cyan-600"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-900 hover:text-cyan-600"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-900 hover:text-cyan-600"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-900 hover:text-cyan-600"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-900 hover:text-cyan-600"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Contact
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-cyan-300"
                  : "bg-gray-200 text-gray-800"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="sm:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-cyan-300"
                  : "bg-gray-200 text-gray-800"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500`}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className={`block px-3 py-2 text-base font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`block px-3 py-2 text-base font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`block px-3 py-2 text-base font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`block px-3 py-2 text-base font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`block px-3 py-2 text-base font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
