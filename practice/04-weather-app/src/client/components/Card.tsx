import { WeatherInfo } from "../models/WeaterInfo";
import { CardHeader } from "./CardHeader";

import styles from "./Card.module.css";
import { CardDetails } from "./CardDetails";

export const Card = ({ weatherData }: {
  weatherData: WeatherInfo;
}) => {
  const { temperature, description, icon, feelsLike, windSpeed, humidity } = weatherData;

  return (
    <div className={styles.card}>
      <CardHeader temperature={temperature} description={description} icon={icon} />
      <CardDetails feelsLike={feelsLike} windSpeed={windSpeed} humidity={humidity} />
    </div>
  )
}