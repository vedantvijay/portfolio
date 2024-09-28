import React from "react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${darkMode ? "bg-gray-900" : "bg-gray-800"} text-white py-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Vedant Vijay
            </h3>
            <p className="text-gray-300 mb-4">
              A passionate developer creating amazing web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">
              Get in Touch
            </h4>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2 text-cyan-400" />
              <a
                href="mailto:vedantvijaysingh7980@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                vedantvijaysingh7980@gmail.com
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {currentYear} Vedant Vijay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
