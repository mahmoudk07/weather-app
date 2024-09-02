import React from 'react'
import WeatherDay from './WeatherDay'

const WeatherForecast = () => {
  return (
    <div className= 'weather-forecast-container'>
        <header>
           <h1 className= 'weather-forecast-header'>Weather's Forecast</h1>
        </header>
      <div className= 'weather-forecast-cards'>
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
      </div>
    </div>
  )
}

export default WeatherForecast