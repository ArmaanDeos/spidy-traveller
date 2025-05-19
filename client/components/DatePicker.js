const DatePicker = () => {
  const dates = [
    "Apr 4",
    "Apr 5",
    "Apr 6",
    "Apr 7",
    "Apr 8",
    "Apr 9",
    "Apr 10",
  ];
  const selectedDate = "Apr 7";

  return (
    <div className="mb-8">
      {/* Date Price Selector */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 min-w-max pb-4 scroll-snap-x scroll-snap-mandatory">
          {dates.map((date, i) => (
            <div
              key={date}
              className={`p-4 rounded-xl min-w-[120px] text-center border transition-all cursor-pointer scroll-snap-align-start ${
                date === selectedDate
                  ? "border-blue-500 bg-blue-50 shadow-sm"
                  : "border-gray-200 hover:border-blue-200"
              }`}
            >
              <div
                className={`font-medium ${
                  date === selectedDate ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {date}
              </div>
              <div
                className={`text-sm ${
                  date === selectedDate ? "text-blue-500" : "text-gray-500"
                }`}
              >
                ${5000 + i * 200}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
