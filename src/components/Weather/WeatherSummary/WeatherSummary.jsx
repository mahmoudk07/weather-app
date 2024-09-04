import React from 'react'
import { PiArrowUpBold } from "react-icons/pi";
import { PiArrowDownBold } from "react-icons/pi";
import { getWeatherStatusImage } from '../../../utils/getWeatherStatusImage';
import { weatherInfo } from '../../../constants';
const WeatherSummary = ({ data, forecastWeather, currentCity, currentCountry }) => {
  return (
    <section className= 'weather-card'>
        <header>
            <h1 className= 'weather-header'>Current Weather</h1>
        </header>
        <main className = 'weather-content'>
            <div className = 'weather-content-left'>
                <p className='current-location'>{currentCity + ", " + currentCountry}</p>
                <div className = 'flex items-center'>
                    <figure className = 'weather-icon'>
                        <img className='w-[100%] h-[100%]' src={getWeatherStatusImage(data.weatherDesc[0].value)} alt="current weather status" />
                        <figcaption className='sr-only'>Weather icon representing current conditions</figcaption>
                    </figure>
                      <p className='current-temperature'>{ data.temp_C }°C</p> 
                </div>
                  <p className='weather-status'>{ data.weatherDesc[0].value }</p>
            </div>
            <div className='weather-content-right'>
                  <p className='feels-like'>Feels Like { data.FeelsLikeC }°C</p>
                <div className = 'flex gap-5'>
                    <div className = 'flex items-center gap-2'>
                        <PiArrowUpBold className= 'arrow-up-down' />
                        <p className='high-low-temperature'>{ forecastWeather.maxtempC }°C</p>
                    </div>
                    <div className = 'flex items-center gap-2'>
                        <PiArrowDownBold className='arrow-up-down' />
                          <p className='high-low-temperature'>{ forecastWeather.mintempC }°C</p>  
                    </div>
                </div>
                {Object.entries(weatherInfo).map(([key, info]) => (
                    <div className='flex justify-between items-center gap-x-3' key={key}>
                        <div className='flex items-center gap-x-4'>
                            {info.icon}
                            <p className='weather-info-type'>{info.name}</p>
                        </div>
                        <p className='weather-info-value'>{ data[key] }{ info.unit }</p>
                    </div>
                ))}
            </div>
        </main>
    </section>
  )
}
export default WeatherSummary