import express from "express";
import {
  placeAutoSuggestion,
  searchFlights,
} from "../controllers/flightControllers.js";

const router = express.Router();

// POST /api/flights/search
router.post("/search", searchFlights);
// GET /api/flights/place-suggestions
router.get("/place-suggestions", placeAutoSuggestion);

export default router;
