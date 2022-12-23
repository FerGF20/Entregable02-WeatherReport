import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isCelsius, setIsCelsius] = useState(true)

  const sucess = (pos) => {
    const newCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(newCoords)
  }

  const changeUnitTemperature = () => setIsCelsius(!isCelsius)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(sucess)
  }, [])

  useEffect(() => {
    if(coords){
      const API_KEY = "1b84e3260804b191fc5aaaa683c7cd3d"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      axios.get(URL)
        .then(res =>{
          const tempKelvin = res.data.main.temp
          const tempCelsius = (tempKelvin - 273.15).toFixed(1)
          const tempFahrenheit = ((tempCelsius * 9/5) + 32).toFixed(1)
          const newTemperature = {
            celsius: tempCelsius,
            fahrenheit: tempFahrenheit
          }
          setTemperature(newTemperature)
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [coords])
  console.log(weather);
  return (
    <div className="App">
      {
        weather ? <WeatherCard
                    weather={weather}
                    temperature={temperature}
                    changeUnitTemperature={changeUnitTemperature}
                    isCelsius={isCelsius}
                    /> : <p>Loading...</p>
      }  
    </div>
  )
}

export default App
