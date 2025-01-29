import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-black h-16  flex justify-between fixed z-10">
      <div className="w-1/3 flex items-center justify-center h-full">
      <img src="Images/Cahero Family.png" alt="Cahero Family Office" className="object-cover h-full cursor-pointer"  />
      </div>
      <div className="w-full  space-x-12 flex items-center justify-center">
        <a href="/" class="text-[#b3b3b3] font-impact hover:text-[#4675ff] ease-in-out transition duration-300">
          Source
        </a>
        <a href="/" class="text-[#b3b3b3] font-impact hover:text-[#4675ff] ease-in-out transition duration-300">
          Catalyst
        </a>
        <a href="/" class="text-[#b3b3b3] font-impact hover:text-[#4675ff] ease-in-out transition duration-300">
          Unity
        </a>
        <a href="/" class="text-[#b3b3b3] font-impact hover:text-[#4675ff] ease-in-out transition duration-300">
          Ascension
        </a>
        <a href="/" class="text-[#b3b3b3] font-impact hover:text-[#4675ff] ease-in-out transition duration-300">
          Legacy
        </a>
        <a href="/" class="text-[#b3b3b3] font-impact hover:text-[#4675ff] ease-in-out transition duration-300">
          Evolution
        </a>
      </div>
      <div className="w-1/3"></div>
    </div>
  );
};

export default Navbar;
