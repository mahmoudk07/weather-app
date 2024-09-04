import React from 'react'
import WeatherLogo from "../../assets/weather-app.png"
import { Link } from 'react-router-dom'
const Heading = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img width={40} height={40} src={WeatherLogo} alt="weather logo" />
        <h1 className='header-text'>Weather Forecast</h1>
      </div>
      <nav className = 'flex items-center gap-x-6'>
        <Link to='/' className='text-[#2e5d8b] font-bold'>Home</Link>
        <Link to='/city' className='text-[#2e5d8b] font-bold'>Dashboard</Link>
      </nav>
    </div>
  )
}
export default Heading