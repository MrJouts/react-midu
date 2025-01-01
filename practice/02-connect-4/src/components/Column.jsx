import styles from "./Column.module.css";

export const Column = ({ column, columnIndex, updateBoard }) => {
  const handleClick = () => {
    updateBoard(columnIndex);
  };

  return (
    <div className={styles.column} onClick={handleClick}>
      {column.map((cell, cellIndex) => (
        <div
          key={cellIndex}
          className={`${styles.cell} ${styles[cell] ?? ""}`}
        />
      ))}
    </div>
  );
};
