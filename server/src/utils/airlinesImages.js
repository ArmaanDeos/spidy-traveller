// utils/airlineImages.js
const airlineLogos = {
  AI: "/airlines/airindia.png",
  BA: "/airlines/britishairways.png",
  // fallback
  default: "/airlines/default.png",
};

export const getAirlineLogo = (code) =>
  airlineLogos[code] || airlineLogos["default"];
