import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spinner } from "flowbite-react";
import { fetchCurrentWeather } from '../../services/weatherInfo/weatherSlice'
import WeatherInfo from '../LandingDisplay/components/WeatherInfo'
import WeatherForecast from '../LandingDisplay/components/WeatherForecast'
import LineChart from '../../components/LineChart/LineChart'
import RainfallChart from "../../components/LineChart/RainfallChart"
// import { dummyClimateData } from '../../data'
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
  useEffect(() => {
    // eslint-disable-next-line
    fetchWeatherData();
  }, [fetchWeatherData]);
  return (
    <div className='w-full min-h-[90vh] px-[3%] py-[1%]'>
      {loading ? <div className='spinner-container'>
        <Spinner color="info" size="5xl" className="h-12 w-12" />
      </div> : ''}
      {!loading && currentWeather ? 
        <>
          <div className='flex xs:flex-col lg:flex-row md:items-center items-start gap-5 mb-5 justify-around'>
            <WeatherInfo data={currentWeather} forecastWeather={forecastWeather[0]} />
            <LineChart data={historicalWeather} />
          </div>
          <div className='flex xs:flex-col lg:flex-row md:items-center items-start gap-5 justify-around'>
            <WeatherForecast forecastWeather={forecastWeather} />
            <RainfallChart data={historicalWeather} />
          </div>
        </>
      : ''}
    </div>
  )
}
export default CityDashboard