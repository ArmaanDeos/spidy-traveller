import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSuggestions = createAsyncThunk(
  "suggestions/fetch",
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://genz-api.onrender.com/api/flights/place-suggestions?query=${query}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearSuggestions: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuggestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSuggestions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSuggestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSuggestions } = suggestionsSlice.actions;
export default suggestionsSlice.reducer;
