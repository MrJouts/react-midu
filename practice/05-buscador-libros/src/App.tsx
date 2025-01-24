import { useBooks } from "./hooks/useBooks";
import { Book } from "./models/Book";
import { SearchBar } from "./components/SearchBar";
import { ResultsBar } from "./components/ResultsBar";
import { BookCard } from "./components/BookCard";

import "./App.css";

function App() {
  const { books, totalItems, loading, getBooks, orderBooks } = useBooks();

  return (
    <>
      <SearchBar getBooks={getBooks} />

      <main>
        <ResultsBar totalItems={totalItems} orderBooks={orderBooks} />

        <section>
          {!loading && books.length === 0 && <p>No hay resultados</p>}

          {/* @TODO: agregar mejor lógica de loading */}
          {/* @TODO: controlar errores */}
          {loading && <p>Cargando...</p>}
          {!loading &&
            books &&
            books.map((book: Book) => <BookCard book={book} key={book.id} />)}

          {/* @TODO: agregar paginación */}
        </section>
      </main>
    </>
  );
}

export default App;
