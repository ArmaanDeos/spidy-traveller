"use client";
import { useState } from "react";
import {
  Plane,
  Bed,
  CalendarDays,
  MapPin,
  PhoneCall,
  Landmark,
  Utensils,
  SunMedium,
} from "lucide-react";

const tabs = ["Flights", "Hotels", "Vacations"];

const dealsData = {
  Flights: [
    {
      city: "New York ✈ Miami",
      price: "$99",
      features: ["Non-stop Flight", "Carry-on Included", "Flexible Dates"],
    },
    {
      city: "Los Angeles ✈ Las Vegas",
      price: "$79",
      features: ["1hr Flight", "Morning & Evening Slots", "Free Rescheduling"],
    },
    {
      city: "Chicago ✈ Dallas",
      price: "$89",
      features: ["Direct Route", "24x7 Customer Support", "One-way/Return"],
    },
    {
      city: "San Francisco ✈ Seattle",
      price: "$85",
      features: ["Short Flight", "Wi-Fi Available", "Flexible Cancellation"],
    },
    {
      city: "Boston ✈ Orlando",
      price: "$95",
      features: ["Early Morning Flights", "Extra Legroom", "Free Snacks"],
    },
    {
      city: "Houston ✈ Denver",
      price: "$80",
      features: ["Non-stop", "In-flight Entertainment", "Priority Boarding"],
    },
  ],
  Hotels: [
    {
      city: "Dubai 5-Star Hotel",
      price: "From $59/Night",
      features: ["Near Downtown", "Free Breakfast", "Spa & Pool Access"],
    },
    {
      city: "Paris Central Stay",
      price: "From $69/Night",
      features: ["Eiffel Tower View", "Complimentary Wi-Fi", "Family Rooms"],
    },
    {
      city: "Bangkok Resort",
      price: "From $45/Night",
      features: ["Beachside", "Buffet Meals", "Daily Housekeeping"],
    },
    {
      city: "Rome Boutique Hotel",
      price: "From $55/Night",
      features: ["Historic Center", "Free Parking", "Pet Friendly"],
    },
    {
      city: "Sydney Harbor Hotel",
      price: "From $70/Night",
      features: ["Harbor View", "Gym Access", "Breakfast Included"],
    },
    {
      city: "Tokyo Capsule Hotel",
      price: "From $35/Night",
      features: ["City Center", "24h Reception", "Modern Design"],
    },
  ],
  Vacations: [
    {
      city: "Maldives 4N/5D",
      price: "$499",
      features: ["Overwater Villa", "Snorkeling Tour", "All Meals Included"],
    },
    {
      city: "Bali Adventure",
      price: "$399",
      features: ["3N/4D Itinerary", "Temple Tour", "Local Cuisine Experience"],
    },
    {
      city: "Europe Explorer",
      price: "$999",
      features: ["Multi-City Tour", "Luxury Coach", "Museum Entry Passes"],
    },
    {
      city: "Thailand Beach Escape",
      price: "$450",
      features: ["Island Hopping", "Beach BBQ", "Spa Treatment"],
    },
    {
      city: "Caribbean Cruise",
      price: "$1200",
      features: ["7 Days", "All-Inclusive", "Excursions Included"],
    },
    {
      city: "Iceland Northern Lights",
      price: "$850",
      features: ["Guided Tours", "Hot Springs", "Photography Sessions"],
    },
  ],
};

const getIcon = (feature) => {
  if (feature.toLowerCase().includes("flight")) return <Plane size={16} />;
  if (feature.toLowerCase().includes("meal")) return <Utensils size={16} />;
  if (
    feature.toLowerCase().includes("hotel") ||
    feature.toLowerCase().includes("stay")
  )
    return <Bed size={16} />;
  if (
    feature.toLowerCase().includes("spa") ||
    feature.toLowerCase().includes("pool")
  )
    return <SunMedium size={16} />;
  if (
    feature.toLowerCase().includes("tour") ||
    feature.toLowerCase().includes("view") ||
    feature.toLowerCase().includes("hopping") ||
    feature.toLowerCase().includes("excursions")
  )
    return <MapPin size={16} />;
  if (
    feature.toLowerCase().includes("temple") ||
    feature.toLowerCase().includes("museum")
  )
    return <Landmark size={16} />;
  return <CalendarDays size={16} />;
};

export default function TabbedDealsSection() {
  const [activeTab, setActiveTab] = useState("Flights");

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
          Explore Top {activeTab} Deals
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-teal-700 text-white shadow-md"
                  : "bg-teal-100 text-teal-800 hover:bg-amber-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dealsData[activeTab].map((deal, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-teal-100 bg-white shadow-lg hover:shadow-2xl p-6 transition-all duration-300"
            >
              {/* 🔥 Limited Offer Badge */}
              <span className="absolute top-4 right-4 bg-amber-400 text-teal-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm animate-pulse">
                Limited Time!
              </span>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {deal.city}
              </h3>
              <p className="text-teal-700 font-bold text-lg mb-4">
                {deal.price}
              </p>

              {/* Features */}
              <ul className="space-y-2 text-gray-600 text-sm">
                {deal.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-teal-600">{getIcon(feature)}</span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>

              {/* ⏰ Urgency Message */}
              <p className="text-xs text-red-500 mt-2 font-semibold">
                ⏰ Hurry! Only {3 - (index % 3)} spots left
              </p>

              {/* Call to Action */}
              <a
                href="tel:+1-(844) 919-8610"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-amber-400 text-teal-900 font-medium py-2 rounded-xl hover:bg-amber-500 transition-all duration-300"
              >
                <PhoneCall size={18} /> Call Now
              </a>

              {/* ✅ Verified label */}
              <div className="mt-2 text-xs text-green-600 font-medium flex items-center gap-1">
                ✅ Verified Deal & Secure Booking
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Call Button (Mobile Only) */}
      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        <a
          href="tel:+1-(844) 919-8610"
          className="bg-amber-400 text-teal-900 font-bold px-5 py-3 rounded-full shadow-lg flex items-center gap-2 animate-bounce"
        >
          <PhoneCall size={18} /> Call to Book
        </a>
      </div>
    </>
  );
}
