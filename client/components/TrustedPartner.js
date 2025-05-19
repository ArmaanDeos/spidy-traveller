"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, RefreshCw, PhoneCall, PlaneTakeoff } from "lucide-react";
import SectionCTA from "./SectionCTA";

const TrustedPartner = () => {
  return (
    <>
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Trusted Travel Assistance Partner
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left space-y-4"
          >
            <div className="flex items-center justify-center md:justify-start gap-2">
              <PlaneTakeoff className="text-blue-700" size={28} />
              <h3 className="text-xl md:text-2xl font-semibold text-blue-700">
                Travel Made Easy
              </h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              At{" "}
              <span className="font-medium text-gray-900">
                airreservationfare.com
              </span>
              , we simplify your flight reservation process—whether you&apos;re
              booking cheap airline tickets, exploring international flights, or
              reaching out through our 24/7 airline phone number. Enjoy secure
              payments, zero hold time, and exceptional customer support for top
              carriers like American Airlines, Delta, and more.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-blue-600" size={26} />
                <span className="text-gray-800 text-base font-medium">
                  Secure & Reliable Payments
                </span>
              </div>
              <div className="flex items-center gap-4">
                <PhoneCall className="text-red-600" size={26} />
                <span className="text-gray-800 text-base font-medium">
                  24/7 Dedicated Customer Support
                </span>
              </div>
              <div className="flex items-center gap-4">
                <RefreshCw className="text-green-600" size={26} />
                <span className="text-gray-800 text-base font-medium">
                  Instant Cancellations & Easy Refunds
                </span>
              </div>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <Image
              src="/images/trusted-partner.jpg"
              alt="Travel Support"
              width={400}
              height={300}
              className="rounded-3xl shadow-xl object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left space-y-4"
          >
            <div className="flex items-center justify-center md:justify-start gap-2">
              <PhoneCall className="text-red-600" size={28} />
              <h3 className="text-xl md:text-2xl font-semibold text-red-600">
                24/7 Customer Support
              </h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              From cheap flight tickets to online air ticket booking, we help
              you find the best plane ticket deals and manage your bookings
              easily. Our support team is always available to assist with
              cancellations, date changes, or any airline queries.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-blue-600" size={26} />
                <span className="text-gray-800 text-base font-medium">
                  Secure & Reliable Payments
                </span>
              </div>
              <div className="flex items-center gap-4">
                <PhoneCall className="text-red-600" size={26} />
                <span className="text-gray-800 text-base font-medium">
                  24/7 Dedicated Customer Support
                </span>
              </div>
              <div className="flex items-center gap-4">
                <RefreshCw className="text-green-600" size={26} />
                <span className="text-gray-800 text-base font-medium">
                  Instant Cancellations & Easy Refunds
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        <SectionCTA />
      </section>
    </>
  );
};

export default TrustedPartner;
