import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const MediaCard = ({
  title,
  thumbnail,
  duration,
  cardheight,
  author,
  type,
  category,
  genre,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardHeight = cardheight || "200px";



  

  return (
    <>
      <div
        className="relative cursor-pointer transition-transform duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative bg-black text-white rounded-lg shadow-lg"
          style={{ height: cardHeight }}
        >
          <div
            className={`relative w-full h-full z-10 transition-transform duration-300 ${
              isHovered ? "-translate-y-5" : ""
            }`}
          >
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div
            className={`absolute bottom-0 w-full p-4 bg-[#0d0d0d] text-white transition-all duration-300 rounded-b-lg ${
              isHovered
                ? "translate-y-24 opacity-100 z-50 "
                : "translate-y-full opacity-0"
            }`}
          >
            <div className="flex items-center space-x-4 mb-4 flex-row">
              <div className="flex-1 space-x-2">
                <button
                  className="items-center justify-center bg-white text-black w-10 h-10 rounded-full hover:bg-gray-200 transition duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PlayArrowIcon />
                </button>
                
                  <button
                    className="items-center justify-center border border-[#868686] text-[#868686] w-10 h-10 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300"
                  >
                    <AddIcon />
                  </button>
                <button
                  className="items-center justify-center border border-[#868686] text-[#868686] w-10 h-10 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300"
                >
                  <ThumbUpAltOutlinedIcon />
                </button>
              </div>
              <div>
                <button
                  className="flex items-center justify-center border border-[#868686] text-[#868686] w-10 h-10 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300"
                >
                  <ExpandMoreIcon />
                </button>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center mb-2 mt-1">
                <p className="border border-[#565656] text-[#565656] h-5 px-1 mr-2 text-xs">
                  France
                </p>
                <p className="text-sm text-gray-400">
                  {duration || type || author}
                </p>
                <p className="border border-[#565656] text-[#565656] h-5 px-1 ml-2 text-xs">
                  HD
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">{category || genre}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaCard;
