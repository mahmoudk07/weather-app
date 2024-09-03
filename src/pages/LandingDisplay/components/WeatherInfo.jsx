import React from 'react'
import WeatherIcon from "../../../assets/01d.png"
import { WiHumidity } from "react-icons/wi";
import { WiWindBeaufort0 } from "react-icons/wi";
import { LuGauge } from "react-icons/lu";
import { PiArrowUpBold } from "react-icons/pi";
import { PiArrowDownBold } from "react-icons/pi";
const weatherInfo = {
    "humidity": {
        "name": "Humidity",
        "icon": <WiHumidity className='weather-info-icon' />,
        "unit": "%"
    },
    "windspeedKmph": {
        "name": "Wind",
        "icon": < WiWindBeaufort0 className='weather-info-icon' />,
        "unit": "km/h"
    },
    "pressure": {
        "name": "Pressure",
        "icon": < LuGauge className='weather-info-icon' />,
        "unit": "mb"
    },
}
const WeatherInfo = ({ data, forecastWeather }) => {
  return (
    <section className= 'weather-card'>
        <header>
            <h1 className= 'weather-header'>Current Weather</h1>
        </header>
        <main className = 'weather-content'>
            <div className = 'weather-content-left'>
                <p className= 'current-location'>Cairo, Egypt</p>
                <div className = 'flex items-center'>
                    <figure className = 'weather-icon'>
                        <img className = 'w-[100%] h-[100%]' src={WeatherIcon} alt="current weather status" />
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
export default WeatherInfo