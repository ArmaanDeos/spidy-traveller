"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionCTA from "./SectionCTA";

const reviews = [
  {
    name: "Sophie Lane",
    role: "Digital Nomad",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    rating: 5,
    text: "Booking over the phone saved me hours—and I landed a fare that wasn't even online! Highly recommend for frequent travelers.",
  },
  {
    name: "James Walker",
    role: "Last-Minute Traveler",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    text: "Incredible savings and no hold time. Got a last-minute flight for half the price of major sites. I was genuinely impressed.",
  },
  {
    name: "Priya Desai",
    role: "Family Vacation Planner",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "The rep was patient, friendly, and got us the perfect family package. Smoothest booking experience I’ve had in years!",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800"
        >
          Hear From Our Happy Travelers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mt-3 text-lg"
        >
          Genuine stories from real customers who booked smarter with us.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-5">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              “{review.text}”
            </p>

            <div className="flex items-center">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
              {[...Array(5 - review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gray-300" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Updated Summary Paragraph */}
      <div className="text-center mt-16 max-w-4xl mx-auto px-4">
        <p className="text-lg text-gray-800 font-medium leading-relaxed">
          Join thousands of satisfied travelers who trust{" "}
          <span className="font-bold text-blue-600">SpidyTraveller</span> for
          exclusive phone-only flight deals. With zero hold time, flexible
          changes, and 24/7 live support, your next adventure is just a call
          away.
          <a href="tel:+1-(844) 930-0173">
            <span className="block mt-2 font-semibold text-blue-500 animate-pulse">
              Call now — the skies are waiting!
            </span>
          </a>
        </p>
      </div>

      <SectionCTA />
    </section>
  );
};

export default CustomerReviews;
