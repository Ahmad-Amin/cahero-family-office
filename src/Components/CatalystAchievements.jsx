import React from "react";
const stats = [
  {
    achievement: "1.5M",
    title: "Annual Donations",
  },

  {
    achievement: "793",
    title: "Number of Donations",
  },

  {
    achievement: "198%",
    title: "Year on year growth",
  },

  {
    achievement: "92%",
    title: "Retention rate",
  },
  {
    achievement: "2+",
    title: "Years with CAHERO",
  },
  {
    achievement: "28",
    title: "Total Donations done",
  },
];
const CatalystAchievements = () => {
  return (
    <div className="w-full px-10">
      <div className="w-full flex flex-col lg:flex-row flex-wrap lg:px-16 text-center lg:text-left bg-[#0a0a0a] py-10 rounded-xl">
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-white text-center sm:text-left">
              <h2 className="text-4xl sm:text-6xl font-poppins">
                {stat.achievement}
              </h2>
              <h3 className="text-2xl sm:text-2xl text-white font-poppins">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalystAchievements;
