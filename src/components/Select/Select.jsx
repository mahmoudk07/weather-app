import React from 'react'
import { useSelector } from 'react-redux'
const Select = ({ onSelectChange }) => {
  const { cities } = useSelector(state => state.Weather)
  const handleChange = (e) => {
    onSelectChange(e.target.value)
  }
  return (
    <select className='select' onChange={handleChange}>
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