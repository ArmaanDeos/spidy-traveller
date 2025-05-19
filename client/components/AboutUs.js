"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="bg-teal-50 py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-teal-700"
        >
          <Image
            src="/images/about-img.jpg"
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-6 leading-tight">
            Welcome to <span className="text-amber-400">SpidyTraveller</span>
          </h2>
          <p className="text-teal-900 text-lg md:text-xl mb-6 leading-relaxed">
            At SpidyTraveller, we’re dedicated to making your travel seamless
            and memorable. Whether you&apos;re planning a quick getaway or an
            international adventure, we offer unbeatable fares with trustworthy
            service.
          </p>
          <p className="text-teal-900 text-lg md:text-xl mb-8 leading-relaxed">
            From easy ticket booking to 24/7 customer support, we are your
            reliable travel companion committed to finding you the best deals
            and making every journey hassle-free.
          </p>

          {/* CTA Section */}
          <div className="mt-6">
            <motion.a
              href="tel:+1-(844) 919-8610"
              className="inline-block bg-amber-400 text-teal-900 font-semibold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-amber-300 hover:shadow-amber-400/50 transition transform hover:scale-105 duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Explore Our Deals
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
