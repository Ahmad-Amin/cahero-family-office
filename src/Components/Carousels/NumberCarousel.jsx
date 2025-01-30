import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import MediaCard from "../MediaCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../index.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NumberCarousel = ({
  heading,
  height,
  cardheight,
  cardsSpace,
  slides,
}) => {

  const mediaData = [
    {
      id: 1,
      title: "Event 1",
      coverImageUrl: "/Images/7.png",
      recentlyAdded: true,
      duration: "1 hour 30 mins",
      ageRating: "PG-13",
      tags: ["Webinar", "Technology"],
      type: "Webinar",
      author: "John Doe",
      category: "Tech",
      genre: "Education",
    },
    {
      id: 2,
      title: "Event 2",
      coverImageUrl: "/Images/8.png",
      recentlyAdded: false,
      duration: "2 hours",
      ageRating: "R",
      tags: ["Webinar", "Design"],
      type: "Webinar",
      author: "Jane Smith",
      category: "Design",
      genre: "Creative",
    },
    {
      id: 3,
      title: "Event 3",
      coverImageUrl: "/Images/4.png",
      recentlyAdded: true,
      duration: "45 mins",
      ageRating: "G",
      tags: ["Webinar", "Business"],
      type: "lecture",
      author: "Alice Brown",
      category: "Business",
      genre: "Entrepreneurship",
    },
    {
      id: 4,
      title: "Event 4",
      coverImageUrl: "/Images/1.png",
      recentlyAdded: false,
      duration: "1 hour",
      ageRating: "PG",
      tags: ["Webinar", "Marketing"],
      type: "lecture",
      author: "Bob Green",
      category: "Marketing",
      genre: "Business",
    },
    {
      id: 5,
      title: "Event 5",
      coverImageUrl: "/Images/6.png",
      recentlyAdded: true,
      duration: "1 hour 15 mins",
      ageRating: "PG-13",
      tags: ["Webinar", "Sales"],
      type: "Webinar",
      author: "Charlie Lee",
      category: "Sales",
      genre: "Business",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-white font-impact text-xl mb-2 ">{heading}</h1>

      <div className="ml-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={cardsSpace || 40}
          slidesPerView={slides}
          navigation
          pagination={{ clickable: true, el: ".custom-pagination" }}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          className="relative overflow-hidden"
        >
          {mediaData.map((media, index) => (
            <SwiperSlide key={media.id}>
              <div className="relative">
                <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 text-[11rem] font-bold text-white text-outline opacity-30">
                  {index + 1}
                </div>
                <MediaCard
                  title={media.title}
                  thumbnail={media.coverImageUrl}
                  recentlyAdded={media.recentlyAdded}
                  duration={media.duration}
                  ageRating={media.ageRating}
                  type={media.type}
                  height={height}
                  cardheight={cardheight}
                  author={media.author}
                  id={media.id}
                  category={media.category}
                  genre={media.genre}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default NumberCarousel;
