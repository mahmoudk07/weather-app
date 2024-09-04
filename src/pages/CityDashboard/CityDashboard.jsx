import React, { useEffect } from 'react'
import useWeatherData from '../../hooks/useWeatherData';
import { Spinner } from "flowbite-react";
import Select from "../../components/Select/Select"
import WeatherSummary from '../../components/Weather/WeatherSummary/WeatherSummary'
import WeatherForecast from '../../components/Weather/WeatherForecast/WeatherForecast'
import LineChart from '../../components/Charts/LineChart/LineChart'
import RainfallChart from "../../components/Charts/RainfallChart/RainfallChart"
const CityDashboard = () => {
  const { loading, currentWeather, forecastWeather, historicalWeather, city, fetchWeatherData } = useWeatherData();
  useEffect(() => {
    // eslint-disable-next-line
    fetchWeatherData(city);
  }, [fetchWeatherData, city]);
  return (
    <div className='weather-dashboard-container'>
      <div className = 'select-container'>
        <Select onSelectChange = {fetchWeatherData} />
      </div>
      {loading && ( <div className='spinner-container'>
        <Spinner color="info" size="5xl" className="h-12 w-12" />
      </div> )}
      {!loading && currentWeather && ( 
        <>
          <div className='weather-dashboard-upper'>
            <WeatherSummary data={currentWeather} forecastWeather={forecastWeather[0]} currentCity={city} />
            <LineChart data={historicalWeather} />
          </div>
          <div className='weather-dashboard-lower'>
            <WeatherForecast forecastWeather={forecastWeather} />
            <RainfallChart data={historicalWeather} />
          </div>
        </>
      )}
    </div>
  )
}
export default CityDashboard