import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className= 'error-container'>
        <div className = 'flex flex-col gap-y-4'>
            <span className='error-text'>Error 404 - Not Found</span>
            <Link to="/" className= 'back-to-home'>Back to Home</Link>
        </div>
    </div>
  )
}

export default Error