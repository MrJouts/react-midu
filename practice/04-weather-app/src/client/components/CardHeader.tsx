import styles from "./CardHeader.module.css";

export const CardHeader = ({ temperature, description, icon }: {
  temperature: string;
  description: string;
  icon: string;
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
        <span>Viernes, 11:00p.m.</span>
        <span>{capitalize(description)}</span>
      </div>
    </div>
  )
}