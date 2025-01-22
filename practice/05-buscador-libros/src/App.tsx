import { useState } from "react";
import "./App.css";

import dompurify from "dompurify";
import { useBooks } from "./hooks/useBooks";
import { Book } from "./models/Book";

function App() {
  const [search, setSearch] = useState("");
  const sanitizer = dompurify.sanitize;
  const { books, totalItems, loading, getBooks } = useBooks({ search });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handelSearch = (e) => {
    // if (e.key !== "Enter") return;

    console.log("search", search);
    getBooks({ search });
  };

  console.log({ books });

  return (
    <>
      <header>
        <input onChange={handleChange} value={search} type="text" />
        <button onClick={handelSearch}>Buscar</button>
      </header>

      <main>
        <aside className="aside">
          {/* TODO: formatear numero */}
          <p>{totalItems} resultados</p>

          <p>Tipo de documento</p>
          <input type="text" />
        </aside>

        {/* @TODO: agregar orderBy */}
        {/* @TODO: agregar máxima cantidad de resultados */}
        <section>
          {!loading && books.length === 0 && <p>No hay resultados</p>}
          {loading && <p>Cargando...</p>}
          {!loading &&
            books &&
            books.map((book: Book) => (
              <div className="card" key={book.id}>
                <div className="imageContainer">
                  <img src={book.imgSrc} alt={book.title} />
                </div>
                <div className="cardContent">
                  <h1 className="bookTitle">{book.title}</h1>
                  <p className="bookAuthor">{book.authors} | 2023</p>
                  <p
                    className="bookDescription"
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(book.description),
                    }}
                  ></p>

                  {/* @TODO: convertir la moneda */}
                  <p className="bookPrice">$30.000 USD</p>

                  {/*TODO: agregar tags */}

                  {book.ebooks && (
                    <span className="tags">
                      {book.ebooks.map((ebook) => (
                        <span className={ebook.format}>{ebook.format}</span>
                      ))}
                    </span>
                  )}
                </div>
              </div>
            ))}

          {/* @TODO: agregar paginación */}
        </section>
      </main>
    </>
  );
}

export default App;
