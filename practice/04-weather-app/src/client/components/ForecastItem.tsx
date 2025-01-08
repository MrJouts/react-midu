import dayjs from "dayjs";
import { ForecastItemInfo } from "../models/Forecast";

import styles from './ForecastItem.module.css';

export const ForecastItem = ({ forecast }: {
  forecast: ForecastItemInfo;
}) => {
  const { date, icon, tempMax, tempMin } = forecast;
  const day = dayjs(date).format('dddd').slice(0, 3);
  const iconCopy = icon.replace("n", "d")

  return (
    <div className={styles.item}>
      <span>{day}</span>
      <img src={`${iconCopy}.png`} alt={`forecast from ${day}`} />
      <div className={styles.temp}>
        <span>{tempMax}</span>
        <span>{tempMin}</span>
      </div>
    </div>
  );
}