import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const AirTicketReservation = ({ title, content, buttonText, phoneNumber }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center mt-[80px] overflow-hidden bg-blue-900 text-white backdrop-blur-md bg-opacity-30 rounded-xl shadow-xl px-4">
      <div className="relative z-10 text-center max-w-4xl mx-auto py-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-blue-100"
        >
          {content}
        </motion.p>
        <div className="flex justify-center">
          <Link
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            <PhoneCall className="mr-2 animate-pulse" />
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AirTicketReservation;
