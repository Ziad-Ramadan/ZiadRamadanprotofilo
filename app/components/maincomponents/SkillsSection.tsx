import React from "react";

export default function SkillsSection() {
  return (
    <section className="py-16 bg-transparent text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Why Hire Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Techincal Skills</h3>
            <ul className="list-disc ml-5 list-inside text-white space-y-2">
              <li>
                ⚛️ React & Next.js: Building dynamic, high-performance web
                applications.
              </li>
              <li>
                🎨 Tailwind CSS & CSS: Crafting responsive and visually
                appealing UI designs.
              </li>
              <li>
                🛠️ Firebase & MongoDB: Managing real-time databases and backend
                services.
              </li>
              <li>
                💻 TypeScript & JavaScript: Writing clean, maintainable, and
                scalable code.
              </li>
              <li>
                🐍 Python & Machine Learning: Analyzing data and building
                AI-powered solutions.
              </li>
              <li>
                🖥️ Git & GitHub: Version control and collaborative development.
              </li>
              <li>
                🔌 Arduino & ROS: Hardware integration and robotics control.
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Soft Skills</h3>
            <ul className="list-disc ml-5 list-inside text-white space-y-2">
              <li>
                💡 Problem Solver: I thrive on finding efficient solutions to
                complex problems.
              </li>
              <li>
                🎯 Detail-Oriented: I pay close attention to details, ensuring
                high-quality code and design.
              </li>
              <li>
                🚀 Adaptable: I quickly learn new technologies and adapt to
                changing project requirements.
              </li>
              <li>
                🤝 Team Player: I communicate effectively and work well within
                teams to achieve project goals.
              </li>
              <li>
                📈 Passionate Learner: I am committed to continuous learning and
                staying updated with industry trends.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
