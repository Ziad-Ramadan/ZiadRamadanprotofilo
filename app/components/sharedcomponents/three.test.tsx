import React from 'react';
import Image from 'next/image';
import img1 from '../Images/788.png';
import img2 from '../Images/build.png';
import img3 from '../Images/xo1.png';
import img5 from '../Images/457.png';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.png';
import img8 from '../Images/img8.png';
import img92 from '../Images/img92.png'
export default function Projects() {
  const projects = [
    {
      title: "Discord Clone",
      description: "Discord Clone Using Next.js, TypeScript, and CSS.",
      image: img5,
      status: "In Progress",

    },
    {
      title: "Sentiment Analysis App",
      description: "A machine learning model for analyzing customer sentiment using BERT and Streamlit.",
      image: img8,
      status: "Finished",

    },
    {
      title: "Delta Robot Control",
      description: "A robotics project integrating Arduino and ROS for precise motion control.",
      image: img6,
      status: "Finished",

    },
    {
      title: "XO Game",
      description: "Using C# - Play vs another player or CPU.",
      image: img3,
      status: "Finished",

    },
    {
        title: "Voting System",
        description: "Using React, Tailwind and Firebase.",
        image: img1,
        status: "Finished",

    },
    {
        title: "Computer Gardian",
        description: "Build Your Computer Using Html, CSS, JavaScript, and PHP.",
        image: img2,
        status: "Finished",
    },
    {
        title: "Deyaar Factory",
        description: "Deyaar Factory website using Html, css and js",
        image: img7,
        status: "Finished",
    },
    {
      title: "Total Order Multicast",
      description: "Develop a distributed file sharing system using Java RMI.The system contains n nodes where each node stores some files and can send/receive files of any type.",
      image: img92,
      status: "Finished",
  },
  ];


  return (
    <div className='bg-black mx-auto py-12'>
    <div className="container mx-auto py-12">
      <h2 className="text-5xl text-white font-bold text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800  shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl text-white font-semibold">{project.title}</h3>
              <p className="text-white mt-2">{project.description}</p>
              <a
                // href={project.respond}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-block px-4 py-2 text-sm font-medium rounded-lg transition ${
                  project.status === "Finished"
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-yellow-500 text-black hover:bg-yellow-600"
                }`}
              >
                {project.status}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
