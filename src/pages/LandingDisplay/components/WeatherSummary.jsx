import React from 'react'
import WeatherIcon from "../../../assets/01d.png"
const WeatherSummary = ({ data }) => {
  return (
      <div className='weather-card'>
        <header>
            <h1 className='country-heading'>Cairo, Egypt</h1>
        </header>
        <section className = 'temperature-section'>
            <h1 className= 'temerature-info'>39°C</h1>
            <div className = 'flex flex-col'>
                <p className='text-gray-300'>High <span className='low-high-temperature'>39°C</span></p>
                <p className='text-gray-300'>Low <span className='low-high-temperature'>39°C</span></p>
            </div>
        </section>
        <section className = 'flex justify-between items-center'>
            <div className = 'flex flex-col gap-y-1'>
                <p className= 'weather-details'>Clear</p>
                <p className='weather-details'>Feels like <span className = 'font-bold text-white'>39°C</span></p>
                <p className='weather-details'>Sunrise at <span className = 'font-bold text-white'>6:18 AM</span></p>
                <p className='weather-details'>Sunset at <span className = 'font-bold text-white'>7:30 PM</span></p>
            </div>
            <figure className = 'w-[100px] h-[100px]'>
                <img width={100} height={100} src = {WeatherIcon} />
            </figure>
        </section>
    </div>
  )
}
export default WeatherSummary

    // < h1 > { data?.request[0].query }</h1 >
    // done    <h1>{data?.current_condition[0].temp_C}°C</h1>
    // done    <h1>{data?.current_condition[0].weatherIconUrl[0].value}</h1>
    // done    <h1>{data?.current_condition[0].weatherDesc[0].value}</h1>
    //     <h1>{data?.current_condition[0].windspeedKmph}</h1>
    //     <h1>{data?.current_condition[0].humidity}</h1>
    //     <h1>{data?.current_condition[0].visibility}</h1>
    //     <h1>{data?.current_condition[0].pressure}</h1>
    //     <h1>{data?.weather[0].date}</h1>
    // done    <h1>{data?.weather[0].maxtempC}</h1>
    // done    <h1>{data?.weather[0].mintempC}</h1>
    // done    <h1>{data?.weather[0].astronomy[0].sunrise}</h1>
// done    <h1>{data?.weather[0].astronomy[0].sunset}</h1>
    
// "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png" alt = "weather icon"