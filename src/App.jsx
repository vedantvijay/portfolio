import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

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
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About darkMode={darkMode} />
        <Skills skills={skills} darkMode={darkMode} />
        <Projects projects={projects} darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
