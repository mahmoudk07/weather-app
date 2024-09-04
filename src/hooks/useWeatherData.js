import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../services/weatherInfo/weatherSlice";

const useWeatherData = () => {
  const { currentWeather, forecastWeather, loading, city, historicalWeather, country } = useSelector((state) => state.Weather);
  const dispatch = useDispatch();
    
  // fetch weather based on selected ciy
  const fetchWeatherData = useCallback(
    async (city) => {
      try {
        await dispatch(fetchCurrentWeather(city)).unwrap();
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    },
    [dispatch]
  );
  return {
    currentWeather,
    forecastWeather,
    loading,
    city,
    historicalWeather,
    country,
    fetchWeatherData,
  };
};
export default useWeatherData;
