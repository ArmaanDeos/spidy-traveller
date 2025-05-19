"use client";
import { configureStore } from "@reduxjs/toolkit";
import suggestionsReducer from "./slices/suggestionSlice";
import flightSearchReducer from "./slices/flightSearchSlice";

export const store = configureStore({
  reducer: {
    suggestions: suggestionsReducer,
    flightSearch: flightSearchReducer,
  },
});
