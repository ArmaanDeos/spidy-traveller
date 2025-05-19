"use client";

import { motion } from "framer-motion";
import { PhoneCall, RotateCcw, Clock } from "lucide-react";

const CallNowCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-red-700 text-white py-10 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-bold mb-2"
        >
          Book cheap flights at the best price—just a call away!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg mb-4"
        >
          Travel for Less with Airreservationfare
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center space-y-3 mb-6"
        >
          <div className="flex items-center gap-2">
            <PhoneCall size={18} />
            <span>Unpublished Airfare Deals</span>
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw size={18} />
            <span>Unlimited Changes & Easy Refunds</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>24/7 Service, Zero Hold Time</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="tel:+1-(888) 597-0108"
            className="text-xl md:text-2xl font-bold bg-white text-red-700 py-2 px-6 rounded-full shadow"
          >
            +1-(888) 597-0108
          </a>
          <button
            onClick={() => (window.location.href = "tel:+1-(888) 597-0108")}
            className="bg-white text-blue-900 flex items-center gap-2 py-2 px-5 rounded-full shadow hover:bg-gray-100 transition text-sm md:text-base font-medium cursor-pointer"
          >
            <PhoneCall size={16} />
            Call Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallNowCTA;
