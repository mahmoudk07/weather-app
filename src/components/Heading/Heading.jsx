import React from 'react'
import WeatherLogo from "../../assets/weather-app.png"
import { Link } from 'react-router-dom'
const Heading = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img className = 'logo' width={40} height={40} src={WeatherLogo} alt="weather logo" />
        <h1 className='header-text'>Weather Forecast</h1>
      </div>
      <nav className = 'header-links'>
        <Link to='/' className='header-link'>Home</Link>
        <Link to='/city' className='header-link'>Dashboard</Link>
      </nav>
    </div>
  )
}
export default Heading