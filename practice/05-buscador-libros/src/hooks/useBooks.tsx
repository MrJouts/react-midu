import { useRef, useState } from "react";
import { searchBooks } from "../services/books";
import { Book } from "../models/Book";

interface SearchData {
  search: string;
  type: string;
  orderBy?: string;
}

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  // const previousSearch = useRef(search);

  const getBooks = async ({ search, type, orderBy }: SearchData) => {
    // if (previousSearch.current === search) return;

    setSearch(search);
    setType(type);

    console.log("getting data");
    setLoading(true);
    searchBooks(search, type, orderBy)
      .then((data) => {
        // previousSearch.current = search;
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

  const orderBooks = (orderBy: string) => {
    getBooks({ search, type, orderBy });
  };

  return { books, totalItems, loading, error, getBooks, orderBooks };
}
