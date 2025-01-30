import React from "react";

const PlatformList = () => {
  const companies = [
    {
      id: 1,
      name: "Cahero Unity",
      description:
        "A diversified investment platform fostering sustainable growth across fashion, real estate, technology, and conservation.",
      revenue: "$520",
      investments: 230,
      funding: "$570.00",
      growth: "+9%",
      image: "/Images/Private Equity.png"
    },
    {
      id: 2,
      name: "Cahero Catalyst",
      description:
        "A private investment platform connecting donors with nonprofits to create impactful social and environmental change.",
      revenue: "$520",
      investments: 120,
      funding: "$570.00",
      growth: "+9%",
      image: "/Images/Cahero Catalyst_512x512 for any favicon 1 1.png"
    },
    {
      id: 3,
      name: "Cahero Legacy",
      description:
        "Empowering wealth-building and legacy planning through financial education and personalized coaching.",
      revenue: "$520",
      investments: 45,
      funding: "$570.00",
      growth: "+9%",
      image: "/Images/Cahero Legacy (1).png"
    },
    {
      id: 4,
      name: "Cahero Evolution",
      description:
        "A transformative space for spiritual growth, mindfulness, and personal evolution.",
      revenue: "$520",
      investments: 80,
      funding: "$570.00",
      growth: "+9%",
      image: "/Images/Cahero Evolution_ (1).png"
    },
    {
      id: 5,
      name: "Cahero Ascension",
      description:
        "Developing global ambassadors who represent the Cahero Kingdom's mission and values.",
      revenue: "$520",
      investments: 120,
      funding: "$570.00",
      growth: "+9%",
      image: "/Images/Cahero Ascension_512x512 for any favicon 1 1.png"
    },
  ];

  return (
    <div>
        <h1 className="text-white font-impact text-2xl my-5">Companies Growth</h1>
        <div className="p-4 rounded-2xl shadow-lg bg-[#0d0d0d] text-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[#839cc7] text-sm">
            <th className="py-2">No</th>
            <th className="p-4">Company Name</th>
            <th className="py-2">Company Revenue</th>
            <th className="py-2">Total Investments</th>
            <th className="py-2">Total Funding</th>
            <th className="py-2">Growth</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={company.id}>
              <td className="py-3 text-sm text-gray-400">{`0${index + 1}.`}</td>
              <td className="py-3">
                <div className="flex items-center space-x-3 px-4">
                  {/* <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-sm font-bold text-white">
                    A
                  </div> */}
                  <img src={company.image} alt="" />
                  <div>
                    <h3 className="text-[#dcdcdc] font-impact">{company.name}</h3>
                    <p className="text-sm text-[#b6b6b6]">{company.description}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 text-sm">{company.revenue}</td>
              <td className="py-3 text-sm">{company.investments}</td>
              <td className="py-3 text-sm">{company.funding}</td>
              <td className="py-3 text-sm text-green-400">{company.growth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PlatformList;
