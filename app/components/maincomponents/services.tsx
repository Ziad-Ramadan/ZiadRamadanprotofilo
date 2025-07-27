import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
export default function Services() {
  return (
    <div className="bg-black">
      <div className=" items-center justify-center">
        <h1 className=" text-white text-6xl text-center justify-center mb-2 font-semibold ml-8 inline-block">
          My Services
        </h1>
        <br />
        <br />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 hover:bg-[#ff004e] transition-all duration-500 rounded-2xl border border-gray-800 hover:border-[#ff004e] transform w-[350px] h-[350px] group">
              <div className="flex mx-9 mt-9">
                <FaCode className="text-white group-hover:text-white w-[90px] h-[90px] transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h2 className="text-xl text-white font-bold mb-2 group-hover:text-white transition-colors duration-500">
                Web Development
                </h2>
                <p className="text-white group-hover:text-white transition-colors duration-500">
                Proficient in building responsive and dynamic web applications using React, Next.js, and Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 hover:bg-[#ff004e] transition-all duration-500 rounded-2xl border border-gray-800 hover:border-[#ff004e] transform w-[350px] h-[350px] group">
              <div className="flex mx-9 mt-9">
                <FaCode className="text-white group-hover:text-white w-[90px] h-[90px] transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h2 className="text-xl text-white font-bold mb-2 group-hover:text-white transition-colors duration-500">
                Enviroment and vision control
                                </h2>
                <p className="text-white group-hover:text-white transition-colors duration-500">
                Skilled in vision control and work and collabrate with team members
                </p>
              </div>
            </div>
            <div className="bg-gray-800 hover:bg-[#ff004e] transition-all duration-500 rounded-2xl border border-gray-800 hover:border-[#ff004e] transform w-[350px] h-[350px] group">
              <div className="flex mx-9 mt-9">
                <FaSearch className="text-white group-hover:text-white w-[90px] h-[90px] transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h2 className="text-xl text-white font-bold mb-2 group-hover:text-white transition-colors duration-500">
                Backend : Databases
                                </h2>
                <p className="text-white group-hover:text-white transition-colors duration-500">
                Experienced in integrating Firebase for real-time applications and working with databases like MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
