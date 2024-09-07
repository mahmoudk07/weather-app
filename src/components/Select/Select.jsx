import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeSelectedCity } from "../../services/weatherInfo/weatherSlice"
const Select = ({ onSelectChange }) => {
  const { cities, city } = useSelector(state => state.Weather)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const city = e.target.value
    dispatch(changeSelectedCity(city))
    onSelectChange(city)
  }
  return (
    <select className='select' onChange={handleChange} value={city || ""}>
       <option disabled selected={ city ? false : true} hidden>
            Select a city
        </option>
      {cities?.map(city => {
        const capitalizedCity = city.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return (
          <option key={city} value={capitalizedCity}>
            {capitalizedCity}
          </option>
        );
      })}

    </select>
  )
}
export default Select