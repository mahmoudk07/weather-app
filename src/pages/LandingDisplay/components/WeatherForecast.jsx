import React from 'react'
import WeatherDay from './WeatherDay'

const WeatherForecast = ({ forecastWeather }) => {
  const today = new Date().getDay();
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = Array.from({ length: 7 }, (_, i) => daysOfWeek[(today + i + 1) % 7]);
  return (
    <div className= 'weather-forecast-container'>
        <header>
           <h1 className= 'weather-forecast-header'>Weather's Forecast</h1>
        </header>
      <div className='weather-forecast-cards'>
        {forecastWeather.map((day, index) => (
          <WeatherDay key={index} day={days[index]} forecastWeather={day} />
        ))}
      </div>
    </div>
  )
}
export default WeatherForecast