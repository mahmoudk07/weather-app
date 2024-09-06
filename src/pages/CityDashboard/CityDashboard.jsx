import React, { useEffect } from 'react'
import useWeatherData from '../../hooks/useWeatherData';
import Loading from "../../components/Spinner/Loading"
import Select from "../../components/Select/Select"
import WeatherSummary from '../../components/Weather/WeatherSummary/WeatherSummary'
import WeatherForecast from '../../components/Weather/WeatherForecast/WeatherForecast'
import LineChart from '../../components/Charts/LineChart/LineChart'
import RainfallChart from "../../components/Charts/RainfallChart/RainfallChart"
const CityDashboard = () => {
  const { loading, currentWeather, forecastWeather, historicalWeather, city, country, fetchWeatherData } = useWeatherData();
  useEffect(() => {
    fetchWeatherData(city);
  }, [fetchWeatherData, city]);
  return (
    <div className='weather-dashboard-container'>
      <div className = 'select-container'>
        <Select onSelectChange = {fetchWeatherData} />
      </div>
      <Loading isLoading={loading} />
      {!loading && currentWeather && ( 
        <>
          <div className='weather-dashboard-upper'>
            <WeatherSummary data={currentWeather} forecastWeather={forecastWeather[0]} currentCity={city} currentCountry={country} />
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