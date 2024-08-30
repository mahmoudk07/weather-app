import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../../services/weatherInfo/weatherSlice"
import WeatherSummary from './components/WeatherSummary';
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
    // useEffect(() => {
    //     fetchWeatherData();
    // }, [dispatch]);
  return (
    <div className = 'flex justify-center items-center min-h-[50vh]'>
        <WeatherSummary data={data} />
    </div>
  )
}
export default LandingDisplay