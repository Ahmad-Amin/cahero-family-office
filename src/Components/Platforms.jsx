import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const platformsData = [
  {
    title: "Cahero Source",
    description:
      "We offer exclusive private investment opportunities to support high-potential projects and drive growth.",
  },
  {
    title: "Cahero Catalyst",
    description:
      "A strategic platform that accelerates innovative projects, turning ideas into reality.",
  },
  {
    title: "Cahero Unity",
    description:
      "Connecting investors and entrepreneurs to create a thriving ecosystem of collaboration and success.",
  },
  {
    title: "Cahero Ascension",
    description:
      "Empowering businesses with the resources they need to scale and dominate their industries.",
  },
  {
    title: "Cahero Legacy",
    description:
      "Building a sustainable future through strategic investments and long-term vision.",
  },
  {
    title: "Cahero Evolution",
    description:
      "Transforming industries with cutting-edge technology and disruptive innovation.",
  },
];

const Platforms = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-6 bg-[#0a0a0a]">
      {platformsData.map((platform, index) => (
        <div
          key={index}
          className="border border-[#3b3b3b] bg-[#161616] p-6 rounded-lg flex flex-row h-44"
        >
          <img
            src="Images/Cahero Source.png"
            alt={platform.title}
            className="w-12 h-12"
          />
          <div className="w-full content-end pb-6">
            <div className="w-2/3 ml-5 h-full">
              <h1 className="text-white text-lg font-semibold">
                {platform.title}
              </h1>
              <p className="text-[#b3b3b3] text-sm mt-2">
                {platform.description}
              </p>
            </div>
            <button className="flex justify-end w-full items-center gap-2 text-[#4675ff]">
              Explore <FaArrowCircleRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Platforms;
