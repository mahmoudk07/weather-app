import React from 'react'
import WeatherIcon from "../../../assets/01d.png"
import { WiHumidity } from "react-icons/wi";
import { WiWindBeaufort0 } from "react-icons/wi";
import { LuGauge } from "react-icons/lu";
import { PiArrowUpBold } from "react-icons/pi";
import { PiArrowDownBold } from "react-icons/pi";
const weatherInfo = {
    "Humidity": <WiHumidity className='weather-info-icon' />,
    "Wind": <WiWindBeaufort0 className='weather-info-icon' />,
    "Pressure": <LuGauge className='weather-info-icon' />,
}
const WeatherInfo = () => {
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
                    <p className= 'current-temperature'>39°C</p> 
                </div>
                <p className= 'weather-status'>Sunny</p>
            </div>
            <div className='weather-content-right'>
                <p className='feels-like'>Feels Like 39°C</p>
                <div className = 'flex gap-5'>
                    <div className = 'flex items-center gap-2'>
                        <PiArrowUpBold className= 'arrow-up-down' />
                        <p className= 'high-low-temperature'>24°C</p>
                    </div>
                    <div className = 'flex items-center gap-2'>
                        <PiArrowDownBold className='arrow-up-down' />
                        <p className= 'high-low-temperature'>24°C</p>  
                    </div>
                </div>
                {Object.entries(weatherInfo).map(([key, icon]) => (
                    <div className='flex justify-between items-center gap-x-3' key={key}>
                        <div className='flex items-center gap-x-4'>
                            {icon}
                            <p className='weather-info-type'>{key}</p>
                        </div>
                        <p className='weather-info-value'>73%</p>
                    </div>
                ))}
            </div>
        </main>
    </section>
  )
}
export default WeatherInfo