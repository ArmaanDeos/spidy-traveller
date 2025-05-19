"use client";

import { motion } from "framer-motion";
import {
  PlaneTakeoff,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const deals = [
  {
    route: "New York to Miami",
    price: "$99",
    type: "One Way",
    duration: "3h 10m",
  },
  {
    route: "Los Angeles to Las Vegas",
    price: "$79",
    type: "Round Trip",
    duration: "1h 25m",
  },
  {
    route: "Chicago to Orlando",
    price: "$89",
    type: "One Way",
    duration: "2h 45m",
  },
  {
    route: "San Francisco to Seattle",
    price: "$109",
    type: "Round Trip",
    duration: "2h 20m",
  },
  {
    route: "Houston to Denver",
    price: "$95",
    type: "One Way",
    duration: "2h 10m",
  },
  {
    route: "Boston to Washington D.C.",
    price: "$85",
    type: "Round Trip",
    duration: "1h 30m",
  },
];

const PopularFlightDeals = () => {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-yellow-50 py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-4"
        >
          Best Flights Deals by{" "}
          <span className="text-amber-400">Spidy Traveller</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-teal-600 max-w-2xl mx-auto mb-12"
        >
          Discover unbeatable fares and plan your perfect trip with Spidy
          Traveller. Your journey begins here!
        </motion.p>

        {/* Nav Arrows */}
        <div className="absolute top-6 right-6 z-10 flex gap-2">
          <div className="swiper-button-prev-custom cursor-pointer bg-white border border-teal-200 rounded-full p-2 shadow hover:bg-teal-100 transition">
            <ChevronLeft className="text-teal-700" size={22} />
          </div>
          <div className="swiper-button-next-custom cursor-pointer bg-white border border-teal-200 rounded-full p-2 shadow hover:bg-teal-100 transition">
            <ChevronRight className="text-teal-700" size={22} />
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
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          modules={[Navigation, Autoplay]} // ⬅️ Add Autoplay here
          className="pb-8 mt-4"
        >
          {deals.map((deal, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-teal-100 shadow hover:shadow-xl transition duration-300 h-full flex flex-col justify-between mb-6"
              >
                {/* Flight Route + Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <PlaneTakeoff className="text-amber-400" size={26} />
                  <h3 className="text-lg font-bold text-teal-800">
                    {deal.route}
                  </h3>
                </div>

                {/* Price & Type */}
                <div className="text-left mb-4">
                  <p className="text-teal-700 text-sm">
                    Type: <span className="font-medium">{deal.type}</span>
                  </p>
                  <p className="text-teal-700 text-sm flex items-center gap-1">
                    <Clock size={16} className="text-amber-400" />
                    Duration: {deal.duration}
                  </p>
                  <p className="text-teal-900 text-xl mt-2">
                    From <span className="font-bold">{deal.price}</span>
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="tel:+1-(844) 919-8610"
                  className="group mt-auto bg-teal-700 text-amber-400 font-semibold rounded-full py-3 px-5 flex items-center justify-center gap-2 hover:bg-teal-800 hover:text-amber-300 transition-colors duration-300 w-full"
                  aria-label={`Call now for deal from ${deal.route}`}
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

export default PopularFlightDeals;
