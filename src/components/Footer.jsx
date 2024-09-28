import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`${darkMode ? "bg-gray-900" : "bg-gray-900"} text-white py-8`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4">Made with ❤️ by Vedant Vijay</p>
        <p className="mb-4">
          <a
            href="mailto:vedantvijaysingh7980@gmail.com"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            vedantvijaysingh7980@gmail.com
          </a>
        </p>
        <div className="flex justify-center space-x-4">
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
    </footer>
  );
}
