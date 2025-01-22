import { useRef, useState } from "react";
import { searchBooks } from "../services/books";
import { Book } from "../models/Book";

interface SearchData {
  search: string;
}

export function useBooks({ search }: SearchData) {
  const [books, setBooks] = useState<Book[]>([]);
  const[totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getBooks = async ({ search }: SearchData) => {
    if (previousSearch.current === search) return;

    console.log("getting data");
    setLoading(true);
    searchBooks(search)
      .then((data) => {
        previousSearch.current = search;
        setBooks(data.items);
        setTotalItems(data.totalItems);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { books, totalItems, loading, error, getBooks };
}
