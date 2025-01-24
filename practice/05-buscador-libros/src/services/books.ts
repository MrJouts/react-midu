import { Volumen } from "../models/Volume";

export const searchBooks = async (
  search: string,
  type?: string,
  orderBy?: string
): Promise<Volumen> => {
  console.log("searchBooks", search, type, orderBy);
  try {
    const response = await fetch(
      `http://localhost:3000/volumes?q=${search}&type=${type}&orderBy=${orderBy}`
    );

    return response.json();
  } catch (err) {
    throw new Error("Error al buscar lirbos | " + err);
  }
};
