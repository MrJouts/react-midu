import { useEffect, useState } from 'react'
// import weatherMockedData from "./models/wheater-mock.json"
import { Card } from './components/Card';

import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    description: "",
    icon: "",
    city: "",
    feelsLike: "",
    tempMax: "",
    tempMin: "",
    windSpeed: "",
    humidity: "",
    timezone: 0
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(`http://localhost:3000?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data)
        })
    }, (error) => {
      console.log(error.message)
    })
  }, [])

  return (
    <main>
      <section>
        <Card weatherData={weatherData} />
      </section>
    </main>
  )
}

export default App
