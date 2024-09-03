import React from 'react'
import Select from '../Select/Select'
import WeatherLogo from "../../assets/weather-app.png"
const Heading = () => {
  return (
    <div className='header'>
      <div className='flex items-center gap-x-3 px-[7%]'>
        <img width={40} height={40} src={WeatherLogo} alt="weather logo" />
        <h1 className='text-[#2e5d8b] text-[20px] justify-start'>Weather Forecast</h1>
      </div>
      <Select />
    </div>
  )
}

export default Heading