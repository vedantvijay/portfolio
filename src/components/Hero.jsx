import React from "react";
import { ChevronRight } from "lucide-react";

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          Welcome to My Portfolio
        </h1>
        <p
          className={`text-xl ${
            darkMode ? "text-gray-300" : "text-gray-600"
          } mb-8`}
        >
          I'm Vedant Vijay, a passionate developer creating amazing web
          experiences.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-colors duration-200"
        >
          Get in touch
          <ChevronRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
