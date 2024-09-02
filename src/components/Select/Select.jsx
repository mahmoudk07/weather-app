import React from 'react'
import { useSelector } from 'react-redux'
const Select = () => {
    const { cities } = useSelector(state => state.Weather)
  return (
    <select className='text-[#4874a5] bg-[#071a33] outline-none border-none xs:w-[85%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[38%] text-[15px] px-5 py-2 rounded-[15px] appearance-none mt-3'>
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