import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "C++", "DSA", "Python"];

export default function Skills({ darkMode }) {
  return (
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
  );
}
