"use client"
import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs
      .send(
        "service_zqyjk89",
        "template_qkt6ruc",
        formData,
        "Hn0PBKLBqjikryQnr"
      )
      .then(() => {
        alert("Email Sent Successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form after sending
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again.");
      });
  };
  return (
    <div className="flex flex-col md:flex-row bg-transparent items-center justify-center min-h-screen p-6 space-y-8 md:space-y-0 md:space-x-6">
      <div className="flex-1 md:flex-[0.4] text-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

        <a className="flex items-center space-x-3 mb-4" href='mailto:ziadramadan2046@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-red-500 w-5" />
          <span>ziadramadan2046@gmail.com</span>
        </a>

        <a href="tel:01117911806" className="flex items-center space-x-3 mb-2">
          <FontAwesomeIcon icon={faPhone} size="lg" className="text-red-500 w-5" />
          <span>01117911806</span>
        </a>

        <a href="tel:01068109943" className="flex items-center space-x-3 mb-4">
          <FontAwesomeIcon icon={faPhone} size="lg" className="text-red-500 w-5" />
          <span>01068109943</span>
        </a>

        <div className="flex space-x-4 mt-6 mb-10">
          {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl hover:text-gray-500 transition duration-300" />
          </a> */}
          <a href="https://github.com/Ziad-Ramadan" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-gray-500 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/ziad-ramadan-kamel/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-blue-400 hover:text-blue-500 transition duration-300" />
          </a>
        </div>

        <a target='_blank' href='https://drive.google.com/file/d/1f6Q-MXY4RHRNyWiEuJMZzVCN-4sUq8FM/view?usp=sharing' className=" w-full md:w-auto p-3 bg-red-600 hover:bg-red-700 rounded-lg transition duration-300">
          Download CV
        </a>
      </div>

      <div className="flex-1 md:flex-[0.6] text-white p-8 rounded-lg bg-transparent">
      <form onSubmit={sendEmail}>
        <label className="block mb-2 font-semibold">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className="w-full py-2 px-3 mb-4 bg-slate-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm select-none"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="block mb-2 font-semibold">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className="w-full py-2 px-3 mb-4 bg-slate-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm select-none"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="block mb-2 font-semibold">Your Message:</label>
        <textarea
          placeholder="Your message"
          className="w-full h-32 py-2 px-3 mb-6 bg-slate-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm select-none"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full p-3 text-lg bg-red-600 hover:bg-red-700 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
