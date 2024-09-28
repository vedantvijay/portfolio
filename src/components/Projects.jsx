import React from "react";
import { ExternalLink, Github } from "lucide-react";

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

export default function Projects({ darkMode }) {
  return (
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
  );
}
