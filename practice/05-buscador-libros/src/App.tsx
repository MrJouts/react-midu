import { useState } from "react";
import "./App.css";

import bookData from "./mocks/volumes.json";

import dompurify from "dompurify";

function App() {
  const [books, setBooks] = useState(bookData.items);
  const sanitizer = dompurify.sanitize;

  console.log(books);

  return (
    <>
      <header>
        <h1>Bookstore</h1>
        <input type="text" />
        <button>Buscar</button>
      </header>

      <main>
        <aside className="aside">
          {/* TODO: formatear numero */}
          <p>1234 resultados</p>

          <p>Tipo de documento</p>
          <input type="text" />
        </aside>

        {/* @TODO: agregar orderBy */}
        {/* @TODO: agregar máxima cantidad de resultados */}
        <section>
          {books.map((book, index) => (
            <div className="card" key={index}>
              <div className="imageContainer">
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
              </div>
              <div className="cardContent">
                <h1 className="bookTitle">{book.volumeInfo.title}</h1>
                <p className="bookAuthor">{book.volumeInfo.authors} | 2023</p>
                <p
                  className="bookDescription"
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(book.searchInfo?.textSnippet ?? ""),
                  }}
                ></p>
                <p className="bookPrice">$30.000 USD</p>

                {/*TODO: agregar tags */}
                <span className="tags">
                  <span className="pdf">pdf</span>
                  <span className="epub">epub</span>
                </span>
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
