import { useEffect, useState } from 'react'
import weatherMockedData from "./models/wheater-mock.json"

import './App.css'

function App() {

  const [weatherData, setWeatherData] = useState(weatherMockedData);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log({ position })
      console.log('Latitude is :', position.coords.latitude)
      console.log('Longitude is :', position.coords.longitude)

      // fetch(`http://localhost:3000?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data)
      //   })

    }, (error) => {
      console.log(error.message)
    })
  }, [])

  return (
    <main>
      <h1>Wheater API</h1>

      <section>

        <div className="card">

          <div className="cardHeader">

            <div className="tempWrapper">
              <img src="sun.png" alt="sun" />
              <div className="temp">
                {weatherData.temperature}
                <span>C</span>
              </div>
            </div>

            <div className="dateWrapper">
              <span>Viernes, 11:00pm</span>
              <span>{weatherData.description}</span>
            </div>
          </div>

          <div className="details">
            <ul>
              <li>
                <span>Sensación</span>
                <span>{weatherData.feelsLike}</span>
              </li>
              <li>
                <span>Viento</span>
                <span>{weatherData.windSpeed}</span>
              </li>
              <li>
                <span>Humedad</span>
                <span>{weatherData.humidity}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
