import React from 'react'
import WeatherIcon from "../../../assets/01d.png"
const WeatherDay = () => {
  return (
    <div className= 'weather-day-container'>
        <p className= 'weather-day'>Sat</p>
        <figure className='w-[60px] h-[60px]'>
            <img className='w-[100%] h-[100%]' src={WeatherIcon} alt="current weather status" />
            <figcaption className='sr-only'>Weather icon representing current conditions</figcaption>
        </figure>
        <p className= 'weather-day-status'>Sunny</p>
        <p className= 'weather-day-temps'>39°C/20°C</p>
    </div>
  )
}

export default WeatherDay