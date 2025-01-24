import { useState } from "react";

import styles from "./SearchBar.module.css";

interface Props {
  getBooks: (data: any) => {};
}

export const SearchBar = ({ getBooks }: Props) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const changeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const changeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const searchBooks = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search === "") return;
    getBooks({ search, type, orderBy: "relevance" });
  };

  return (
    <header>
      <form onSubmit={searchBooks} className={styles.container}>
        <input
          className={styles.searchInput}
          onChange={changeSearchTerm}
          value={search}
          type="text"
        />
        <select onChange={changeType}>
          <option value="all">Cualquier documento</option>
          <option value="books">Libros</option>
          <option value="magazines">Revistas</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
};
