import { Volumen } from "../models/Volume";

export const searchBooks = async (search: string): Promise<Volumen> => {
  console.log("searchBooks", search);
  try {
    const response = await fetch(`http://localhost:3000/volumes?q=${search}`);

    return response.json();
  } catch (err) {
    throw new Error("Error al buscar lirbos | " + err);
  }
};
