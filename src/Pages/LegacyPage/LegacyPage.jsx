import React from "react";
import Navbar from "../../Components/Navbar";
import EventCards from "../../Components/EventCards";
import CatalystAchievements from "../../Components/CatalystAchievements";
import MediaCarousel from "../../Components/Carousels/MediaCarousel";
import NumberCarousel from "../../Components/Carousels/NumberCarousel";
const LegacyPage = () => {
  return (
    <div className="text-white min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-20 w-full flex flex-col-reverse lg:flex-row items-center lg:items-center px-6 lg:px-16">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="font-impact text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-[#4675ff]">CAHERO</span> Legacy
            <br />
            Empowering Sustainable Wealth and
            <br />
            Generational Impact
          </h1>
          <p className="font-barlow text-sm sm:text-base lg:text-md mt-4 opacity-60 max-w-lg">
            The Cahero Legacy segment of Cahero Kingdom is dedicated to
            empowering individuals with the knowledge, tools, and strategies
            necessary to achieve sustainable financial growth and create lasting
            wealth. Guided by a long-term vision, Cahero Legacy focuses on
            personalized coaching, wealth-building techniques, and legacy
            planning to help participants secure their financial futures while
            leaving a meaningful impact on their communities and families. This
            segment equips individuals to not only grow their wealth but also
            preserve and pass it on across generations. 
          </p>
          <button className="bg-[#4675ff] text-white px-5 py-3 text-lg font-bold rounded-lg mt-6 hover:bg-[#385dcc] transition duration-300">
            Visit Platform
          </button>
        </div>

        <div className="w-1/2 lg:w-1/2 flex justify-center mb-8 lg:mb-0 ml-28">
          <img
            src="Images/Online learning and online course.png"
            alt="Cahero F"
            className="w-3/4 sm:w-2/3 lg:w-full"
          />
        </div>
      </div>
      <div className="mx-5 mt-10">
        <EventCards />
      </div>

      <div className="w-full flex justify-center mt-10">
        <h1 className="text-white font-impact text-4xl text-center">
          <span className="text-5xl">Achievements</span>
          <br />
          CAHERO Legacy
        </h1>
      </div>
      <div className="mt-5">
        <CatalystAchievements />
      </div>

      <div className="mt-10">
      <NumberCarousel
        heading={"Top Documentaries for you"}
        height="350px"
        cardheight="200px"
        cardsSpace={90}
        slides={4}
      />
      </div>

      <div>
        <MediaCarousel
        heading={"Trending Worksops"}
        cardsSpace={10}
        slide={4}/>
      </div>

      <div>
      <NumberCarousel
        heading={"Top Audiobook for you"}
        height="350px"
        cardheight="200px"
        cardsSpace={90}
        slides={4}
      />
      </div>
    </div>
  );
};

export default LegacyPage;
