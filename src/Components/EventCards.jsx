import React from "react";
import Slider from "react-slick";

// Sample dataset for events (this can be fetched from an API)
const eventsData = [
  {
    id: 1,
    title: "Latest Trending Events",
    description: "Watch events and Tell Us what you Need. We do the Rest.!",
    discount: "Flat 25% off on subscriptions",
    image: "/Images/Image 530.png",
  },
  {
    id: 2,
    title: "Upcoming Webinars",
    description: "Join us for insightful webinars on various topics.",
    discount: "Flat 25% off on subscriptions",
    image: "/Images/image.png",
  },
  {
    id: 3,
    title: "Exclusive Promotions",
    description: "Don't miss out on our exclusive promotions and offers.",
    discount: "Flat 25% off on subscriptions",
    image: "/Images/Image 530.png",
  },
  {
    id: 3,
    title: "Exclusive Promotions",
    description: "Don't miss out on our exclusive promotions and offers.",
    discount: "Flat 25% off on subscriptions",
    image: "/Images/image.png",
  },
];

const EventCards = () => {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false, 
    centerMode: true, 
    centerPadding: "20px",
    autoplay: true, 
    autoplaySpeed: 4000, 
  };

  return (
    <Slider {...settings}>
      {eventsData.map((event) => (
        <div key={event.id} className="relative px-4 mt-10">
          <img src={event.image} alt={event.title} className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute bottom-5 left-10 right-5 top-5 text-white transition-all duration-500 group-hover:bottom-16 h-20">
            <h1 className="text-xl font-bold flex">{event.title}</h1>
            <p className="mt-2 text-sm w-1/2">{event.description}</p>
          </div>
          <div className="absolute bottom-0 left-10  text-white transition-all duration-500 group-hover:bottom-16 h-20 w-full flex flex-row">
            <p className="mt-2 text-xs w-1/2">{event.description}</p>
            <div className="w-full flex justify-center">
            <button className="px-3 h-12 font-poppins bg-[#5f48e6] rounded-lg text-sm">WATCH NOW</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default EventCards;
