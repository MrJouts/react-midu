import styles from './WeatherCardDetails.module.css';

export const WeatherCardDetails = ({ feelsLike, windSpeed, humidity }: {
  feelsLike: string;
  windSpeed: string;
  humidity: string;
}) => {
  return (
    <div className={styles.details}>
      <ul>
        <li>
          <span>Sensación</span>
          <span>{feelsLike}</span>
        </li>
        <li>
          <span>Viento</span>
          <span>{windSpeed}</span>
        </li>
        <li>
          <span>Humedad</span>
          <span>{humidity}</span>
        </li>
      </ul>
    </div>
  )
}