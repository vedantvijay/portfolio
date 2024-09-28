import React, { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-800 bg-opacity-70" : "bg-white bg-opacity-70"
      } backdrop-filter backdrop-blur-lg fixed w-full z-10 shadow-lg transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Navbar content */}
    </nav>
  );
}
