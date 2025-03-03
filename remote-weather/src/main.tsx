import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import WeatherWidget from "./components/WeatherWidget";

// Gunakan createRoot dari react-dom/client
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WeatherWidget />
    </Provider>
  </React.StrictMode>
);
