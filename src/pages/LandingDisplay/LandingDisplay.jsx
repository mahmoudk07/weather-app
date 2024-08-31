import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../../services/weatherInfo/weatherSlice"
import WeatherSummary from './components/WeatherSummary';
import WeatherMetrics from './components/WeatherMetrics'
const LandingDisplay = () => {
    const { data, loading, error } = useSelector(state => state.Weather);
    const dispatch = useDispatch();
    const fetchWeatherData = async () => {
        try {
            await dispatch(fetchCurrentWeather()).unwrap();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchWeatherData();
    }, [dispatch]);
  return (
    <div className = 'landing-container'>
        <WeatherSummary data={data} />
        <WeatherMetrics data={data} />
    </div>
  )
}
export default LandingDisplay