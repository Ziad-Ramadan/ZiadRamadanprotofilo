"use client";
import { useState } from "react";
import Image from "next/image";
import Ziad from "../../Images/1707246690922.jpeg";
export default function Aboutme() {
  const [selectedContent, setSelectedContent] = useState<JSX.Element | null>(
    null
  );

  // const skills = (
  //   <span>
  //     React, Next.js, Tailwind CSS, TypeScript, JavaScript, PHP, Laravel
  //   </span>
  // );
  const experience = (
    <span>
      Internship at ITI in Open Source Development.
      <br />
      Projects in Web Development, Sentiment Analysis, Robotics.
      <br />
      Data scientist in Python track at Datacamp.
      <br />
      Microsoft Machine Learning Engineer Track from Depi.
    </span>
  );
  const education = (
    <span>
      Bachelor Degree in Computer Science:
      <br />
      University of Northampton.
      <br />
      Collage of Computing and Information Technology,<br/>
      Arab Academy for Science and Technology.
    </span>
  );

  const handleDropdownClick = (content: JSX.Element) => {
    setSelectedContent(content);
  };

  return (
    <div className="flex flex-col md:flex-row bg-transparent justify-center h-auto md:h-[500px] mt-8 space-y-4 md:space-y-0 md:space-x-4 p-4">
      <div className="flex flex-1 items-center justify-center text-white rounded-lg  hidden md:flex">
        <Image
          style={{marginTop:"180px",}}
          src={Ziad}
          alt="ZiadRamadan"
          className="h-[350px] w-[350px] mb-60 rounded-md"
        />
      </div>

      <div className="flex-1 flex flex-col items-start text-white p-8 rounded-lg  relative">
        <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
        <p className="text-sm md:text-base mt-4 mb-4">
          I’m Ziad Ramadan, a Computer Science graduate with a Bachelor Degree
          from the University of Northampton and the Arab Academy for Science
          and Technology. I specialize in front-end development using Reactjs,
          Next.js, Tailwind CSS, and JavaScript, while also bringing strong
          backend skills with PHP and Laravel. My experience includes an ITI
          Summer Internship in Open Source Development and a Data Science
          scholarship from Datacamp, where I honed my Python skills for data
          analysis. Passionate about creating impactful solutions, I have worked
          on projects across web development, sentiment analysis, and robotics,
          constantly seeking to innovate and expand my expertise.
        </p>

        <div className="flex gap-2 md:gap-5 mb-4">
          {/* <button
            onClick={() => handleDropdownClick(skills)}
            className="text-sm md:text-lg font-semibold py-2 rounded-full w-24 md:w-28 shadow-lg shadow-gray-700 bg-red-600 text-white"
          >
            Skills
          </button> */}
          <button
            onClick={() => handleDropdownClick(experience)}
            className="text-sm md:text-lg font-semibold py-2 rounded-full w-24 md:w-28 shadow-lg shadow-gray-700 bg-red-600 text-white"
          >
            Experience
          </button>
          <button
            onClick={() => handleDropdownClick(education)}
            className="text-sm md:text-lg font-semibold py-2 rounded-full w-24 md:w-28 shadow-lg shadow-gray-700 bg-red-600 text-white"
          >
            Education
          </button>
        </div>

        {selectedContent && (
          <div className="mt-4">
            <p className="text-white text-sm md:text-base">{selectedContent}</p>
          </div>
        )}
      </div>
    </div>
  );
}
