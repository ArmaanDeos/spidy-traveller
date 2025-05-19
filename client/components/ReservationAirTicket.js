import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import SectionCTA from "./SectionCTA";

const ReservationAirTicket = ({ title, content, buttonText, phoneNumber }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center mt-[80px] overflow-hidden bg-blue-900 text-white backdrop-blur-md bg-opacity-30 rounded-xl shadow-xl px-4">
      <div className="relative z-10 text-center max-w-7xl mx-auto py-16">
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
        <SectionCTA />
      </div>
    </section>
  );
};

export default ReservationAirTicket;
