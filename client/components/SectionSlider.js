"use client";

import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";

const sections = [
  {
    title: "Explore Destinations with EVA Airlines",
    subtitle:
      "Embark on your next adventure with Eva Airlines bookings, your gateway to extraordinary travel experiences at unbeatable prices. Whether you're planning a domestic getaway or an international excursion, Eva Air and its renowned affiliates—Eva, Eva Airline booking, and Eva Airways—offer a seamless booking process. With just a phone call, you can book the perfect cheap flight and secure the best deals available. Travel for Less and take advantage of our Call Now feature for exclusive access to unpublished airfare deals. Eva Airlines prioritizes your convenience with easy changes, instant cancellations, and quick refunds, ensuring a hassle-free travel experience. With secure payment systems, round-the-clock customer support, and 24/7 Customer Service, we make sure you receive the assistance you need, whenever you need it. Call Now to Book New Reservations & Get up to 59% Discount, and experience why Eva Airlines is the trusted choice for savvy travelers seeking Zero Hold Time and support for all major airlines.",
    bg: "bg-gradient-to-r from-[#0091d3] to-[#004f91]",
  },
  {
    title: "Best Flight Deals on Lot Polish Airlines",
    subtitle:
      "Discover exceptional value with Lot Polish Airlines Deals, your gateway to affordable travel for both domestic and international journeys. When you choose Lot Polish Air reservation, you are not just booking a flight; you're securing the best deals available. Our competitive pricing ensures you can book the perfect cheap flight at the most affordable rates over the phone. Experience Lot Airline's commitment to customer satisfaction with our exclusive offers such as unpublished airfare deals, easy changes, and instant cancellation. Our quick refund policy and 24/7 customer service guarantee a hassle-free experience, while our secure payment system ensures every transaction is safe. Whether you're planning a last-minute getaway or scheduling ahead, Lot Polish Airline booking stands ready to assist. Call now to book new reservations and enjoy up to 59% discount. Our dedicated support is available anytime you need, ensuring that every journey with us is seamless and satisfying, all with zero hold time. Call now and travel for less with Lot Polish Airlines quick reservations—where your next great adventure begins.",
    bg: "bg-gradient-to-r from-[#e10000] to-[#d90000]",
  },
  {
    title: "Top Rated TAP Portugal Airlines",
    subtitle:
      "Experience seamless travel with TAP Portugal Airlines, your premier choice for both domestic and international flight ticket reservations. Whether you're looking for TAP Portugal, TAP, TAP Air Portugal, TAP Airways, or TAP Air deals, we offer the perfect cheap flight at the most affordable price over the phone. Travel for less with our exclusive, unpublished airfare deals that come with easy changes and instant cancellation options. With TAP Portugal Airlines flight reservation deals, you enjoy quick refunds and hassle-free assistance, ensuring a smooth and secure payment process for all your reservations. Our 24/7 Customer Service guarantees zero hold time, so you can get immediate support whenever you need it. Call Now to book new reservations and get up to 59% discount on major airlines. Choose TAP Portugal Airlines for a superior travel experience with unbeatable savings and support.",
    bg: "bg-gradient-to-r from-[#006747] to-[#009739]",
  },
  {
    title: "KLM Airlines",
    subtitle:
      "At KLM Airlines flight booking, we pride ourselves on offering unbeatable deals for both domestic and international flight reservations. Whether you're Flight booking KLM flights or looking for the best rates across major airlines, our promise is to ensure you Travel for Less! With a commitment to affordability, you can Book the perfect cheap flight at the most competitive prices, exclusively available over the phone. We understand that plans can change, which is why we offer Easy Changes and Instant Cancellation with Quick Refunds, ensuring a hassle-free experience. Our secure payment Reservations system and 24/7 Customer Service are designed to provide peace of mind, making your travel preparation as smooth as possible. Don't miss out on the opportunity to Call Now to Book New Reservations and enjoy up to 59% discount. Remember, our customer service is available around the clock, ensuring Zero Hold Time when you need support. Call today and let KLM reservation deals elevate your travel experience!",
    bg: "bg-gradient-to-r from-[#1d72b8] to-[#005c9c]",
  },
  {
    title: "Swiss Airlines",
    subtitle:
      "Explore the skies with Swiss Airlines deals, your premier choice for both domestic and international flight ticket reservations. Whether you're booking a last-minute getaway or planning a detailed overseas journey, Swiss Airlines offers unbeatable deals on air travel. Secure your Swiss Airline or Swiss Airlines flight booking directly over the phone to discover the perfect cheap flight at the most affordable price. Transition effortlessly from planning to departure with features like Unpublished Airfare deals, Easy Changes, and Instant Cancellation with Quick Refunds. Experience hassle-free assistance, secure payment reservations, and 24/7 Customer Service that ensures you are never left waiting. Call Now to book new reservations and enjoy up to a 59% discount. With Swiss Airlines bookings, you have the freedom to travel for less while receiving full support for major airlines, anytime you need. And remember, our dedicated customer service is available around-the-clock with Zero Hold Time—perfect for urgent or last-minute travel plans.",
    bg: "bg-gradient-to-r from-[#e3001b] to-[#cf4a5d]",
  },
  {
    title: "Delta Airlines",
    subtitle:
      "When planning your next trip, consider Delta Airlines for unbeatable domestic and international flight reservation deals. Whether you're looking to book the perfect cheap flight at the most affordable price or need flexibility with your travel plans, Delta Air flight booking has you covered. Experience the convenience of unpublished airfare deals, easy changes, and instant cancellation with quick refunds, ensuring a stress-free journey. Our expert team is ready to assist you with secure payment reservations and provide 24/7 customer service, ensuring that every aspect of your booking is hassle-free. Plus, when you call now to book new reservations, you can get up to a 59% discount. Don't miss out on this opportunity to travel for less and enjoy support for major airlines whenever you need it, all with zero hold time.",
    bg: "bg-gradient-to-r from-[#c8102e] to-[#0062a1]",
  },
  {
    title: "United Airlines",
    subtitle:
      "Experience seamless travel with United Airlines Bookings, where you can book the perfect cheap flight at the best and most affordable price directly over the phone. Whether you're planning domestic escapades or setting sights on international horizons, United Air flight reservations ensures your journey begins on a high note. Travel for Less with exclusive benefits like unpublished airfare deals, easy changes, and instant cancellation with quick refunds, all backed by hassle-free assistance. Secure your flight with secure payment reservations and enjoy 24/7 customer service that guarantees zero hold time. Don't miss out—call now to book new reservations and get up to 59% discount, along with expert support for major airlines whenever you need it. Choose United Airlines flight deals for an unmatched travel experience that keeps you returning for more.",
    bg: "bg-gradient-to-r from-[#004b87] to-[#0066b3]",
  },
];

const SectionSlider = () => {
  return (
    <div className="">
      {sections.map((section, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`h-auto w-full ${section.bg} text-white px-4 py-12 relative`}
        >
          {/* Background Gradient */}
          <div className="absolute top-0 left-0 w-full h-full opacity-60 z-0"></div>

          {/* Optional Pattern or Image */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/path-to-your-pattern.svg')] opacity-30 z-0"></div>

          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {section.title}
            </h2>
            <p className="text-lg md:text-xl max-w-7xl mb-6">
              {section.subtitle}
            </p>
            <SectionCTA />
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default SectionSlider;
