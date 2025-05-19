"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const dealsData = [
  {
    title: "Bali Paradise",
    imageUrl: "/images/bali-paradies.jpg",
    discount: "30% OFF",
    description:
      "Immerse yourself in 7 nights of luxury at a beachfront Balinese resort. All-inclusive meals, infinity pool views, and cultural experiences await.",
    price: "$1,749",
    originalPrice: "$2,499",
    rating: 4.8,
    buttonText: "Book Bali Escape",
  },
  {
    title: "Maldives Overwater Magic",
    imageUrl: "/images/maldives.jpg",
    discount: "HOT DEAL",
    description:
      "Float into paradise in your private overwater bungalow. 5 nights of sun, sea, and daily spa treatments in the Maldives — luxury redefined.",
    price: "$2,599",
    originalPrice: "$3,299",
    rating: 4.9,
    buttonText: "Unlock Maldives Deal",
  },
  {
    title: "Santorini Cliffside Retreat",
    imageUrl: "/images/cliffside.jpg",
    discount: "LAST MINUTE",
    description:
      "Watch the sunset from your cliffside villa in Santorini. 6 nights with breakfast, wine tasting, and dramatic Aegean views.",
    price: "$1,899",
    originalPrice: "$2,199",
    rating: 4.7,
    buttonText: "Reserve Santorini Stay",
  },
  {
    title: "Swiss Alps Adventure",
    imageUrl: "/images/swiss-alphs.jpg",
    discount: "20% OFF",
    description:
      "Snow-capped peaks and charming chalets. 5 nights in Zermatt with scenic train rides and a Matterhorn backdrop.",
    price: "$1,499",
    originalPrice: "$1,879",
    rating: 4.6,
    buttonText: "Explore Swiss Alps",
  },
  {
    title: "Dubai Desert Luxury",
    imageUrl: "/images/dubai-desert.jpg",
    discount: "FLASH SALE",
    description:
      "Experience the glam of Dubai — 4 nights in a 5-star downtown hotel with desert safari, Burj Khalifa access & gourmet dining.",
    price: "$999",
    originalPrice: "$1,349",
    rating: 4.5,
    buttonText: "Grab Dubai Deal",
  },
  {
    title: "Tokyo City Lights",
    imageUrl: "/images/tokyo.jpg",
    discount: "BEST VALUE",
    description:
      "5 nights in central Tokyo with a full-day city tour, sushi class, and bullet train pass. Tech meets tradition in style.",
    price: "$1,379",
    originalPrice: "$1,899",
    rating: 4.9,
    buttonText: "Book Tokyo Adventure",
  },
];

const DealsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardStyles =
    "bg-white rounded-xl overflow-hidden shadow-xl transition-transform duration-300 group hover:scale-105 hover:shadow-2xl";

  const buttonStyles =
    "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white font-semibold py-2 px-5 rounded-full transition duration-300 cursor-pointer transform group-hover:scale-110";

  const renderCard = (deal, index) => (
    <div key={index} className={cardStyles}>
      <div className="relative overflow-hidden h-64 group">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <Image
            src={deal.imageUrl}
            alt={deal.title}
            fill
            className="object-cover group-hover:brightness-110 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={index === 0}
          />
        </motion.div>
        <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-md">
          {deal.discount}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{deal.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{deal.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500 line-through">
              {deal.originalPrice}
            </p>
            <p className="text-xl font-bold text-gray-800">{deal.price}</p>
          </div>
          <a href="tel:+1-(844) 930-0173" className={buttonStyles}>
            {deal.buttonText}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="deals"
      className="py-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-gray-100">
            Trending Travel Drops by GenzTraveller
          </h2>

          <p className="text-lg opacity-90 max-w-2xl mx-auto font-medium">
            Snap up the hottest getaways before they vanish — flights, stays,
            and dream destinations curated for the bold, young, and always
            on-the-go.
          </p>
        </div>

        {isMobile ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
          >
            {dealsData.map((deal, index) => (
              <SwiperSlide key={index}>{renderCard(deal, index)}</SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dealsData.map((deal, index) => renderCard(deal, index))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DealsSection;
