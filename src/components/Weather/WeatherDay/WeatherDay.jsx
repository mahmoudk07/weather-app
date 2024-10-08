import React from 'react'
import { getWeatherStatusImage } from "../../../utils/getWeatherStatusImage"
const WeatherDay = ({day, forecastWeather}) => {
  return (
    <div className= 'weather-day-container'>
      <p className='weather-day'>{day}</p>
      <figure className='w-[60px] h-[60px]'>
          <img className='w-[100%] h-[100%]' src={getWeatherStatusImage(forecastWeather.hourly[2].weatherDesc[0].value)} alt="current weather status" />
          <figcaption className='sr-only'>Weather icon representing current conditions</figcaption>
      </figure>
      <p className='weather-day-temps'>{forecastWeather.maxtempC}°C/{forecastWeather.mintempC }°C</p>
    </div>
  )
}

export default WeatherDay