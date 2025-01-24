import dompurify from "dompurify";
import { Book } from "../models/Book";

import styles from "./BookCard.module.css";

interface Props {
  book: Book;
}
export const BookCard = ({ book }: Props) => {
  const sanitizer = dompurify.sanitize;
  return (
    <div className={styles.card} key={book.id}>
      <div className={styles.imageContainer}>
        <img src={book.imgSrc} alt={book.title} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{book.title}</h1>
        <p className={styles.author}>{book.authors}</p>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: sanitizer(book.description),
          }}
        ></p>

        {/* @TODO: convertir la moneda */}
        {book.price === 0 ? (
          <p className={styles.price}>Gratis</p>
        ) : (
          <p className={styles.price}>US$ {book.price}</p>
        )}

        {book.ebooks && (
          <span className={styles.tags}>
            {book.ebooks.map((ebook) => (
              <span className={styles[ebook.format]}>{ebook.format}</span>
            ))}
          </span>
        )}
      </div>
    </div>
  );
};
