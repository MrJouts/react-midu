import dayjs from "dayjs";

import styles from "./WeatherCardHeader.module.css";

export const WeatherCardHeader = ({ temperature, description, icon, city }: {
  temperature: string;
  description: string;
  icon: string;
  city: string;
}) => {
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1)

  const iconCopy = icon.replace("n", "d")

  return (
    <div className={styles.cardHeader}>
      <div className={styles.tempWrapper}>
        <img src={`${iconCopy}.png`} alt={description} />
        <div className={styles.temp}>
          {temperature}
          <span>C</span>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <strong>{capitalize(city)}</strong>
        <span>{dayjs().format("dddd, h:mm a")}</span>
        <span>{capitalize(description)}</span>
      </div>
    </div>
  )
}