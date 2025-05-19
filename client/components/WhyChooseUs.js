"use client";

import { motion } from "framer-motion";
import { PhoneCall, RefreshCw, Clock } from "lucide-react";
import SectionCTA from "./SectionCTA";

const features = [
  {
    icon: <PhoneCall size={40} className="text-amber-400" />,
    title: "Exclusive Flash Deals",
    description:
      "Unlock secret fares and special discounts only available when you book directly with us — ideal for spontaneous trips.",
  },
  {
    icon: <RefreshCw size={40} className="text-amber-400" />,
    title: "Flexible Bookings",
    description:
      "Plans change? No worries! Modify or cancel your trip with ease, so your adventure stays stress-free and adaptable.",
  },
  {
    icon: <Clock size={40} className="text-amber-400" />,
    title: "24/7 Dedicated Support",
    description:
      "Have questions? Our friendly travel experts are available anytime to assist you and make your booking seamless.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-teal-700 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-3 tracking-tight"
        >
          Why Book With <span className="text-white">SpidyTraveller</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-amber-100 text-lg max-w-3xl mb-16 mx-auto md:mx-0"
        >
          Experience the perfect blend of unbeatable deals, flexibility, and
          round-the-clock support tailored to your travel dreams.
        </motion.p>

        {/* Main content split into two equal columns */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto"
        >
          {/* Features - 1/2 width */}
          <div className="flex flex-col gap-12 md:w-1/2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group flex flex-col md:flex-row items-center md:items-start gap-6 bg-teal-600/70 rounded-3xl p-8 shadow-lg hover:shadow-amber-400/40 transition-shadow duration-400 cursor-default"
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-amber-200 max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA - 1/2 width */}
          <div className="md:w-1/2 flex items-center justify-center px-8 ">
            <div className="hidden md:block">
              <SectionCTA
                className="bg-amber-400 text-teal-700 hover:bg-amber-300 hover:text-teal-900 shadow-lg w-full max-w-sm"
                buttonText="Book Your Deal Now"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
