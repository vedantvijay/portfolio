import React, { useState } from "react";
import undrawPersonalText from "../assets/undraw_personal_text_re_vqj3.svg";

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

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
    alert("Form submitted successfully!");
    // Here you would typically send the form data to a server
  };

  return (
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
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
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
              src={undrawPersonalText}
              alt="Illustration of a person at a desk"
              className="max-w-full h-auto"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
