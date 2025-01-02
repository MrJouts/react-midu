import { useEffect, useState } from "react";
import { getCatImageUrl } from "../services/facts";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  // para recuperar la imagen cada vez que cambie la cita
  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join(" ");
    getCatImageUrl(threeFirstWords).then((url) => setImageUrl(url));
  }, [fact]);

  return { imageUrl };
}
