import React from 'react'
import WeatherIcon from "../../../assets/01d.png"
const WeatherDay = () => {
  return (
    <div className = 'flex flex-col items-center w-[10%]'>
        <p className= 'font-bold text-[#3774b5] sm:text-[16px] xl:text-[14px]'>Sat</p>
        <figure className='w-[60px] h-[60px]'>
            <img className='w-[100%] h-[100%]' src={WeatherIcon} alt="current weather status" />
            <figcaption className='sr-only'>Weather icon representing current conditions</figcaption>
        </figure>
        <p className= 'font-bold text-[#46668f] sm:text-[16px] xl:text-[14px] mb-1'>Sunny</p>
        <p className= 'font-semibold text-[#46668f] sm:text-[14px] xl:text-[13px]'>39°C/20°C</p>
    </div>
  )
}

export default WeatherDay