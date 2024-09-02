import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../../services/weatherInfo/weatherSlice"
import { Spinner } from "flowbite-react";
import WeatherInfo from './components/WeatherInfo.jsx';
import WeatherForecast from './components/WeatherForecast.jsx';
const LandingDisplay = () => {
    const { currentWeather, loading } = useSelector(state => state.Weather);
    const dispatch = useDispatch();
    const fetchWeatherData = useCallback(async () => {
      try {
        await dispatch(fetchCurrentWeather()).unwrap();
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
      {loading ? <div className='spinner-container'>
        <Spinner color="info" size="5xl" className="h-12 w-12" />
      </div> : ''}
      {!loading && currentWeather ? 
        <>
          <WeatherInfo />
          <WeatherForecast />
        </> : ''
      }
    </div>
  )
}
export default LandingDisplay
