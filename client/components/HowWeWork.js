"use client";

import { motion } from "framer-motion";
import { Search, CalendarCheck2, PhoneCall, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: (
      <Search
        size={34}
        className="text-amber-400 group-hover:scale-110 transition-transform duration-300"
      />
    ),
    title: "Step 1: Find Your Dream Destination",
    description:
      "Start by entering your desired destination and travel dates to explore the best flights.",
  },
  {
    icon: (
      <CalendarCheck2
        size={34}
        className="text-amber-400 group-hover:scale-110 transition-transform duration-300"
      />
    ),
    title: "Step 2: Compare & Choose",
    description:
      "Review various flight options, airlines, and schedules to select the best match for your needs.",
  },
  {
    icon: (
      <PhoneCall
        size={34}
        className="text-amber-400 group-hover:scale-110 transition-transform duration-300"
      />
    ),
    title: "Step 3: Need Help? Chat with an Expert",
    description:
      "Got questions or need assistance? Our experts are available 24/7 to guide you and secure your booking.",
  },
  {
    icon: (
      <BadgeCheck
        size={34}
        className="text-amber-400 group-hover:scale-110 transition-transform duration-300"
      />
    ),
    title: "Step 4: Confirm & Start Your Adventure",
    description:
      "Once you're ready, finalize your booking and prepare for an amazing travel experience ahead!",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-4 tracking-tight"
        >
          How It Works
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-teal-600 mb-12 max-w-2xl mx-auto"
        >
          Your journey begins here—4 easy steps to make booking a breeze.
        </motion.p>

        {/* Step Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-amber-300/60 transition duration-300 transform hover:-translate-y-1 cursor-pointer text-left"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="text-teal-700 text-3xl font-extrabold select-none">
                  0{index + 1}
                </div>
                <div>{step.icon}</div>
              </div>
              <h4 className="text-xl font-semibold text-teal-800 mb-3">
                {step.title}
              </h4>
              <p className="text-teal-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
