import React, { useEffect } from 'react'
import useWeatherData from '../../hooks/useWeatherData.js';
import Select from "../../components/Select/Select.jsx"
import Loading from "../../components/Spinner/Loading.jsx"
import WeatherSummary from '../../components/Weather/WeatherSummary/WeatherSummary.jsx';
import WeatherForecast from '../../components/Weather/WeatherForecast/WeatherForecast.jsx';
const LandingDisplay = () => {
    const { currentWeather, forecastWeather, loading, city, country, fetchWeatherData } = useWeatherData();
    useEffect(() => {
        fetchWeatherData();
    }, [fetchWeatherData]);
  return (
      <div className='landing-container'>
        <div className='select-container'>
          <Select onSelectChange={fetchWeatherData} />
      </div>
      <Loading isLoading={loading} />
        {!loading && currentWeather && (
          <>
            <WeatherSummary data={currentWeather} forecastWeather={forecastWeather[0]} currentCity = {city} currentCountry = {country} />
            <WeatherForecast forecastWeather={forecastWeather} />
          </>
      )}
      </div>
  )
}
export default LandingDisplay
