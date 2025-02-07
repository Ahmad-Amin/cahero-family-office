import React from "react";
import Navbar from "../../Components/Navbar";
import Updates from "../../Components/Updates";
import Platforms from "../../Components/Platforms";
import SourceBanner from "../../Components/SourceBanner";
import SourceStats from "../../Components/SourceStats";
import AscensionBanner from "../../Components/AscensionBanner";
import AscensionStats from "../../Components/AscensionStats";

const HomePage = () => {
  return (
    <div className="text-white min-h-screen">
      <Navbar />

      <div className="pt-20 w-full flex flex-col-reverse lg:flex-row items-center lg:items-center px-6 lg:px-16">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="font-impact text-3xl sm:text-4xl lg:text-5xl">
            Transforming Growth Through <br />
            <span className="text-[#4675ff]">Innovation</span> and{" "}
            <span className="text-[#4675ff]">Impact</span>
          </h1>
          <p className="font-barlow text-sm sm:text-base lg:text-md mt-4 opacity-60 max-w-lg">
            Cahero Family Office is a revolutionary platform that combines the
            expertise of the Cahero Family Office and Kingdom to create a
            holistic framework for personal, professional, and financial growth.
            Designed to meet the needs of sophisticated investors,
            professionals, and forward-thinking individuals, the platform offers
            a seamless blend of investment opportunities, self-improvement
            resources, and meaningful networking experiences. It is a dynamic
            ecosystem where financial returns and social impact intersect,
            empowering participants to achieve success across multiple
            dimensions.
          </p>
          <button className="bg-[#4675ff] text-white px-5 py-3 text-lg font-bold rounded-lg mt-6 hover:bg-[#385dcc] transition duration-300">
            Visit Platform
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="Images/Cahero F.png"
            alt="Cahero F"
            className="w-3/4 sm:w-2/3 lg:w-full"
          />
        </div>
      </div>

      <div className="w-full mt-16 px-6 lg:px-16">
        <Updates />
      </div>

      <div className="w-full mt-10 text-center px-6">
        <h1 className="font-impact text-2xl sm:text-3xl">Our Platforms</h1>
        <p className="font-barlow opacity-60 text-sm sm:text-lg">
          We offer exclusive private investment opportunities to support
          high-potential <br/>projects and drive growth.
        </p>
      </div>
      <Platforms />

      <div className="w-full mt-10 text-center px-6">
        <h1 className="font-impact text-2xl sm:text-3xl">
          CAHERO Source Latest Updates
        </h1>
        <p className="font-barlow opacity-60 text-sm sm:text-lg">
          We offer exclusive private investment opportunities to support
          high-potential <br/>projects and drive growth.
        </p>
      </div>
      <SourceBanner />
      <SourceStats />

      <div className="w-full mt-20 text-center px-6">
        <h1 className="font-impact text-2xl sm:text-3xl">
          CAHERO Ascension Latest Updates
        </h1>
        <p className="font-barlow opacity-60 text-sm sm:text-lg">
          We offer exclusive private investment opportunities to support
          high-potential <br/>projects and drive growth.
        </p>
      </div>
      <AscensionBanner />
      <AscensionStats />
    </div>
  );
};

export default HomePage;
