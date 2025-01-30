import React from "react";
import Navbar from "../../Components/Navbar";
import DashboardCards from "../../Components/Graphs/DashboardCards";
import SourceAchievements from "../../Components/SourceAchievements";
import PerformanceGraphs from "../../Components/Graphs/PerformanceGraphs";
import PlatformList from "../../Components/PlatformsList";

const SourcePage = () => {
  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <div className="pt-20 w-full flex flex-col-reverse lg:flex-row items-center lg:items-center px-6 lg:px-16">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="font-impact text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-[#4675ff]">CAHERO</span> Source
            <br />
            Gateway to High-Impact Investment
            <br />
            Opportunities
          </h1>
          <p className="font-barlow text-sm sm:text-base lg:text-md mt-4 opacity-60 max-w-lg">
            The Cahero Source segment of Cahero Kingdom is the gateway to
            private investment opportunities, offering participants access to a
            diverse portfolio of high-impact, growth-oriented ventures. Designed
            for sophisticated investors, Cahero Source focuses on strategic
            verticals that align with global market trends and the platform’s
            mission of sustainability, innovation, and social impact. By
            connecting individuals and institutions with unique investment
            opportunities, Cahero Source empowers them to achieve financial
            success while contributing to positive societal change.
          </p>
          <button className="bg-[#4675ff] text-white px-5 py-3 text-lg font-bold rounded-lg mt-6 hover:bg-[#385dcc] transition duration-300">
            Visit Platform
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="Images/Investments and financial growth.png"
            alt="Cahero F"
            className="w-3/4 sm:w-2/3 lg:w-full"
          />
        </div>
      </div>
      <div className="mt-10 mx-5">
        <DashboardCards />
      </div>

      <div className="w-full flex justify-center mt-10">
        <h1 className="text-white font-impact text-4xl text-center"><span className="text-5xl">Achievements</span><br/>
        CAHERO Source</h1>
      </div>
      <div className="mt-5">
        <SourceAchievements/>
      </div>
      <div className="mt-10 mx-10">
      <PerformanceGraphs/>
      </div>

      <div className="mt-10 mx-10">
        <PlatformList/>
      </div>
    </div>
  );
};

export default SourcePage;
