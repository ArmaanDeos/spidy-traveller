"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { PhoneCall, Clock4, Plane } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const flightDeals = [
  {
    title: "New York to Paris",
    imageUrl: "/images/paris-flight.jpg",
    discount: "20% OFF",
    description: "Round-trip + 3 nights hotel with breakfast.",
    price: "$899",
    originalPrice: "$1,149",
    duration: "7h 45m",
    airline: "Air France",
  },
  {
    title: "Los Angeles to Tokyo",
    imageUrl: "/images/tokyo-flight.jpg",
    discount: "HOT DEAL",
    description: "Includes return flight + 5-star hotel stay.",
    price: "$1,299",
    originalPrice: "$1,649",
    duration: "11h 30m",
    airline: "ANA",
  },
  {
    title: "Chicago to Rome",
    imageUrl: "/images/rome-flight.jpg",
    discount: "SUMMER SALE",
    description: "Fly with Emirates + free city tour.",
    price: "$1,099",
    originalPrice: "$1,449",
    duration: "9h 15m",
    airline: "Emirates",
  },
  {
    title: "Miami to London",
    imageUrl: "/images/london-flight.jpg",
    discount: "LIMITED TIME",
    description: "Direct flight + 4 nights central hotel.",
    price: "$999",
    originalPrice: "$1,299",
    duration: "8h 20m",
    airline: "British Airways",
  },
  {
    title: "San Francisco to Dubai",
    imageUrl: "/images/dubai-flights.jpg",
    discount: "SAVE BIG",
    description: "Fly Emirates + Burj Khalifa access.",
    price: "$1,349",
    originalPrice: "$1,799",
    duration: "15h 10m",
    airline: "Emirates",
  },
  {
    title: "Seattle to Bangkok",
    imageUrl: "/images/bangkok-flights.jpg",
    discount: "FLASH SALE",
    description: "Includes hotel & temple tour package.",
    price: "$1,249",
    originalPrice: "$1,599",
    duration: "17h 25m",
    airline: "Thai Airways",
  },
];

const FlightDealsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderCard = (deal, index) => (
    <div
      key={index}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col overflow-hidden border border-gray-100 hover:-translate-y-1"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={deal.imageUrl}
          alt={deal.title}
          fill
          className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={index === 0}
        />
        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase z-10">
          {deal.discount}
        </span>
      </div>

      <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{deal.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{deal.description}</p>
        </div>

        <div className="text-sm text-gray-700 flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-2">
            <Plane size={18} className="text-indigo-600" />
            <span className="font-medium">{deal.airline}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock4 size={18} className="text-sky-600" />
            <span className="font-medium">{deal.duration}</span>
          </div>
        </div>

        <div className="flex justify-between items-end mt-auto">
          <div>
            <p className="text-sm text-gray-400 line-through">
              {deal.originalPrice}
            </p>
            <p className="text-2xl font-bold text-indigo-700">{deal.price}</p>
          </div>
          <a
            href="tel:+1-(844) 930-0173"
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            <PhoneCall size={18} /> Call Now
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-blue-950 via-indigo-800 to-sky-700 text-white"
      id="flight-deals"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 text-transparent bg-clip-text">
            Flight Drops Too Good to Scroll Past
          </h2>
          <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto font-medium">
            GenzTraveller&apos;s limited-time bundles: premium flights + stays
            at wallet-friendly prices. Snag them before they vanish!
          </p>
        </div>

        {isMobile ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
          >
            {flightDeals.map((deal, index) => (
              <SwiperSlide key={index}>{renderCard(deal, index)}</SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {flightDeals.map((deal, index) => renderCard(deal, index))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FlightDealsSection;
