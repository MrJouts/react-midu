import { useEffect, useState } from "react";
import { initialWeatherInfo } from "models/Weather";
import { getWeather } from "services/Weather";
import { WeatherCardHeader } from "./WeatherCardHeader";
import { WeatherCardDetails } from "./WeatherCardDetails";

import styles from "./WeatherCard.module.css";

export const WeatherCard = () => {
  const [currentWeatherInfo, setcurrentWeather] = useState(initialWeatherInfo);
  const { temperature, description, icon, city, feelsLike, windSpeed, humidity } = currentWeatherInfo;

  useEffect(() => {
    getWeather().then((data) => {
      setcurrentWeather(data);
    }, (error) => {
      console.error("Failed to fetch weather data:", error.message);
    })
  }, [])

  return (
    <div className={styles.card}>
      <WeatherCardHeader
        temperature={temperature}
        description={description}
        icon={icon}
        city={city} />
      <WeatherCardDetails
        feelsLike={feelsLike}
        windSpeed={windSpeed}
        humidity={humidity} />
    </div>
  )
}