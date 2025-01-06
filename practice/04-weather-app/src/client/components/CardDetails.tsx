import styles from './CardDetails.module.css';

export const CardDetails = ({ feelsLike, windSpeed, humidity }: {
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