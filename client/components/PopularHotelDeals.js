"use client";

import { motion } from "framer-motion";
import {
  Hotel,
  CalendarClock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const hotelDeals = [
  {
    name: "Miami Beach Resort",
    price: "$149/night",
    type: "Deluxe Room",
    duration: "3 nights stay",
  },
  {
    name: "Vegas Grand Hotel",
    price: "$129/night",
    type: "Suite",
    duration: "2 nights stay",
  },
  {
    name: "Orlando Family Inn",
    price: "$89/night",
    type: "Standard Room",
    duration: "4 nights stay",
  },
  {
    name: "Seattle Skyline Hotel",
    price: "$179/night",
    type: "Ocean View",
    duration: "2 nights stay",
  },
  {
    name: "Denver Downtown Stay",
    price: "$99/night",
    type: "Standard",
    duration: "3 nights stay",
  },
  {
    name: "DC Comfort Suites",
    price: "$119/night",
    type: "Luxury Suite",
    duration: "2 nights stay",
  },
];

const PopularHotelDeals = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4"
        >
          Best Hotel Deals by{" "}
          <span className="text-amber-400">Spidy Traveller</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-pink-600 max-w-2xl mx-auto mb-12"
        >
          Explore top-rated stays with unbeatable comfort and prices. Book your
          hotel with Spidy Traveller today!
        </motion.p>

        {/* Nav Arrows */}
        <div className="absolute top-6 right-6 z-10 flex gap-2">
          <div className="swiper-button-prev-custom cursor-pointer bg-white border border-pink-200 rounded-full p-2 shadow hover:bg-pink-100 transition">
            <ChevronLeft className="text-pink-700" size={22} />
          </div>
          <div className="swiper-button-next-custom cursor-pointer bg-white border border-pink-200 rounded-full p-2 shadow hover:bg-pink-100 transition">
            <ChevronRight className="text-pink-700" size={22} />
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="pb-8 mt-4"
        >
          {hotelDeals.map((deal, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-pink-100 shadow hover:shadow-xl transition duration-300 h-full flex flex-col justify-between mb-6"
              >
                {/* Hotel Name + Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <Hotel className="text-amber-400" size={26} />
                  <h3 className="text-lg font-bold text-pink-800">
                    {deal.name}
                  </h3>
                </div>

                {/* Details */}
                <div className="text-left mb-4">
                  <p className="text-pink-700 text-sm">
                    Room Type: <span className="font-medium">{deal.type}</span>
                  </p>
                  <p className="text-pink-700 text-sm flex items-center gap-1">
                    <CalendarClock size={16} className="text-amber-400" />
                    {deal.duration}
                  </p>
                  <p className="text-pink-900 text-xl mt-2">
                    From <span className="font-bold">{deal.price}</span>
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="tel:+1-(844) 919-8610"
                  className="group mt-auto bg-pink-700 text-amber-400 font-semibold rounded-full py-3 px-5 flex items-center justify-center gap-2 hover:bg-pink-800 hover:text-amber-300 transition-colors duration-300 w-full"
                  aria-label={`Call now for hotel: ${deal.name}`}
                >
                  Call Now
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularHotelDeals;
