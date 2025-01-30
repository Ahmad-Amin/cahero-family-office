import React from "react";
const stats = [
  {
    achievement: "16",
    title: "Funding Rounds",
  },

  {
    achievement: "$656 M",
    title: "Total Fundings",
  },

  {
    achievement: "5",
    title: "Aquisition Recorded",
  },

  {
    achievement: "$464 M",
    title: "Aquisition Amount",
  },
];
const SourceAchievements = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row flex-wrap my-20 px-6 lg:px-16 text-center lg:text-left">
      {/* Title Section */}
      <div className="w-full lg:w-2/5 flex items-center justify-center lg:justify-start mb-10 lg:mb-0">
        <h1 className="text-white text-3xl sm:text-5xl font-impact w-full sm:w-2/3">
          This weekend on
          <br />
          CAHERO
          <br />
          <span className="text-[#4675ff]">Source</span>
        </h1>
      </div>

      {/* Stats Grid */}
      <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-white text-center sm:text-left">
            <h2 className="text-4xl sm:text-6xl font-poppins">{stat.achievement}</h2>
            <h3 className="text-2xl sm:text-2xl text-white font-poppins">
              {stat.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourceAchievements;
