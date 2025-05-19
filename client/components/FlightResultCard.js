"use client";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchFlights,
  setSearchParams,
} from "@/redux/slices/flightSearchSlice";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  DollarSign,
  Phone,
  Plane,
  Ticket,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";

const FlightListing = ({
  origin,
  destination,
  departure_date,
  return_date,
  adults,
  children,
  infants,
  cabin_class,
}) => {
  const dispatch = useDispatch();
  const [expandedId, setExpandedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 20;

  const { results, loading, error } = useSelector(
    (state) => state.flightSearch
  );

  useEffect(() => {
    const params = {
      origin,
      destination,
      departure_date,
      return_date,
      adults: Number(adults) || 1,
      children: Number(children) || 0,
      infants: Number(infants) || 0,
      cabin_class: cabin_class || "economy",
    };

    dispatch(setSearchParams(params));
    dispatch(searchFlights(params));
  }, [
    origin,
    destination,
    departure_date,
    return_date,
    adults,
    children,
    infants,
    cabin_class,
    dispatch,
  ]);

  const rawOffers = (results || []).filter((offer) => {
    const slices = offer.slices || [];
    const outbound = slices[0];
    const inbound = slices[1];
    const outboundLastSegment =
      outbound?.segments?.[outbound.segments.length - 1];
    const inboundFirstSegment = inbound?.segments?.[0];

    const matchesOutbound =
      outboundLastSegment?.destination?.iata_code === destination;

    const matchesInbound = return_date
      ? inboundFirstSegment?.origin?.iata_code === destination
      : true;

    return matchesOutbound && matchesInbound;
  });

  const startIndex = (currentPage - 1) * resultsPerPage;
  const currentFlights = rawOffers.slice(
    startIndex,
    startIndex + resultsPerPage
  );
  const totalPages = Math.ceil(rawOffers.length / resultsPerPage);

  const formatTime = (isoTime) =>
    new Date(isoTime).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const flights = useMemo(
    () =>
      currentFlights.map((offer) => {
        const slices = offer.slices || [];
        const outbound = slices[0];
        const inbound = slices[1];
        const outboundSegment = outbound?.segments?.[0];
        const inboundSegment = inbound?.segments?.[0];

        return {
          id: offer.id,
          price: offer.total_amount,
          currency: offer.total_currency || "USD",
          outbound: {
            departure: outboundSegment?.departing_at,
            arrival: outboundSegment?.arriving_at,
            origin: outboundSegment?.origin?.iata_code,
            origin_name: outboundSegment?.origin?.name,
            destination: outboundSegment?.destination?.iata_code,
            destination_name: outboundSegment?.destination?.name,
            duration: outbound?.duration,
            stops: outbound?.segments?.length - 1,
            airline:
              outboundSegment?.marketing_carrier?.name || "Unknown Airline",
            flight_number:
              outboundSegment?.marketing_carrier_flight_number || "N/A",
          },
          inbound: inboundSegment
            ? {
                departure: inboundSegment.departing_at,
                arrival: inboundSegment.arriving_at,
                origin: inboundSegment.origin.iata_code,
                origin_name: inboundSegment.origin.name,
                destination: inboundSegment.destination.iata_code,
                destination_name: inboundSegment.destination.name,
                duration: inbound?.duration,
                stops: inbound?.segments?.length - 1,
                airline:
                  inboundSegment.marketing_carrier?.name || "Unknown Airline",
                flight_number:
                  inboundSegment.marketing_carrier_flight_number || "N/A",
              }
            : null,
          airline_logo:
            offer.owner?.logo_lockup_url ||
            offer.owner?.logo_symbol_url ||
            "/flight-logo.png",
          passengers: { adults, children, infants },
          cabin_class: cabin_class || "economy",
        };
      }),
    [currentFlights, cabin_class, adults, children, infants]
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-40 text-orange-600 animate-pulse">
        <Plane className="mr-2 animate-bounce" />
        Loading flights...
      </div>
    );

  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  if (flights.length === 0)
    return <div className="text-center text-gray-500">No flights found.</div>;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="space-y-6">
        {flights.map((flight) => (
          <Card
            key={flight.id}
            className="p-6 bg-white shadow-md border rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
              {/* Airline Info */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <Image
                  src={flight.airline_logo}
                  alt={`Airline logo - ${flight.outbound.airline}`}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain rounded"
                />
                <div>
                  <h3 className="font-semibold text-orange-700">
                    {flight.outbound.airline}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {flight.outbound.flight_number}
                  </p>
                </div>
              </div>

              {/* Outbound */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <div className="text-xl font-bold text-orange-800">
                      {formatTime(flight.outbound.departure)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {flight.outbound.origin} - {flight.outbound.origin_name}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <div className="text-sm text-gray-500">
                      {flight.outbound.stops} stop ·{" "}
                      {flight.outbound.duration
                        ?.replace("PT", "")
                        .toLowerCase()}
                    </div>
                    <div className="w-full border-t border-dashed relative py-2">
                      <div className="absolute top-1/2 left-0 right-0 border-t border-orange-300"></div>
                      <Plane className="h-4 w-4 text-orange-400 mx-auto bg-white relative z-10" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-orange-800">
                      {formatTime(flight.outbound.arrival)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {flight.outbound.destination} -{" "}
                      {flight.outbound.destination_name}
                    </div>
                  </div>
                </div>

                {/* Inbound */}
                {flight.inbound && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-4">
                    <div>
                      <div className="text-xl font-bold text-orange-800">
                        {formatTime(flight.inbound.departure)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {flight.inbound.origin} - {flight.inbound.origin_name}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <div className="text-sm text-gray-500">
                        {flight.inbound.stops} stop ·{" "}
                        {flight.inbound.duration
                          ?.replace("PT", "")
                          .toLowerCase()}
                      </div>
                      <div className="w-full border-t border-dashed relative py-2">
                        <div className="absolute top-1/2 left-0 right-0 border-t border-orange-300"></div>
                        <Plane className="h-4 w-4 text-orange-400 mx-auto bg-white relative z-10" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-orange-800">
                        {formatTime(flight.inbound.arrival)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {flight.inbound.destination} -{" "}
                        {flight.inbound.destination_name}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Price & CTA */}
              <div className="sm:w-52 text-center sm:text-right space-y-3">
                <div>
                  <div className="text-gray-400 line-through text-sm">
                    ${Math.round(flight.price * 1.2)}
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    ${flight.price}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-end">
                  <a href="tel:+1-888-370-1612">
                    <Button
                      variant="outline"
                      className="gap-2 text-orange-700 border-orange-400 hover:bg-orange-100 cursor-pointer"
                    >
                      <Phone className="h-4 w-4" />
                      Assistance
                    </Button>
                  </a>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white gap-2">
                    <Ticket className="h-4 w-4" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Show More */}
            <div className="mt-4 text-right">
              <button
                onClick={() =>
                  setExpandedId((prev) =>
                    prev === flight.id ? null : flight.id
                  )
                }
                className="text-sm text-orange-600 hover:underline inline-flex items-center"
              >
                {expandedId === flight.id ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-1" />
                    Hide Details
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-1" />
                    Show More
                  </>
                )}
              </button>
            </div>

            {expandedId === flight.id && (
              <div className="mt-4 bg-orange-50 p-4 rounded-lg text-sm space-y-4 border border-orange-100 transition-all duration-300">
                <div>
                  <h4 className="font-semibold mb-1">
                    👥 Passenger Information
                  </h4>
                  <p>
                    Adults: {flight.passengers.adults} · Children:{" "}
                    {flight.passengers.children} · Infants:{" "}
                    {flight.passengers.infants}
                  </p>
                  <p>Cabin Class: {flight.cabin_class}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    💳 Payment & Booking Conditions
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>Secure online payment available</li>
                    <li>Prices include taxes & fees</li>
                    <li>Limited-time availability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    🔁 Changes & Cancellations
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>Ticket changes may incur a fee</li>
                    <li>Cancellation policy depends on airline fare rules</li>
                    <li>Refunds subject to carrier policies</li>
                  </ul>
                </div>
              </div>
            )}
          </Card>
        ))}

        {/* Pagination */}
        <div className="flex justify-center mt-8 flex-wrap items-center gap-2">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (page) =>
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 2 && page <= currentPage + 2)
            )
            .map((page, idx, arr) => {
              const prev = arr[idx - 1];
              if (prev && page - prev > 1) {
                return (
                  <span key={`dots-${page}`} className="px-2 text-gray-400">
                    ...
                  </span>
                );
              }

              return (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 ${page === currentPage ? "font-bold" : ""}`}
                >
                  {page}
                </Button>
              );
            })}
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </Suspense>
  );
};

export default FlightListing;
