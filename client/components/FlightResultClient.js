"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Filters from "@/components/Filters";
import FlightListing from "@/components/FlightResultCard";
import FlightSearch from "@/components/FlightSearchForm";
import DatePicker from "@/components/DatePicker";
import { SlidersHorizontal } from "lucide-react";
import Loader from "@/components/LoadingPage";

const FlightResultClient = () => {
  const searchParams = useSearchParams();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortOption, setSortOption] = useState("recommended");

  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const departure_date = searchParams.get("departure_date");
  const return_date = searchParams.get("return_date");
  const adults = searchParams.get("adults");
  const children = searchParams.get("children");
  const infants = searchParams.get("infants");
  const cabin_class = searchParams.get("cabin_class");

  const results = useSelector((state) => state.flightSearch.results);

  useEffect(() => {
    console.log("📦 Duffel Flight Search Results (Page):", results);
  }, [results]);

  const totalFlights = results?.length || 0;
  const firstResult = results?.[0] || null;

  const fullOrigin =
    firstResult?.slices?.[0]?.origin?.city_name ||
    firstResult?.slices?.[0]?.origin?.name ||
    origin;

  const fullDestination =
    firstResult?.slices?.[0]?.destination?.city?.name ||
    firstResult?.slices?.[0]?.destination?.city_name ||
    firstResult?.slices?.[0]?.destination?.name ||
    destination;

  const formattedOrigin = `${fullOrigin} (${origin})`;
  const formattedDestination = `${fullDestination} (${destination})`;

  const sortResults = (option) => {
    switch (option) {
      case "price-low":
        return [...results].sort(
          (a, b) => (a.price?.total ?? 0) - (b.price?.total ?? 0)
        );
      case "price-high":
        return [...results].sort(
          (a, b) => (b.price?.total ?? 0) - (a.price?.total ?? 0)
        );
      case "duration":
        return [...results].sort(
          (a, b) => a.slices[0].duration - b.slices[0].duration
        );
      case "recommended":
      default:
        return results;
    }
  };

  const sortedResults = sortResults(sortOption);

  return (
    <div className="flex flex-col lg:flex-row max-w-9xl mx-auto min-h-screen pt-[120px]">
      <div className="hidden lg:block w-80 p-6 border-r bg-white sticky top-[120px] h-[calc(100vh-120px)] overflow-y-auto">
        <h2 className="text-lg font-bold mb-6">Filters</h2>
        <Filters />
      </div>

      {showMobileFilters && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="fixed top-0 left-0 bottom-0 w-72 bg-white shadow-lg z-60 p-6 overflow-y-auto transition-transform duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Filters</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-sm text-blue-500"
              >
                Close
              </button>
            </div>
            <Filters />
          </div>
        </div>
      )}

      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <h1 className="text-xl sm:text-2xl font-bold">
              {formattedOrigin} to {formattedDestination}
            </h1>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-gray-600">
              <p className="text-sm sm:text-base">
                {departure_date && new Date(departure_date).toDateString()}
              </p>
              <p className="text-sm sm:text-base">
                Flight Search Results: <strong>{totalFlights}</strong>
              </p>
            </div>
          </div>

          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="duration">Shortest Duration</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-10">
          <FlightSearch showModifyButton={true} />
        </div>

        <DatePicker />

        <div className="lg:hidden">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="fixed bottom-6 right-6 z-50 bg-white border shadow-md rounded-full px-6 py-3 flex items-center gap-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        <FlightListing
          origin={origin}
          destination={destination}
          departure_date={departure_date}
          return_date={return_date}
          adults={adults}
          infants={infants}
          cabin_class={cabin_class}
          results={sortedResults}
        />
      </div>
    </div>
  );
};

export default FlightResultClient;
