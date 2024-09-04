import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spinner } from "flowbite-react";
import { fetchCurrentWeather } from '../../services/weatherInfo/weatherSlice'
import Select from "../../components/Select/Select"
import WeatherSummary from '../../components/Weather/WeatherSummary/WeatherSummary'
import WeatherForecast from '../../components/Weather/WeatherForecast/WeatherForecast'
import LineChart from '../../components/Charts/LineChart/LineChart'
import RainfallChart from "../../components/Charts/RainfallChart/RainfallChart"
const CityDashboard = () => {
  const { loading, currentWeather, forecastWeather, historicalWeather } = useSelector(state => state.Weather)
  const dispatch = useDispatch();
  const fetchWeatherData = useCallback(async () => {
    try {
      await dispatch(fetchCurrentWeather()).unwrap();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  // useEffect(() => {
  //   // eslint-disable-next-line
  //   fetchWeatherData();
  // }, [fetchWeatherData]);
  return (
    <div className='weather-dashboard-container'>
      <div className = 'select-container'>
        <Select />
      </div>
      {loading ? <div className='spinner-container'>
        <Spinner color="info" size="5xl" className="h-12 w-12" />
      </div> : ''}
      {!loading && currentWeather ? 
        <>
          <div className='weather-dashboard-upper'>
            <WeatherSummary data={currentWeather} forecastWeather={forecastWeather[0]} />
            <LineChart data={historicalWeather} />
          </div>
          <div className='weather-dashboard-lower'>
            <WeatherForecast forecastWeather={forecastWeather} />
            <RainfallChart data={historicalWeather} />
          </div>
        </>
      : ''}
    </div>
  )
}
export default CityDashboard