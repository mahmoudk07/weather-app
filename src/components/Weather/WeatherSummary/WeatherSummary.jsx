import React from 'react'
import WeatherOverview from './WeatherOverview';
import WeatherDetails from './WeatherDetails';
const WeatherSummary = ({ data, forecastWeather, currentCity, currentCountry }) => {
  return (
    <section className= 'weather-card'>
        <header>
            <h1 className= 'weather-header'>Current Weather</h1>
        </header>
        <main className = 'weather-content'>
            <WeatherOverview data={data} currentCity={currentCity} currentCountry={currentCountry} />
            <WeatherDetails data={data} forecastWeather={forecastWeather} />  
        </main>
    </section>
  )
}
export default WeatherSummary