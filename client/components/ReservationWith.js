import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const ReservationWith = ({ heading, subheading, buttonText, phoneNumber }) => {
  return (
    <section className="relative bg-blue-900 text-white min-h-[90vh] flex items-center justify-center mt-[80px] overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-16">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
        >
          {heading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mb-8 text-blue-100"
        >
          {subheading}
        </motion.p>

        {/* Call Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 text-lg"
          >
            <PhoneCall className="inline-block mr-2 animate-pulse" />
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReservationWith;
