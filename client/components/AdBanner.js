"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const AdBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="h-[45vh] bg-cover bg-center relative flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 md:p-10 shadow-lg text-white"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            🎉 Get Up to{" "}
            <span className="text-yellow-300 drop-shadow-lg">59% Discount</span>{" "}
            by Booking Over the Phone!
          </h2>
          <div className="flex items-center justify-center gap-3 text-lg md:text-2xl font-semibold mt-2">
            <PhoneCall className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 animate-pulse" />
            <a
              href="tel:+1-(888) 597-0108"
              className="underline underline-offset-4 hover:text-yellow-300 transition-all"
            >
              +1-(888) 597-0108
            </a>
          </div>
          <p className="mt-4 text-sm md:text-base text-gray-200">
            Call now and unlock exclusive unpublished airfare deals!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdBanner;
