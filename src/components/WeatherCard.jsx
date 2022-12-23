import React from 'react'

const WeatherCard = ({weather, temperature, isCelsius, changeUnitTemperature}) => {
  return (
    <article>
        <h2>Weather App</h2>
        <h3>{`${weather.name} ${weather.sys.country}`}</h3>
        <section>
          <div className='temp'>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
            <h3><span>{isCelsius ? `${temperature.celsius} ºC` : `${temperature.fahrenheit} ºF`}</span></h3>
          </div>
          <div className='info'>
            <h3>{`"${weather.weather[0].description}"`}</h3>
            <h3><i class='bx bxl-tailwind-css' ></i> Wind speed: <span>{`${weather.wind.speed} m/s`}</span></h3>
            <h3><i class='bx bxl-google-cloud'></i> Clouds: <span>{`${weather.clouds.all}%`}</span></h3>
            <h3><i class='bx bxs-thermometer' ></i> Pressure: <span>{`${weather.main.pressure} m/b`}</span></h3>

          </div>
        </section>
        <button onClick={changeUnitTemperature}>Degrees ºF/ºC</button>
    </article>
  )
}

export default WeatherCard