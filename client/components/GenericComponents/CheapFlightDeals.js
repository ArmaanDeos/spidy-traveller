"use client";

import { useState } from "react";
import { Plane } from "lucide-react";

const topDestinations = [
  { city: "New York", code: "JFK", date: "2025-06-01", price: 350 },
  { city: "London", code: "LHR", date: "2025-06-03", price: 450 },
  { city: "Paris", code: "CDG", date: "2025-06-05", price: 430 },
  { city: "Dubai", code: "DXB", date: "2025-06-07", price: 480 },
  { city: "Tokyo", code: "HND", date: "2025-06-09", price: 620 },
  { city: "Singapore", code: "SIN", date: "2025-06-11", price: 570 },
  { city: "Toronto", code: "YYZ", date: "2025-06-13", price: 390 },
  { city: "Barcelona", code: "BCN", date: "2025-06-15", price: 410 },
  { city: "Istanbul", code: "IST", date: "2025-06-17", price: 460 },
  { city: "Bangkok", code: "BKK", date: "2025-06-19", price: 510 },
];

const departureCities = [
  { city: "Los Angeles", code: "LAX" },
  { city: "Chicago", code: "ORD" },
  { city: "Miami", code: "MIA" },
  { city: "Dallas", code: "DFW" },
  { city: "San Francisco", code: "SFO" },
];

const CheapFlightDeals = () => {
  const [fromCity, setFromCity] = useState(departureCities[0]);

  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Cheap Flight Deals
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Book now and save on flights to the world’s most popular destinations.
        </p>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2 text-lg">
            Select Departure City:
          </label>
          <select
            value={fromCity.code}
            onChange={(e) =>
              setFromCity(
                departureCities.find((city) => city.code === e.target.value)
              )
            }
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
          >
            {departureCities.map((city) => (
              <option key={city.code} value={city.code}>
                {city.city} ({city.code})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {topDestinations.map((dest, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-blue text-white p-2 rounded-full">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {fromCity.city} ({fromCity.code}) → {dest.city}{" "}
                  <span className="text-sm text-gray-500">({dest.code})</span>
                </h3>
                <p className="text-sm text-gray-500">Departure: {dest.date}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="text-xl font-bold text-green-600">
                ${dest.price}
              </div>
              <a
                href="tel:+1-(844) 919-8610"
                className="rounded-full text-sm px-6 py-2 font-semibold text-white bg-gradient-to-r from-primary-blue to-primary-red hover:from-primary-red hover:to-primary-blue shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CheapFlightDeals;
