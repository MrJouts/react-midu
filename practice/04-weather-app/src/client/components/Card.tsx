import { WeatherInfo } from "../models/WeaterInfo";
import { CardHeader } from "./CardHeader";
import { CardDetails } from "./CardDetails";

import styles from "./Card.module.css";

export const Card = ({ weatherInfo }: {
  weatherInfo: WeatherInfo;
}) => {
  const { temperature, description, icon, feelsLike, windSpeed, humidity } = weatherInfo;

  return (
    <div className={styles.card}>
      <CardHeader temperature={temperature} description={description} icon={icon} />
      <CardDetails feelsLike={feelsLike} windSpeed={windSpeed} humidity={humidity} />
    </div>
  )
}