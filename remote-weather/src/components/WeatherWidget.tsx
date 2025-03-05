import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";
import { RootState, AppDispatch } from "../redux/store";

const WeatherWidget = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Error fetching weather data.</p>;

  return (
    <div className="p-4 bg-blue-200 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold">Weather in {data.name}</h2>
      <p className="text-lg">{data.weather[0].description}</p>
      <p className="text-2xl">{data.main.temp}°C</p>
    </div>
  );
};

export default WeatherWidget;
