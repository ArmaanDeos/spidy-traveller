import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchFlights = createAsyncThunk(
  "flightSearch/search",
  async (params, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://spidy-api.onrender.com/api/flights/search",
        params
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

const flightSearchSlice = createSlice({
  name: "flightSearch",
  initialState: {
    results: [],
    searchParams: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSearchParams: (state, action) => {
      state.searchParams = action.payload;
    },
    clearFlightResults: (state) => {
      state.results = [];
      state.searchParams = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.offers || []; // make sure it's an array
      })
      .addCase(searchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSearchParams, clearFlightResults } =
  flightSearchSlice.actions;
export default flightSearchSlice.reducer;
