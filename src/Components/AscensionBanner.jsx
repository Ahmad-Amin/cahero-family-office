import React from "react";
// import { FaArrowRight } from "react-icons/fa";

const banners = [
  {
    image: "Images/image1.png",
    title: "Mental Health",
    description:
      "With over 2M users worldwide our platform has become a go to destination for those seeking quality services. Join CAHERO platform and experience the benifits.",
  },
  {
    image: "Images/image2.png",
    title: "Intro to Leadership",
    description:
      "Our investment solutions are designed to provide long-term financial growth. Discover how our trusted platform can elevate your portfolio.",
  },
  {
    image: "Images/image3.png",
    title: "Physical",
    description:
      "Our investment solutions are designed to provide long-term financial growth. Discover how our trusted platform can elevate your portfolio.",
  },
];

const AscensionBanner = () => {
  return (
      <div className="w-full">
        {/* <div className="w-full flex justify-end pr-5">
          <button className="flex flex-row items-center gap-2 font-poppins text-[#4675ff]">
            View all recommendations <FaArrowRight />
          </button>
        </div> */}
        <div className="w-full flex flex-wrap mt-2">
          {banners.map((banner, index) => (
            <div key={index} className="relative w-full sm:w-1/2 lg:w-1/3 overflow-hidden group">
              {/* Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-auto"
              />
  
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-[#2C2C56] opacity-50"></div>
  
              {/* Text Container */}
              <div className="absolute bottom-5 left-5 right-5 text-white transition-all duration-500 group-hover:bottom-16 h-20">
                <h1 className="text-2xl font-bold flex items-center">
                  <span className="bg-[#4675ff] h-6 w-2 mr-2"></span>{" "}
                  {banner.title}
                </h1>
                <p className="mt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {banner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AscensionBanner;
