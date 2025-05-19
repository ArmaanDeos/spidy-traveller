"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Plane } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-amber-50 via-white to-teal-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clouds.png')] opacity-10 z-0 pointer-events-none" />
      <motion.div
        initial={{ x: -120, y: 100, rotate: -15 }}
        animate={{ x: [0, 200, -100, 0], y: [0, -30, 20, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute top-10 left-8 w-16 h-16 text-teal-600 z-10 opacity-70"
      >
        <Plane className="w-full h-full" />
      </motion.div>

      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-teal-800"
        >
          Let&apos;s Connect and Help You Travel Better
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Have questions, need a custom itinerary, or ready to book? Our travel
          experts are just a message away.
        </motion.p>
      </div>

      <div className="relative z-20 mt-16 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-10"
        >
          <h3 className="text-xl font-semibold text-teal-700 mb-4">
            Send Us a Message
          </h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:outline-none"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-teal-700 to-amber-400 text-white font-semibold py-3 rounded-xl shadow-md hover:opacity-90 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-10 flex flex-col justify-between"
        >
          <h3 className="text-xl font-semibold text-teal-700 mb-6">
            Contact Information
          </h3>
          <div className="space-y-6 text-gray-700 text-base">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-teal-700 mr-3" />
              <span>+1-(844) 919-8610 (Toll-Free)</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-teal-700 mr-3" />
              <span>info@spidytraveller.com</span>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-teal-700 mr-3 mt-1" />
              <span>660 McLeod Rd, Lucedale, MS, 39452</span>
            </div>
          </div>
          <div className="mt-10 text-sm text-gray-500">
            Our travel advisors are available 24/7 for your convenience.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
