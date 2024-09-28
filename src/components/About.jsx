import React from "react";

export default function About({ darkMode }) {
  return (
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
          I'm a dedicated and enthusiastic developer with a strong passion for
          creating innovative solutions. With expertise in various programming
          languages and technologies, I strive to deliver high-quality and
          efficient code. I'm always eager to learn new skills and take on
          challenging projects.
        </p>
      </div>
    </section>
  );
}
