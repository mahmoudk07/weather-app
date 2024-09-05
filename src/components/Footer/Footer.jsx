import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='footer'>
      <p className = 'footer-text'>© 2024 This website is designed and developed by Mahmoud Khaled —</p>
      <div className = 'footer-icons'>
        <FaGithub />
        <FaLinkedin />
      </div>
    </footer>
  )
}

export default Footer