"use client";

import { useState, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format, parseISO } from "date-fns";

import {
  ChevronDown,
  Calendar as CalendarIcon,
  MapPin,
  CalendarDays,
  Users,
  Plus,
  Minus,
  Loader2,
} from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { fetchSuggestions } from "@/redux/slices/suggestionSlice";
import { searchFlights } from "@/redux/slices/flightSearchSlice";
import Loader from "./LoadingPage";

export default function FlightSearch({ showModifyButton = false }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const prefill = {
    origin: searchParams.get("origin") || "",
    destination: searchParams.get("destination") || "",
    departure_date: searchParams.get("departure_date") || null,
    return_date: searchParams.get("return_date") || null,
    adults: parseInt(searchParams.get("adults")) || 1,
    children: parseInt(searchParams.get("children")) || 0,
    infants: parseInt(searchParams.get("infants")) || 0,
    cabin_class: searchParams.get("cabin_class") || "Economy",
  };

  const [tripType, setTripType] = useState(
    prefill.return_date ? "roundTrip" : "oneWay"
  );
  const [departureDate, setDepartureDate] = useState(
    prefill.departure_date ? parseISO(prefill.departure_date) : null
  );
  const [returnDate, setReturnDate] = useState(
    prefill.return_date ? parseISO(prefill.return_date) : null
  );
  const [from, setFrom] = useState(prefill.origin);
  const [to, setTo] = useState(prefill.destination);
  const [fromSuggestionsVisible, setFromSuggestionsVisible] = useState(false);
  const [toSuggestionsVisible, setToSuggestionsVisible] = useState(false);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  const [passengers, setPassengers] = useState({
    adults: prefill.adults,
    children: prefill.children,
    infants: prefill.infants,
  });
  const [cabinClass, setCabinClass] = useState(prefill.cabin_class);

  const [loading, setLoading] = useState(false);

  const updateCount = (type, delta) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const handleFromChange = async (e) => {
    const value = e.target.value;
    setFrom(value);
    if (value.length >= 2) {
      setLoadingSuggestions(true);
      const response = await dispatch(fetchSuggestions(value)).unwrap();
      setFromSuggestions(response);
      setFromSuggestionsVisible(true);
      setLoadingSuggestions(false);
    } else {
      setFromSuggestionsVisible(false);
    }
  };

  const handleToChange = async (e) => {
    const value = e.target.value;
    setTo(value);
    if (value.length >= 2) {
      setLoadingSuggestions(true);
      const response = await dispatch(fetchSuggestions(value)).unwrap();
      setToSuggestions(response);
      setToSuggestionsVisible(true);
      setLoadingSuggestions(false);
    } else {
      setToSuggestionsVisible(false);
    }
  };

  const extractIATACode = (input) => {
    const match = input.match(/\((\w{3})\)$/);
    return match ? match[1] : input;
  };

  const handleSearch = async () => {
    if (!from || !to || !departureDate) {
      alert("All fields are required!");
      return;
    }

    const params = {
      origin: extractIATACode(from),
      destination: extractIATACode(to),
      departure_date: departureDate.toISOString(),
      return_date: tripType === "roundTrip" ? returnDate?.toISOString() : null,
      trip_type: tripType,
      adults: passengers.adults,
      children: passengers.children,
      infants: passengers.infants,
      cabin_class: cabinClass,
    };

    setLoading(true);

    setTimeout(async () => {
      try {
        await dispatch(searchFlights(params)).unwrap();
        const query = new URLSearchParams({
          origin: params.origin,
          destination: params.destination,
          departure_date: params.departure_date,
          ...(params.return_date && { return_date: params.return_date }),
          adults: passengers.adults.toString(),
          children: passengers.children.toString(),
          infants: passengers.infants.toString(),
          cabin_class: cabinClass.toLowerCase(),
        });
        router.push(`/flights?${query.toString()}`);
      } catch (error) {
        console.error("❌ Failed to fetch flights:", error);
      }
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    if (tripType === "oneWay") setReturnDate(null);
  }, [tripType]);
  if (loading) {
    return (
      <div className="w-full h-[100vh]">
        <Loader />
      </div>
    );
  }

  return (
    <Suspense fallback={<Loader />}>
      <Card className="p-6 shadow-lg w-full max-w-8xl mx-auto bg-white rounded-none">
        <div className="flex gap-2 mb-2">
          <button
            onClick={() => setTripType("roundTrip")}
            className={`text-sm px-3 py-1 rounded-none ${
              tripType === "roundTrip"
                ? "bg-primary-blue text-white"
                : "bg-gray-200"
            }`}
          >
            Round Trip
          </button>
          <button
            onClick={() => setTripType("oneWay")}
            className={`text-sm px-3 py-1 rounded-none ${
              tripType === "oneWay"
                ? "bg-primary-blue text-white"
                : "bg-gray-200"
            }`}
          >
            One Way
          </button>
        </div>
        <CardContent className="grid  md:grid-cols-1 lg:grid-cols-2 gap-4">
          {/* From Input */}
          <div className="relative">
            <label className="text-md font-bold text-primary-blue flex items-center gap-1">
              <MapPin className="w-5 h-5" /> From Airport
            </label>
            <Input
              value={from}
              onChange={handleFromChange}
              placeholder="e.g. New York (JFK)"
              className="mt-1 py-5"
            />
            {fromSuggestionsVisible && (
              <div className="absolute z-10 bg-white border mt-1 w-full rounded shadow max-h-60 overflow-y-auto">
                {loadingSuggestions ? (
                  <div className="flex justify-center items-center py-4">
                    <Loader2 className="animate-spin w-5 h-5 text-primary-blue" />
                  </div>
                ) : (
                  fromSuggestions.map((item) => (
                    <div
                      key={item.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => {
                        setFrom(`${item.city_name} (${item.iata_code})`);
                        setFromSuggestionsVisible(false);
                      }}
                    >
                      {item.city_name} ({item.iata_code}) – {item.name}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* To Input */}
          <div className="relative">
            <label className="text-md font-bold text-primary-blue flex items-center gap-1">
              <MapPin className="w-5 h-5" /> To Airport
            </label>
            <Input
              value={to}
              onChange={handleToChange}
              placeholder="e.g. London (LHR)"
              className="mt-1 py-5"
            />
            {toSuggestionsVisible && (
              <div className="absolute z-10 bg-white border mt-1 w-full rounded shadow max-h-60 overflow-y-auto">
                {loadingSuggestions ? (
                  <div className="flex justify-center items-center py-4">
                    <Loader2 className="animate-spin w-5 h-5 text-primary-blue" />
                  </div>
                ) : (
                  toSuggestions.map((item) => (
                    <div
                      key={item.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => {
                        setTo(`${item.city_name} (${item.iata_code})`);
                        setToSuggestionsVisible(false);
                      }}
                    >
                      {item.city_name} ({item.iata_code}) – {item.name}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Departure Date */}
          <div>
            <label className="text-md font-bold text-primary-blue flex items-center gap-1">
              <CalendarDays className="w-5 h-5" /> Departure Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full mt-1 flex justify-between items-center py-5"
                >
                  {departureDate
                    ? format(departureDate, "PPP")
                    : "Select a date"}
                  <CalendarIcon className="w-5 h-5 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={departureDate}
                  onSelect={setDepartureDate}
                  disabled={{ before: new Date() }}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Return Date */}
          <div>
            <label className="text-md font-bold text-primary-blue flex items-center gap-1">
              <CalendarDays className="w-5 h-5" /> Return Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full mt-1 flex justify-between items-center py-5"
                  disabled={tripType === "oneWay"}
                >
                  {returnDate ? format(returnDate, "PPP") : "Select a date"}
                  <CalendarIcon className="w-5 h-5 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  disabled={{ before: departureDate || new Date() }}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Passengers & Cabin Class */}
          <div className="col-span-2 relative">
            <label className="text-md font-bold text-primary-blue flex items-center gap-1">
              <Users className="w-5 h-5" /> Passengers
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full mt-1 py-5 flex justify-between"
                >
                  {`${passengers.adults} Adult${
                    passengers.adults > 1 ? "s" : ""
                  }${
                    passengers.children > 0
                      ? `, ${passengers.children} Child`
                      : ""
                  }${
                    passengers.infants > 0
                      ? `, ${passengers.infants} Infant`
                      : ""
                  } - ${cabinClass}`}
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4 space-y-4">
                {["adults", "children", "infants"].map((type) => (
                  <div key={type} className="flex justify-between items-center">
                    <span className="capitalize">{type}</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCount(type, -1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-4 text-center">
                        {passengers[type]}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCount(type, 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium">Cabin Class</label>
                  <Select value={cabinClass} onValueChange={setCabinClass}>
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue placeholder="Select cabin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Economy">Economy</SelectItem>
                      <SelectItem value="Premium Economy">
                        Premium Economy
                      </SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="First">First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Search Button */}
          <div className="col-span-full mt-4 text-center">
            <Button
              onClick={handleSearch}
              className="w-full md:w-auto h-full bg-primary-red hover:bg-primary-blue text-white text-lg font-semibold rounded-[8px_0_8px_0] transition-all duration-300"
            >
              {showModifyButton ? "Modify Flights" : "Search Flights"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Suspense>
  );
}
