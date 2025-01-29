import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const platformsData = [
  {
    image: "Images/Cahero Source.png",
    title: "Cahero Source",
    description:
      "We offer exclusive private investment opportunities to support high-potential projects and drive growth.",
  },
  {
    image: "Images/Cahero C.png",
    title: "Cahero Catalyst",
    description:
      "A strategic platform that accelerates innovative projects, turning ideas into reality.",
  },
  {
    image: "Images/Cahero Unity_512x512 for any favicon 2 1.png",
    title: "Cahero Unity",
    description:
      "Connecting investors and entrepreneurs to create a thriving ecosystem of collaboration and success.",
  },
  {
    image: "Images/Cahero A.png",
    title: "Cahero Ascension",
    description:
      "Empowering businesses with the resources they need to scale and dominate their industries.",
  },
  {
    image: "Images/Cahero L.png",
    title: "Cahero Legacy",
    description:
      "Building a sustainable future through strategic investments and long-term vision.",
  },
  {
    image: "Images/Cahero Unity_512x512 for any favicon 2 1.png",
    title: "Cahero Evolution",
    description:
      "Transforming industries with cutting-edge technology and disruptive innovation.",
  },
];

const Platforms = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-6 bg-black">
      {platformsData.map((platform, index) => (
        <div
          key={index}
          className="border border-[#3b3b3b] bg-[#0a0a0a] p-6 rounded-lg flex flex-row h-44"
        >
          <img
            src={platform.image}
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
