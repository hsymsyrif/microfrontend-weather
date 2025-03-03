import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {federation} from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hostApp",
      remotes: {
        remoteWeather: "http://localhost:5001/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5000,
  },
});
