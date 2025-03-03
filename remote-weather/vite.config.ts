import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {federation} from "@module-federation/vite";

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
    port: 5001, // Ensure this port is correct
  },
  build: {
    target: "esnext",
    minify: false,
  },
});
