import React from "react";
import Navbar from "../../Components/Navbar";
import EventCards from "../../Components/EventCards";
import CatalystAchievements from "../../Components/CatalystAchievements";
import MediaCarousel from "../../Components/Carousels/MediaCarousel";
import NumberCarousel from "../../Components/Carousels/NumberCarousel";

const AscensionPage = () => {
  return (
    <div className="text-white min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-20 w-full flex flex-col-reverse lg:flex-row items-center lg:items-center px-6 lg:px-16">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="font-impact text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-[#4675ff]">CAHERO</span> Ascension
            <br />
            Empowering Global Ambassadors for
            <br />
            Positive Impact
          </h1>
          <p className="font-barlow text-sm sm:text-base lg:text-md mt-4 opacity-60 max-w-lg">
            The Cahero Ascension segment of Cahero Kingdom is devoted to
            developing a global network of ambassadors who embody the platform’s
            mission, values, and vision. Through comprehensive training programs
            and personalized mentorship, Cahero Ascension equips participants
            with the leadership skills, cultural awareness, and community
            engagement expertise needed to represent Cahero Kingdom and expand
            its influence worldwide. This initiative fosters a new generation of
            empowered leaders who are committed to creating positive change and
            fostering meaningful connections across cultures.
          </p>
          <button className="bg-[#4675ff] text-white px-5 py-3 text-lg font-bold rounded-lg mt-6 hover:bg-[#385dcc] transition duration-300">
            Visit Platform
          </button>
        </div>

        <div className="w-1/2 lg:w-1/3 flex justify-center mb-8 lg:mb-0 ml-28">
          <img
            src="Images/Man getting on-the-job training.png"
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
          CAHERO Ascension
        </h1>
      </div>
      <div className="mt-5">
        <CatalystAchievements />
      </div>

      <div className="mt-10">
      <NumberCarousel
        heading={"Top Trending Courses"}
        height="350px"
        cardheight="200px"
        cardsSpace={90}
        slides={4}
      />
      </div>

      <div>
        <MediaCarousel
        heading={"Upcomming Mentorships"}
        cardsSpace={10}
        slide={4}/>
      </div>

      <div>
      <NumberCarousel
        heading={"Top Trending Workshops"}
        height="350px"
        cardheight="200px"
        cardsSpace={90}
        slides={4}
      />
      </div>
    </div>
  );
};

export default AscensionPage;
