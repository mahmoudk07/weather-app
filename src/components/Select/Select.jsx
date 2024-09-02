import React from 'react'
import { useSelector } from 'react-redux'
const Select = () => {
    const { cities } = useSelector(state => state.Weather)
  return (
    <select className='select'>
        <option value="" disabled selected hidden>
            Select a city
        </option>
        {cities?.map(city => (
            <option key={city} value={city}>{city}</option>
        ))}
    </select>
  )
}
export default Select