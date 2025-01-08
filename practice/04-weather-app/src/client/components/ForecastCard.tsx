import { ForecastItemInfo } from "../models/Forecast";
import { ForecastItem } from "./ForecastItem";

import styles from './ForecastCard.module.css';

export const ForecastCard = ({ forecastFiveDays }: {
  forecastFiveDays: ForecastItemInfo[];
}) => {
  return (
    <div className={styles.card}>
      {
        forecastFiveDays.map((forecast, index) => {
          return (
            <ForecastItem key={index} forecast={forecast} />
          )
        })
      }
    </div>
  )
}
