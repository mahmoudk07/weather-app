import React from 'react'
import { PiArrowUpBold, PiArrowDownBold } from "react-icons/pi";
import { weatherInfo } from '../../../constants';
const WeatherDetails = ({data , forecastWeather}) => {
  return (
      <div className='weather-content-right'>
          <p className='feels-like'>Feels Like {data.FeelsLikeC}°C</p>
          <div className='flex gap-5'>
              <div className='flex items-center gap-2'>
                  <PiArrowUpBold className='arrow-up-down' />
                  <p className='high-low-temperature'>{forecastWeather.maxtempC}°C</p>
              </div>
              <div className='flex items-center gap-2'>
                  <PiArrowDownBold className='arrow-up-down' />
                  <p className='high-low-temperature'>{forecastWeather.mintempC}°C</p>
              </div>
          </div>
          {Object.entries(weatherInfo).map(([key, info]) => (
              <div className='flex justify-between items-center xss:gap-x-3' key={key}>
                  <div className='flex items-center xss:gap-x-3 xs:gap-x-4'>
                      {info.icon}
                      <p className='weather-info-type'>{info.name}</p>
                  </div>
                  <p className='weather-info-value'>{data[key]}{info.unit}</p>
              </div>
          ))}
      </div>
  )
}

export default WeatherDetails