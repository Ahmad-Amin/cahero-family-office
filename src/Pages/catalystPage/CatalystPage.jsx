import React from "react";
import Navbar from "../../Components/Navbar";
import DashboardCards from "../../Components/Graphs/DashboardCards";
import CatalystAchievements from "../../Components/CatalystAchievements";
import DonationProgress from "../../Components/Graphs/DonationProgress";
import ProjectsList from "../../Components/ProjectsList";
const CatalystPage = () => {
  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <div className="pt-20 w-full flex flex-col-reverse lg:flex-row items-center lg:items-center px-6 lg:px-16">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="font-impact text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-[#4675ff]">CAHERO</span> Catalyst
            <br />
            Gateway to High-Impact Investment
            <br />
            Opportunities
          </h1>
          <p className="font-barlow text-sm sm:text-base lg:text-md mt-4 opacity-60 max-w-lg">
            The Cahero Catalyst segment of Cahero Kingdom serves as the
            platform’s dedicated hub for social impact investments. This
            nonprofit arm focuses on fostering meaningful, long-term change by
            supporting initiatives that address pressing global challenges, such
            as environmental sustainability, education, public health, and
            poverty alleviation. Through Cahero Catalyst, Cahero Kingdom
            empowers its community of investors and donors to participate in
            philanthropic endeavors that deliver measurable and lasting benefits
            to society.
          </p>
          <button className="bg-[#4675ff] text-white px-5 py-3 text-lg font-bold rounded-lg mt-6 hover:bg-[#385dcc] transition duration-300">
            Visit Platform
          </button>
        </div>

        <div className="w-1/2 lg:w-1/3 flex justify-center mb-8 lg:mb-0 ml-28">
          <img
            src="Images/image-removebg-preview - 2025-01-10T144505.606 1.png"
            alt="Cahero F"
            className="w-3/4 sm:w-2/3 lg:w-full"
          />
        </div>
      </div>
      <div className="mt-10 mx-5">
        <DashboardCards />
      </div>

      <div className="w-full flex justify-center mt-10">
        <h1 className="text-white font-impact text-4xl text-center">
          <span className="text-5xl">Achievements</span>
          <br />
          CAHERO Catalyst
        </h1>
      </div>
      <div className="mt-5">
        <CatalystAchievements />
      </div>
      <div className="mt-10 mx-5">
        <DonationProgress />
      </div>
      <div className="mt-10 mx-5">
        <ProjectsList />
      </div>
    </div>
  );
};

export default CatalystPage;
