import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define types for the weather data
interface WeatherState {
  data: {
    name: string; // City name
    main: {
      temp: number; // Temperature in Kelvin
    };
    weather: { description: string }[]; // Weather description
  } | null;
  loading: boolean;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
};

// Fetch weather data from OpenWeatherMap
export const fetchWeather = createAsyncThunk("weather/fetch", async () => {
  const API_KEY = "85fffcb662081b5c678b00e00b99a2e2";
  const CITY = "Jakarta";
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
  );
  return response.data;
});

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherState["data"]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        console.error("API Error:", action.error.message);
      });
  },
});

export default weatherSlice.reducer;
