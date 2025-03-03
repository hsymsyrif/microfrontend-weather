import React, { Suspense } from "react";

const WeatherWidget = React.lazy(() => import("remoteWeather/WeatherWidget"));

const WeatherContainer = () => {
  return (
    <Suspense fallback={<div>Loading Weather Widget...</div>}>
      <WeatherWidget />
    </Suspense>
  );
};

export default WeatherContainer;
