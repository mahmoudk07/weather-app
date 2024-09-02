import React from 'react'
import WeatherInfo from '../LandingDisplay/components/WeatherInfo'
import WeatherForecast from '../LandingDisplay/components/WeatherForecast'
import LineChart from '../../components/LineChart/LineChart'
import RainfallChart from "../../components/LineChart/RainfallChart"
import { dummyClimateData } from '../../data'
const CityDashboard = () => {
  return (
    <div className='w-full min-h-[90vh] px-[3%] py-[1%]'>
      <div className = 'flex xs:flex-col lg:flex-row md:items-center items-start gap-5 mb-5 justify-around'>
        <WeatherInfo />
        <LineChart data={dummyClimateData} />
      </div>
      <div className = 'flex xs:flex-col lg:flex-row md:items-center items-start gap-5 justify-around'>
        <WeatherForecast />
        <RainfallChart data={dummyClimateData} />
      </div>
    </div>
  )
}

export default CityDashboard