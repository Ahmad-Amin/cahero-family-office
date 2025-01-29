import React from "react";
import { CgInsights } from "react-icons/cg";
import { FaMoneyBill } from "react-icons/fa6";
import { RiUserCommunityLine } from "react-icons/ri";

const Updates = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between px-6 lg:px-16 gap-6 lg:gap-0 text-center lg:text-left">
      <div className="lg:w-1/4">
        <h1 className="text-white font-impact text-3xl sm:text-4xl">
          Latest
          <br />
          updates for you
        </h1>
        <p className="font-barlow text-sm sm:text-md opacity-60 mt-4">
          Latest updates and<br/> important information related to major platforms
        </p>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap gap-10 w-full justify-center items-center lg:items-start">
        <div className="flex flex-col items-center lg:items-start w-full sm:w-1/2 lg:w-1/5">
          <CgInsights size={30} />
          <h1 className="text-white font-impact text-xl sm:text-2xl mt-1">1.5% growth graph</h1>
          <p className="font-barlow text-sm sm:text-md opacity-60 max-w-xs">
            Online shopping for retail sales direct to consumers
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start w-full sm:w-1/2 lg:w-1/5">
          <RiUserCommunityLine size={30} />
          <h1 className="text-white font-impact text-xl sm:text-2xl mt-1">30-day mentorship</h1>
          <p className="font-barlow text-sm sm:text-md opacity-60 max-w-xs">
            Online shopping for retail sales direct to consumers
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start w-full sm:w-1/2 lg:w-1/5">
          <FaMoneyBill size={30} />
          <h1 className="text-white font-impact text-xl sm:text-2xl mt-1">Save Money</h1>
          <p className="font-barlow text-sm sm:text-md opacity-60 max-w-xs">
            Online shopping for retail sales direct to consumers
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start w-full sm:w-1/2 lg:w-1/5">
          <FaMoneyBill size={30} />
          <h1 className="text-white font-impact text-xl sm:text-2xl mt-1">Investment Growth</h1>
          <p className="font-barlow text-sm sm:text-md opacity-60 max-w-xs">
            Maximize your financial growth with strategic investments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Updates;