import {
  ArrowRightLeft,
  Clock,
  DollarSign,
  IndianRupee,
  Plane,
} from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { useState } from "react";

const timeSlots = [
  "12AM - 2AM",
  "2AM - 4AM",
  "4AM - 6AM",
  "6AM - 8AM",
  "8AM - 10AM",
  "10AM - 12PM",
  "12PM - 2PM",
  "2PM - 4PM",
  "4PM - 6PM",
  "6PM - 8PM",
  "8PM - 10PM",
  "10PM - 12AM",
];

const Filters = () => {
  const [selectedTimes, setSelectedTimes] = useState([]);

  const toggleTimeSlot = (slot) => {
    setSelectedTimes((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  };

  return (
    <div className="space-y-10 w-full max-w-md   bg-white">
      {/* Stops */}
      <div>
        <h3 className="font-semibold flex items-center gap-2 mb-4 text-gray-800 text-base sm:text-lg border-b pb-2">
          <ArrowRightLeft size={18} /> Stops
        </h3>
        <div className="space-y-2">
          {["Non-stop (0)", "1 Stop", "2+ Stops"].map((stop) => (
            <label key={stop} className="flex items-center gap-2">
              <Checkbox />
              <span className="text-sm sm:text-base text-gray-600">{stop}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Departure Time */}
      <div>
        <h3 className="font-semibold flex items-center gap-2 mb-4 text-gray-800 text-base sm:text-lg border-b pb-2">
          <Clock size={18} /> Departure Time
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2 ">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => toggleTimeSlot(slot)}
              className={`text-xs sm:text-sm px-3 py-2 rounded-lg border font-medium transition-all duration-200 cursor-pointer
                  ${
                    selectedTimes.includes(slot)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-blue-100"
                  }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold flex items-center gap-2 mb-4 text-gray-800 text-base sm:text-lg border-b pb-2">
          <DollarSign size={18} /> Price Range
        </h3>
        <Slider
          defaultValue={[1000, 8000]}
          min={100}
          max={10000}
          step={500}
          range="true"
          className="cursor-pointer"
        />
        <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
          <span>$100</span>
          <span>$10000</span>
        </div>
      </div>

      {/* Airlines */}
      <div>
        <h3 className="font-semibold flex items-center gap-2 mb-4 text-gray-800 text-base sm:text-lg border-b pb-2">
          <Plane size={18} /> Airlines
        </h3>
        <div className="space-y-2">
          {["Indigo", "Air India", "Emirates", "Vistara", "SpiceJet"].map(
            (airline) => (
              <label key={airline} className="flex items-center gap-2">
                <Checkbox />
                <span className="text-sm sm:text-base text-gray-600">
                  {airline}
                </span>
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
