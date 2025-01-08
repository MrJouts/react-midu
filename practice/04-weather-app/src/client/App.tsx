import { useEffect, useState } from 'react'
import { getForecast, getWeather } from './services/Weather';
import { initialWeatherInfo } from './models/Weather';
import { ForecastItemInfo } from './models/Forecast';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import "./utils/dayjs";

import './App.css'

function App() {
  const [currentWeatherInfo, setcurrentWeather] = useState(initialWeatherInfo);
  const [forecastFiveDays, setForecastFiveDays] = useState<ForecastItemInfo[]>([]);

  useEffect(() => {
    getWeather().then((data) => {
      setcurrentWeather(data);
    }, (error) => {
      console.error("Failed to fetch weather data:", error.message);
    })
  }, [])

  useEffect(() => {
    getForecast().then((data) => {
      setForecastFiveDays(data);
      console.log(data)
    }, (error) => {
      console.log(error.message)
    })
  }, [])

  return (
    <main>
      <section>
        <WeatherCard weatherInfo={currentWeatherInfo} />
        <ForecastCard forecastFiveDays={forecastFiveDays} />
      </section>
    </main>
  )
}

export default App
