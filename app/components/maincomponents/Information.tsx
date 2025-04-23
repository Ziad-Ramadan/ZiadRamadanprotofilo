"use client";
import React, { useState } from 'react';
export default function Information() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const toggleSection = (section: string) => {
    if (openSection === section) {
      setIsAnimating(true);
      setTimeout(() => {
        setOpenSection(null);
        setIsAnimating(false);
      }, 300); 
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setOpenSection(section);
        setIsAnimating(false);
      }, 300); 
    }
  };

  return (
    <div className='flex flex-col items-center justify-center md:flex-row md:items-start md:justify-center gap-8 pt-10'>
      
      <div className='border rounded-lg shadow-md overflow-hidden w-full md:w-1/3 cursor-pointer' onClick={() => toggleSection('education')}>
        <div className='bg-gray-700 text-white py-2 px-4'>
          My Education
        </div>
        {openSection === 'education' && (
          <div className={`bg-white p-4 transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <ol className={`list-none space-y-4 transition-opacity duration-300 ease-in-out ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
                Bachelor of Computer Science
                <br /> Arab Academy for Science and Technology
              </li>
              <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
                Dual Degree in Computer Science 
                <br /> University of Northampton
              </li>
            </ol>
          </div>
        )}
      </div>

      <div className='border rounded-lg shadow-md overflow-hidden w-full md:w-1/3 cursor-pointer' onClick={() => toggleSection('experience')}>
        <div className='bg-gray-700 text-white py-2 px-4'>
          My Experience
        </div>
        {openSection === 'experience' && (
          <div className={`bg-white p-4 transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <ol className={`list-none space-y-4 transition-opacity duration-300 ease-in-out ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
                ITI Open Source Development
                <br /> Summer Internship
              </li>
              <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
                Front-End Development: Next.js, Tailwind CSS, and JavaScript.
                <br /> Back-End Development: Skilled in PHP with experience using the Laravel framework for website development.
              </li>
              <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
                Data Scientist in Python
                <br /> Datacamp Scholarship
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
