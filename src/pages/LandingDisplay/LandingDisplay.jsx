import React, { useEffect } from 'react'
import useWeatherData from '../../hooks/useWeatherData.js';
import { Spinner } from "flowbite-react";
import Select from "../../components/Select/Select.jsx"
import WeatherSummary from '../../components/Weather/WeatherSummary/WeatherSummary.jsx';
import WeatherForecast from '../../components/Weather/WeatherForecast/WeatherForecast.jsx';
const LandingDisplay = () => {
    const { currentWeather, forecastWeather, loading, city, fetchWeatherData } = useWeatherData();
    useEffect(() => {
        fetchWeatherData();
    }, [fetchWeatherData]);
  return (
      <div className='landing-container'>
        <Select onSelectChange = {fetchWeatherData}  />
        {loading && ( <div className='spinner-container'>
          <Spinner color="info" size="5xl" className="h-12 w-12" />
        </div> )}
        {!loading && currentWeather && (
          <>
            <WeatherSummary data={currentWeather} forecastWeather={forecastWeather[0]} currentCity = {city} />
            <WeatherForecast forecastWeather={forecastWeather} />
          </>
      )}
      </div>
  )
}
export default LandingDisplay
