import React from 'react'
import WeatherDay from './WeatherDay'

const WeatherForecast = () => {
  return (
    <div className= 'xs:w-[100%] sm:w-[100%] md:w-[85%] lg:w-[70%] xl:w-[48%] min-h-[26vh] bg-[#071a33] rounded-[15px] px-[3%] py-[1.5%]'>
        <header>
            <h1 className= 'text-[16px] text-[#1d5a8b] font-semibold mb-4'>Weather's Forecast</h1>
        </header>
      <div className = 'flex items-center  xl:gap-x-8 flex-wrap gap-y-8'>
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