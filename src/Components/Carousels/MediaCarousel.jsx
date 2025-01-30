import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import modules
import MediaCard from "../MediaCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../index.css";

const mediaData = [
  {
    id: 1,
    title: "Event 1",
    coverImageUrl: "/Images/image.png",
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
    coverImageUrl: "/Images/image.png",
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
    coverImageUrl: "/Images/image.png",
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
    coverImageUrl: "/Images/image.png",
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
    coverImageUrl: "/Images/image.png",
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

const MediaCarousel = ({
  heading,
  height,
  cardheight,
  cardsSpace,
  slide,
}) => {
  return (
    <div className="p-10 ">
      <h1 className="text-white font-bold text-xl mb-2">{heading}</h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={cardsSpace}
        slidesPerView={slide}
        navigation
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        className="relative overflow-hidden"

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {mediaData.map((media) => {
          return (
            <SwiperSlide key={media.id} className="relative overflow-visible">
              <MediaCard
                title={media.title}
                thumbnail={media.coverImageUrl}
                recentlyAdded={media.recentlyAdded}
                duration={media.duration}
                ageRating={media.ageRating}
                tags={media.tags}
                type={media.type}
                height={height}
                cardheight={cardheight}
                author={media.author}
                id={media.id}
                category={media.category}
                genre={media.genre}
              />
            </SwiperSlide>
          );
        })}
        <div className="custom-pagination" />
      </Swiper>
    </div>
  );
};

export default MediaCarousel;
