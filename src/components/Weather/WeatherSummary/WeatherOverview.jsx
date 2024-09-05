import React from 'react'
import { getWeatherStatusImage } from '../../../utils/getWeatherStatusImage';
const WeatherOverview = ({data, currentCity, currentCountry}) => {
  return (
      <div className='weather-content-left'>
          <p className='current-location'>{currentCity + ", " + currentCountry}</p>
          <div className='flex items-center'>
              <figure className='weather-icon'>
                  <img className='w-[100%] h-[100%]' src={getWeatherStatusImage(data.weatherDesc[0].value)} alt="current weather status" />
                  <figcaption className='sr-only'>Weather icon representing current conditions</figcaption>
              </figure>
              <p className='current-temperature'>{data.temp_C}°C</p>
          </div>
          <p className='weather-status'>{data.weatherDesc[0].value}</p>
      </div>
  )
}
export default WeatherOverview