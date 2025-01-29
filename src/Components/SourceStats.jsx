import React from 'react';


const stats = [
  {
    value: "2M",
    title: "Users and Counting",
    description:
      "With over 2M users worldwide, our platform has become a go-to destination for those seeking quality services. Join CAHERO and experience the benefits.",
  },
  {
    value: "956+ M",
    title: "Shares and Investments",
    description:
      "With over 2M users worldwide, our platform has become a go-to destination for those seeking quality services. Join CAHERO and experience the benefits.",
  },
  {
    value: "125%",
    title: "Exceeding & Success Rate",
    description:
      "With over 2M users worldwide, our platform has become a go-to destination for those seeking quality services. Join CAHERO and experience the benefits.",
  },
  {
    value: "4.9",
    title: "Our users love us",
    description:
      "With over 2M users worldwide, our platform has become a go-to destination for those seeking quality services. Join CAHERO and experience the benefits.",
  },
];

const SourceStats = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row flex-wrap my-20 px-6 lg:px-16 text-center lg:text-left">
      {/* Title Section */}
      <div className="w-full lg:w-2/5 flex items-center justify-center lg:justify-start mb-10 lg:mb-0">
        <h1 className="text-white text-3xl sm:text-5xl font-impact w-full sm:w-2/3">
          Successful Stats <br /> of <span className="text-[#4675ff]">CAHERO</span><br/>Source
        </h1>
      </div>

      {/* Stats Grid */}
      <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-white text-center sm:text-left">
            <h2 className="text-4xl sm:text-5xl font-impact">{stat.value}</h2>
            <h3 className="text-2xl sm:text-3xl text-[#4675ff] font-impact">{stat.title}</h3>
            <p className="text-sm font-barlow opacity-60 max-w-xs mx-auto sm:mx-0">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourceStats;