import { CurrentWeather } from "../models/Weather";
import { WeatherCardHeader } from "./WeatherCardHeader";
import { WeatherCardDetails } from "./WeatherCardDetails";

import styles from "./WeatherCard.module.css";

export const WeatherCard = ({ weatherInfo }: {
  weatherInfo: CurrentWeather;
}) => {
  const { temperature, description, icon, city, feelsLike, windSpeed, humidity } = weatherInfo;

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