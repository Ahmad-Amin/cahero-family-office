import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ProjectsList = () => {
  const companies = [
    {
      id: 1,
      name: "Clean Water for All",
      description:
        "We install wells and filters to provide clean drinking water to communities. Your donation ensures families have access to safe water",
      revenue: "$520",
      funding: "$570.00",
      image: "/Images/Rectangle 22906.png",
    },
    {
      id: 2,
      name: "AI for Disaster Warnings",
      description:
        "We use AI technology to predict natural disasters and warn people in advance.",
      revenue: "$520",
      funding: "$570.00",
      image: "/Images/Rectangle 22907.png",
    },
    {
      id: 3,
      name: "Vaccination for Children",
      description:
        "We organize free vaccination drives to protect children from diseases. You can help give a child a healthier, safer start in life.",
      revenue: "$520",
      funding: "$570.00",
      image: "/Images/Rectangle 22908.png",
    },
    {
      id: 4,
      name: "Wind Energy for Small Towns",
      description:
        "setting up wind turbines to provide electricity for rural communities. Invest in a green energy project that brightens lives sustainably.",
      revenue: "$520",
      funding: "$570.00",
      image: "/Images/Rectangle 22909.png",
    },
    {
      id: 5,
      name: "Solar-Powered Internet Stations",
      description:
        "We set up solar-powered stations to bring internet access to remote areas. Help bridge the digital divide by supporting internet access.",
      revenue: "$520",
      funding: "$570.00",
      image: "/Images/Rectangle 22910.png",
    },
    {
      id: 6,
      name: "Hydropower Mini-Plants",
      description:
        "Building small dams to make electricity from rivers. Your contribution powers villages while preserving nature.",
      revenue: "$520",
      funding: "$570.00",
      image: "/Images/Rectangle 22911.png",
    },
  ];

  return (
    <div>
      <h1 className="text-white font-impact text-2xl my-5">Recommended Projects</h1>
      <div className="p-4 rounded-2xl shadow-lg bg-[#0d0d0d] text-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[#839cc7] text-sm">
            <th className="py-2">No</th>
            <th className="p-4">Project Name</th>
            <th className="py-2">Funded Amount</th>
            <th className="py-2">Donation Required</th>
            {/* <th className="py-2">Total Investments</th> */}
            {/* <th className="py-2">Growth</th> */}
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={company.id}>
                <td className="py-3 text-sm text-gray-400">{`0${
                  index + 1
                }.`}</td>
                <td className="py-3">
                  <div className="flex items-center space-x-3 px-4">
                    {/* <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-sm font-bold text-white">
                    A
                  </div> */}
                    <img src={company.image} alt="" />
                    <div>
                      <h3 className="text-[#dcdcdc] font-impact">
                        {company.name}
                      </h3>
                      <p className="text-sm text-[#b6b6b6]">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-sm">{company.revenue}</td>
                {/* <td className="py-3 text-sm">{company.investments}</td> */}
                <td className="py-3 text-sm">{company.funding}</td>

                <td>
                    <div className="w-8 h-8 rounded-full bg-[#373636] flex justify-center items-center text-[#a0a0a0]">
                        <IoIosArrowForward/>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-center text-[#6a55ea] text-md font-poppins mt-2">
            View all Projects  
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
