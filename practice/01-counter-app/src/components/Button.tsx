import styles from './Button.module.css';

export const Button = ({ text, fn }: {
  text: string,
  fn: () => void
}) => {
  return (
    <button className={styles.button} onClick={fn}>{text}</button>
  )
}