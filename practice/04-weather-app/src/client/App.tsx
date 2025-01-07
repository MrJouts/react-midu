import { useEffect, useState } from 'react'
import { getWeather } from './services/Weather';
import { Card } from './components/Card';
import { initialWeatherInfo } from './models/WeaterInfo';
import "./utils/dayjs";

import './App.css'

function App() {
  const [weatherInfo, setWeatherInfo] = useState(initialWeatherInfo);

  useEffect(() => {
    getWeather().then((data) => {
      setWeatherInfo(data);
    }, (error) => {
      console.log(error.message)
    })
  }, [])

  return (
    <main>
      <section>
        <Card weatherInfo={weatherInfo} />
      </section>
    </main>
  )
}

export default App
