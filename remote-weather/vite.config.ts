import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteWeather",
      filename: "remoteEntry.js",
      exposes: {
        "./WeatherWidget": "./src/components/WeatherWidget.tsx",
        "./weatherSlice": "./src/redux/weatherSlice.ts",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    host: "10.100.2.250",
    port: 5001,
  },
  build: {
    target: "esnext",
    minify: false,
  },
});
