import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ExternalLink,
  Mail,
  Phone,
  ChevronRight,
  Moon,
  Sun,
} from "lucide-react";

const skills = ["HTML", "CSS", "JavaScript", "React", "C++", "DSA", "Python"];

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and its key features.",
    liveDemo: "https://project1-demo.com",
    code: "https://github.com/vedantvijay/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2 and its key features.",
    liveDemo: "https://project2-demo.com",
    code: "https://github.com/vedantvijay/project2",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  useEffect(() => {
    const savedDarkMode = JSON.parse(
      localStorage.getItem("darkMode") || "false"
    );
    setDarkMode(savedDarkMode);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: darkMode
      ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), rgba(16, 185, 129, 0.2))`
      : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.3))`,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div style={gradientStyle} />
      <nav
        className={`${
          darkMode ? "bg-gray-800 bg-opacity-70" : "bg-white bg-opacity-70"
        } backdrop-filter backdrop-blur-lg fixed w-full z-10 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Vedant Vijay
              </span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a
                href="#home"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-900 hover:text-blue-600"
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-900 hover:text-blue-600"
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                About
              </a>
              <a
                href="#skills"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-900 hover:text-blue-600"
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                Skills
              </a>
              <a
                href="#projects"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-900 hover:text-blue-600"
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-900 hover:text-blue-600"
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                Contact
              </a>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-gray-700 text-yellow-300"
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
                    ? "bg-gray-700 text-yellow-300"
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
                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
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

      <main>
        <section
          id="home"
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
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
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Get in touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>

        <section
          id="about"
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-xl p-8`}
          >
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              } leading-relaxed`}
            >
              I'm a dedicated and enthusiastic developer with a strong passion
              for creating innovative solutions. With expertise in various
              programming languages and technologies, I strive to deliver
              high-quality and efficient code. I'm always eager to learn new
              skills and take on challenging projects.
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform duration-200`}
              >
                <span
                  className={`text-lg font-semibold ${
                    darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-xl overflow-hidden`}
              >
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      darkMode ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } mb-4`}
                  >
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                        darkMode
                          ? "text-blue-400 bg-blue-900 hover:bg-blue-800"
                          : "text-blue-600 bg-blue-100 hover:bg-blue-200"
                      } transition-colors duration-200`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-xl p-8`}
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <Phone
                  className={`mr-4 h-6 w-6 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <span className="text-lg">+91 6290 839 449</span>
              </div>
              <div className="flex items-center">
                <Mail
                  className={`mr-4 h-6 w-6 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <a
                  href="mailto:vedant.vijay@example.com"
                  className={`text-lg ${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-800"
                  } transition-colors duration-200`}
                >
                  vedant.vijay@example.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={`${
          darkMode ? "bg-gray-900" : "bg-gray-900"
        } text-white py-8`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 Vedant Vijay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
