import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../../services/weatherInfo/weatherSlice"
import { Spinner } from "flowbite-react";
import Select from "../../components/Select/Select.jsx"
import WeatherSummary from '../../components/Weather/WeatherSummary/WeatherSummary.jsx';
import WeatherForecast from '../../components/Weather/WeatherForecast/WeatherForecast.jsx';
const LandingDisplay = () => {
    const { currentWeather, forecastWeather, loading } = useSelector(state => state.Weather);
    const dispatch = useDispatch();
    const fetchWeatherData = useCallback(async (city) => {
      try {
        await dispatch(fetchCurrentWeather(city)).unwrap();
      } catch (error) {
        console.log(error);
      }
    }, [dispatch]);
  useEffect(() => {
    // eslint-disable-next-line
      fetchWeatherData();
  }, [fetchWeatherData]);
  return (
      <div className='landing-container'>
        <Select onSelectChange = {fetchWeatherData}  />
        {loading ? <div className='spinner-container'>
          <Spinner color="info" size="5xl" className="h-12 w-12" />
        </div> : ''}
        {!loading && currentWeather ?
          <>
            <WeatherSummary data={currentWeather} forecastWeather={forecastWeather[0]} />
            <WeatherForecast forecastWeather={forecastWeather} />
          </> : ''
        }
      </div>
  )
}
export default LandingDisplay
