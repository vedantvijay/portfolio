"use client"
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ExternalLink,
  Mail,
  Phone,
  ChevronRight,
  Moon,
  Sun,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

const skills = ["HTML", "CSS", "JavaScript", "React", "C++", "DSA", "Python"];

const projects = [
  {
    title: "Music Player",
    description:
      "A sleek and responsive music player application with playlist management.",
    liveDemo: "https://tranquil-puppy-e38f58.netlify.app",
    code: "https://github.com/vedantvijay/music",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2 and its key features.",
    liveDemo: "https://project2-demo.com",
    code: "https://github.com/vedantvijay/project2",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a server
  };

  useEffect(() => {
    const savedDarkMode = JSON.parse(
      localStorage.getItem("darkMode") || "false"
    );
    setDarkMode(savedDarkMode);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const gradientStyle = {
    background: darkMode
      ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))`
      : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3))`,
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

      <main>
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
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-48 object-cover"
                />
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
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-colors duration-200"
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
                          ? "text-cyan-300 bg-gray-700 hover:bg-gray-600"
                          : "text-blue-600 bg-blue-100 hover:bg-blue-200"
                      } transition-colors duration-200`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } text-gray-100 p-8 rounded-xl shadow-2xl max-w-6xl mx-auto`}
          >
            <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Let's Connect
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <form
                onSubmit={handleSubmit}
                className="w-full md:w-1/2 space-y-4"
              >
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-1/2 p-3 rounded-md ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-800"
                    } focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-1/2 p-3 rounded-md ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-800"
                    } focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full p-3 rounded-md ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  } focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none`}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src={`/src/assets/undraw_personal_text_re_vqj3.svg`}
                  alt="Illustration of a person at a desk"
                  className="max-w-full h-auto"
                  width={400}
                  height={300}
                />
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
    </div>
  );
}
