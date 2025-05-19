import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";

const FlightInfoSection = ({ title, airlineName, contentSections, faqs }) => {
  return (
    <section
      className="relative py-16 px-4 md:px-8 lg:px-20 text-gray-800 bg-fixed"
      style={{
        backgroundImage: "url('/images/section-bg.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Glassy Effect */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-lg z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-8 text-blue-900 text-center"
        >
          {title}
        </motion.h1>

        {contentSections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              {section.heading.replaceAll("EVA Air", airlineName)}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {section.points.map((point, i) => (
                <li key={i}>{point.replaceAll("EVA Air", airlineName)}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* FAQs */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <p className="font-bold text-blue-700">Q: {faq.question}</p>
                <p className="text-gray-700">A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <SectionCTA />
      </div>
    </section>
  );
};

export default FlightInfoSection;
