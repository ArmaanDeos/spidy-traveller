"use client";

import { motion } from "framer-motion";
import { SendHorizonal, Plane } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-amber-50 via-white to-teal-50 overflow-hidden">
      {/* Floating Clouds */}
      <div className="absolute top-10 left-[-100px] w-72 h-32 bg-white rounded-full opacity-30 blur-xl animate-cloud1 z-0" />
      <div className="absolute bottom-20 right-[-80px] w-64 h-28 bg-white rounded-full opacity-30 blur-xl animate-cloud2 z-0" />
      <div className="absolute top-1/2 left-1/4 w-40 h-20 bg-white rounded-full opacity-20 blur-2xl animate-cloud3 z-0" />

      {/* Animated Planes */}
      <Plane className="absolute top-14 right-16 w-12 h-12 text-amber-400 animate-bounce-slow z-0 opacity-60" />
      <Plane className="absolute bottom-14 left-12 w-10 h-10 text-teal-700 rotate-45 animate-bounce-slower z-0 opacity-50" />

      {/* Content Container */}
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-700 mb-4 leading-tight">
            Stay Updated. Explore More.
          </h2>
          <p className="text-teal-600 text-md sm:text-lg max-w-xl mx-auto">
            Join our newsletter to receive top flight deals, travel insights,
            and exclusive offers.
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full sm:w-[300px] px-5 py-3 rounded-xl border border-teal-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-teal-700 text-amber-400 font-semibold rounded-xl shadow-md hover:bg-teal-800 hover:text-amber-300 transition-all duration-300"
            >
              Subscribe
              <SendHorizonal className="w-5 h-5 animate-pulse" />
            </motion.button>
          </form>

          <p className="text-sm text-teal-500 mt-4">
            We’ll never spam you. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes cloud1 {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(200px);
          }
        }
        @keyframes cloud2 {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(-200px);
          }
        }
        @keyframes cloud3 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes bounceSlower {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-cloud1 {
          animation: cloud1 40s linear infinite alternate;
        }
        .animate-cloud2 {
          animation: cloud2 35s linear infinite alternate;
        }
        .animate-cloud3 {
          animation: cloud3 12s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounceSlow 5s ease-in-out infinite;
        }
        .animate-bounce-slower {
          animation: bounceSlower 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
