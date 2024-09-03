import React from 'react'
import WeatherIcon from "../../../assets/01d.png"
const WeatherDay = ({key, day, forecastWeather}) => {
  return (
    <div className= 'weather-day-container' key = {key}>
      <p className='weather-day'>{day}</p>
      <figure className='w-[60px] h-[60px]'>
          <img className='w-[100%] h-[100%]' src={WeatherIcon} alt="current weather status" />
          <figcaption className='sr-only'>Weather icon representing current conditions</figcaption>
      </figure>
      <p className='weather-day-status'>{forecastWeather.hourly[2].weatherDesc[0].value }</p>
      <p className='weather-day-temps'>{forecastWeather.maxtempC}°C/{forecastWeather.mintempC }°C</p>
    </div>
  )
}

export default WeatherDay