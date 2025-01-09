import { WeatherCard } from './components/weather/WeatherCard';
import { ForecastCard } from './components/forecast/ForecastCard';
import "./utils/dayjs";

import './App.css'

function App() {
  return (
    <main>
      <section>
        <WeatherCard />
        <ForecastCard />
      </section>
    </main>
  )
}

export default App
