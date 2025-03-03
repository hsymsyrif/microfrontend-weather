import { configureStore } from "@reduxjs/toolkit";
const weatherReducer = await import("remoteWeather/weatherSlice").then((m) => m.default);

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
