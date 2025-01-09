import dayjs from "dayjs";
import { getDayIcon } from "utils/icon";

import styles from "./WeatherCardHeader.module.css";

export const WeatherCardHeader = ({ temperature, description, icon, city }: {
  temperature: string;
  description: string;
  icon: string;
  city: string;
}) => {

  return (
    <div className={styles.cardHeader}>
      <div className={styles.tempWrapper}>
        <img src={getDayIcon(icon)} alt={description} />
        <div className={styles.temp}>
          {temperature}
          <span>C</span>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <strong>{city}</strong>
        <span>{dayjs().format("dddd, h:mm a")}</span>
        <span>{description}</span>
      </div>
    </div>
  )
}