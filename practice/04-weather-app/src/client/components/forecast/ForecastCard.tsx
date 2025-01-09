import { useEffect, useState } from "react";
import { ForecastItemInfo } from "models/Forecast";
import { getForecast } from "services/Weather";
import { ForecastItem } from "./ForecastItem";

import styles from './ForecastCard.module.css';

export const ForecastCard = () => {
  const [forecastFiveDays, setForecastFiveDays] = useState<ForecastItemInfo[]>([]);

  useEffect(() => {
    getForecast().then((data) => {
      setForecastFiveDays(data);
      console.log(data)
    }, (error) => {
      console.log(error.message)
    })
  }, [])

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
