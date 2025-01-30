import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log("Current Path:", location.pathname); 

  const navLinks = ["source", "catalyst", "unity", "ascension", "legacy", "evolution"];

  return (
    <div className="w-full bg-black h-16 flex items-center fixed z-10 px-4 md:px-8 lg:px-16">
      <div className="w-1/3 flex items-center">
        <img
          src="Images/Cahero Family.png"
          alt="Cahero Family Office"
          className="object-cover h-full cursor-pointer"
        />
      </div>

      <div className="w-1/3 flex justify-center">
        <div className={`absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 p-4 md:p-0 ${isOpen ? "block" : "hidden md:flex"}`}>
          {navLinks.map((link) => {
            const isActive = location.pathname.toLowerCase() === `/${link.toLowerCase()}`;
            return (
              <Link
                key={link}
                to={`/${link}`}
                className={`text-[#b3b3b3] font-impact hover:text-[#4675ff] transition duration-300 ease-in-out ${isActive ? "text-blue-500" : ""}
}`}
                onClick={() => setIsOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-1/3 flex justify-end md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
