import React from 'react'
import { PiGaugeLight } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { RiWindyLine } from "react-icons/ri";
import { MdOutlineVisibility } from "react-icons/md";
const WeatherMetrics = () => {
  return (
    <div className= 'xs:w-[60%] sm:w-[60%] md:w-[26%] lg:w-[20%] h-[270px] bg-[#91aea2] rounded-[15px] p-5'>
        <div className = 'flex justify-between'>
            <p className = 'font-bold text-white'>Visibility</p>
            <div className = 'flex items-center text-white gap-x-1'>
                <p className='font-bold'>100<span className = 'font-normal text-[12px]'>Km</span></p>
                <MdOutlineVisibility />
            </div>
        </div>
          <hr className='-mx-5 border-t border-[#89a79a] border-[1px] my-2'></hr>
          <div className='flex justify-between'>
              <p className='font-bold text-white'>Humadity</p>
              <div className = 'flex items-center text-white gap-x-1'>
                  <p className='font-bold'>100<span className = 'font-normal text-[12px] mr-2'>%</span></p>
                  <WiHumidity />
              </div>
          </div>
          <hr className='-mx-5 border-t border-[#89a79a] border-[1px] my-2'></hr>
          <div className='flex justify-between'>
              <p className='font-bold text-white'>Pressure</p>
              <div className = 'flex items-center text-white gap-x-1'>
                  <p className='font-bold'>100<span className = 'font-normal text-[12px]'>mb</span></p>
                  <PiGaugeLight />
              </div>
          </div>
          <hr className='-mx-5 border-t border-[#89a79a] border-[1px] my-2'></hr>
          <div className='flex justify-between'>
              <p className='font-bold text-white'>Wind</p>
              <div className = 'flex items-center text-white gap-x-1'>
                <p className='font-bold'>100<span className = 'font-normal text-[12px]'>Km/h</span></p>
                <RiWindyLine />
              </div>
          </div>
    </div>
  )
}

export default WeatherMetrics