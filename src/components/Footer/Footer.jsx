import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
      <p className = 'footer-text'>© 2024 This website is designed and developed by Mahmoud Khaled —</p>
      <div className = 'footer-icons'>
        <Link to= "https://github.com/mahmoudk07" target='_blank'><FaGithub /></Link>
        <Link to= "https://www.linkedin.com/feed/" target='_blank'><FaLinkedin /></Link>
      </div>
    </footer>
  )
}

export default Footer