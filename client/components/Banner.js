"use client";

import { PhoneCall, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FlightSearch from "./FlightSearchForm";
import { Suspense } from "react";

const BannerSection = ({
  heading = "Discover New Horizons with SpidyTraveller!",
  subheading = "Unbeatable flight deals, transparent pricing, and round-the-clock support.",
  additionalHeading = "Join Thousands Who Trust Us",
  bgImage = "/images/banner-bg.jpg",
}) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] mt-[90px] overflow-hidden bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-amber-400"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Travel background"
          fill
          style={{ objectFit: "cover" }}
          quality={80}
          className="opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-teal-800/20 to-transparent" />
      </div>

      {/* Content Wrapper for max width */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 ">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6 max-w-lg">
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
          >
            {heading}
          </motion.h1>

          {additionalHeading && (
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-2xl font-semibold text-amber-300 drop-shadow-md"
            >
              {additionalHeading}
            </motion.h2>
          )}

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0"
          >
            {subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-5"
          >
            <Link
              href="tel:+1-(844) 919-8610"
              className="flex items-center gap-3  px-7 py-3 md:w-auto h-full bg-primary-red hover:bg-primary-blue text-white text-lg font-semibold rounded-[8px_0_8px_0] transition-all duration-300"
            >
              <PhoneCall className="text-teal-700 animate-pulse" />
              Call Now
            </Link>
            <Link
              href="tel:+1-(844) 919-8610"
              className="flex items-center gap-3 border-2 border-amber-400 text-amber-400 rounded-[8px_0_8px_0] px-7 py-3 font-semibold hover:bg-amber-400 hover:text-teal-900 transition-colors duration-300"
            >
              <PhoneCall className="text-amber-400 animate-pulse" />
              +1 (844) 919-8610
            </Link>
          </motion.div>
        </div>

        {/* Right Flight Search Form */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 hidden md:block">
          <div className="bg-teal-900/90 rounded-3xl p-8 shadow-2xl w-full mx-auto">
            <Suspense
              fallback={
                <div className="text-amber-400 text-center py-10">
                  Loading flight search...
                </div>
              }
            >
              <FlightSearch />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.button
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-400 animate-bounce"
        aria-label="Scroll Down"
      >
        <ArrowDown size={42} />
      </motion.button>

      {/* SVG Wave at Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
        style={{ height: "80px" }}
      >
        <svg
          className="relative block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            fill="#134e4a"
            d="M0,30 C360,80 1080,0 1440,50 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default BannerSection;
