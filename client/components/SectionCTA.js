import { PhoneCall, PlaneTakeoff } from "lucide-react";
import { motion } from "framer-motion";

const SectionCTA = () => {
  return (
    <section className="mt-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-teal-700 rounded-3xl shadow-2xl p-12 max-w-3xl mx-auto text-center"
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-amber-400 mb-4 tracking-tight">
          🚨 Don’t Miss These Epic Flight Deals! 🚨
        </h3>

        <p className="text-lg md:text-xl text-amber-200 mb-8 max-w-xl mx-auto leading-relaxed">
          Ready for your next adventure?{" "}
          <span className="font-bold text-white">SpidyTraveller</span> has you
          covered with unbeatable prices — just call now and save big!
        </p>

        <div className="text-3xl md:text-4xl font-black text-amber-400 mb-8 tracking-wide drop-shadow-md">
          +1-(844) 930-0173
        </div>

        <a
          href="tel:+1-(844) 919-8610"
          aria-label="Call now to grab your deal"
          className="inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-extrabold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-yellow-500/80 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          <PlaneTakeoff className="w-6 h-6" />
          Grab Your Deal Now!
        </a>
      </motion.div>
    </section>
  );
};

export default SectionCTA;
