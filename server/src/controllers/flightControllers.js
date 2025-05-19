import duffel from "../config/duffel.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// Valid cabin classes according to Duffel API documentation
const VALID_CABIN_CLASSES = new Set([
  "economy",
  "premium_economy",
  "business",
  "first",
]);

// Search Flights function
/**
 * @desc Handles flight search using the Duffel API
 * @route POST /api/search-flights
 */
export const searchFlights = async (req, res) => {
  try {
    const {
      origin,
      destination,
      departure_date,
      return_date,
      adults = 1,
      children = 0,
      infants = 0,
      cabin_class = "economy",
    } = req.body;

    // console.log("🔥 Request body from frontend:", req.body);

    // Input validation
    if (!origin || !destination || !departure_date) {
      return res.status(400).json({
        error:
          "Missing required fields: origin, destination, or departure_date",
      });
    }

    if (adults < 1) {
      return res
        .status(400)
        .json({ error: "At least one adult passenger is required" });
    }

    if (!VALID_CABIN_CLASSES.has(cabin_class.toLowerCase())) {
      return res.status(400).json({ error: "Invalid cabin class" });
    }

    // Create passengers array
    const passengers = [];

    // Duffel requires individual passenger objects for each traveler
    for (let i = 0; i < adults; i++) {
      passengers.push({ type: "adult" });
    }
    for (let i = 0; i < children; i++) {
      passengers.push({ type: "child" });
    }
    for (let i = 0; i < infants; i++) {
      passengers.push({ type: "infant_without_seat" }); // Duffel-specific type
    }

    // Create flight slices
    const slices = [
      {
        origin: origin.toUpperCase(), // IATA codes are typically uppercase
        destination: destination.toUpperCase(),
        departure_date,
      },
    ];

    // Add return flight if specified
    if (return_date) {
      slices.push({
        origin: destination.toUpperCase(),
        destination: origin.toUpperCase(),
        departure_date: return_date,
      });
    }

    // Create offer request with Duffel API
    const offerRequest = await duffel.offerRequests.create({
      slices,
      passengers,
      cabin_class: cabin_class.toLowerCase(),
    });

    // Directly use offers from the offer request response
    // Note: Duffel returns offers directly in the offer request response
    res.status(200).json({
      offers: offerRequest.data.offers,
    });
  } catch (err) {
    // Enhanced error handling
    console.error("Duffel API Error:", err.response?.data || err.message);

    // Forward Duffel API validation errors
    const statusCode = err.response?.status || 500;
    const errorMessage =
      err.response?.data?.errors?.[0]?.message ||
      "Failed to fetch flights from Duffel API";

    res.status(statusCode).json({
      error: errorMessage,
      details: err.response?.data?.errors,
    });
  }
};

// Place auto-suggestion function
/**
 * @desc Handles airport/city autocomplete using Duffel API
 * @route GET /api/place-suggestions?query=del
 */
export const placeAutoSuggestion = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const response = await axios.get(
      "https://api.duffel.com/places/suggestions",
      {
        params: { query },
        headers: {
          Authorization: `Bearer ${process.env.DUFFEL_API_KEY}`,
          "Duffel-Version": "v1",
        },
      }
    );

    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Duffel API error details:", {
      status: error.response?.status,
      data: error.response?.data,
    });

    res.status(500).json({
      error: "Failed to fetch place suggestions",
      details: error.response?.data || error.message,
    });
  }
};
