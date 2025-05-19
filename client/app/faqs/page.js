"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does SpidyTraveller offer?",
    answer:
      "SpidyTraveller offers flight bookings, hotel reservations, vacation packages, and 24/7 customer support for all your travel needs.",
  },
  {
    question: "How can I book a flight through SpidyTraveller?",
    answer:
      "You can book a flight directly on our website or call our toll-free number at (844) 919-8610 for personalized assistance from our travel experts.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, cancellation and modification policies vary by airline or hotel. Please contact our support team as soon as possible to assist you with changes.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No, SpidyTraveller believes in transparent pricing. All applicable taxes and fees are clearly shown before you confirm your booking.",
  },
  {
    question: "Do you offer any travel deals or discounts?",
    answer:
      "Yes! We regularly offer exclusive deals and discounted fares. Check our homepage or call (844) 919-8610 to learn about current offers.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-24 text-gray-800 mt-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-rose-500 to-yellow-400 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Have questions about how SpidyTraveller works? Find answers to the
            most common queries below.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-5 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-gray-700 font-medium">
            Still have questions? Call our support team 24/7:
          </p>
          <a
            href="tel:+18449198610"
            className="text-2xl text-rose-600 font-bold mt-2 inline-block hover:underline"
          >
            (844) 919-8610
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
