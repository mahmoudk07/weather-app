import React from 'react'
import WeatherLogo from "../../assets/weather-app.png"
const Heading = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img width={40} height={40} src={WeatherLogo} alt="weather logo" />
        <h1 className='header-text'>Weather Forecast</h1>
      </div>
    </div>
  )
}
export default Heading