import styles from "./ResultsBar.module.css";

interface Props {
  totalItems: number;
  orderBooks: (orderBy: string) => void;
}

export const ResultsBar = ({ totalItems, orderBooks }: Props) => {
  return (
    <section>
      <div className={styles.container}>
        <p>{totalItems} resultados</p>
        <select onChange={(e) => orderBooks(e.target.value)} name="" id="">
          <option value="relevance">Más reelevantes</option>
          <option value="newest">Más nuevos</option>
        </select>
      </div>
    </section>
  );
};
