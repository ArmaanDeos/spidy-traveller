"use client";

import { PhoneCall, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";

export default function TravelAssistanceSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <motion.h2
          className="text-4xl font-bold text-blue-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Travel Assistance Services
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Get expert help with airlines like American, Delta, United, and more.
          We&apos;re here 24/7 to make your journey stress-free and affordable.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* 24/7 Support */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-blue-200 transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <Clock className="text-blue-600 w-10 h-10 animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800">
              24/7 Support
            </h3>
            <p className="text-gray-600 mt-2">
              Our dedicated team is always ready to help with your travel needs.
            </p>
          </div>

          {/* Secure Payments */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-blue-200 transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <ShieldCheck className="text-green-600 w-10 h-10 animate-bounce" />
            </div>
            <h3 className="text-xl font-semibold text-green-800">
              Secure Payments
            </h3>
            <p className="text-gray-600 mt-2">
              Enjoy fast, safe transactions with instant cancellations and no
              hold time.
            </p>
          </div>

          {/* Phone Assistance */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-blue-200 transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <PhoneCall className="text-purple-600 w-10 h-10 animate-wiggle" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800">
              Call for Best Deals
            </h3>
            <p className="text-gray-600 mt-2">
              Access exclusive unpublished airfare deals. Call us at{" "}
              <strong>+1-(888) 597-0108</strong>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <SectionCTA />
        </motion.div>
      </div>
    </section>
  );
}
