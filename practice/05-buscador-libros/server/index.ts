import express from "express";
import axios from "axios";

const app = express();

// Define the interface for the transformed item
interface TransformedItem {
  title: string;
  authors: string[];
  description: string;
}

app.get("/volumes", (req: express.Request, res: express.Response) => {
  const { q } = req.query;

  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
    .then((response) => {
      console.log(response.data.items);


      // Transform response
      const transformedItems: TransformedItem[] = response.data.items.map(
        (item: any) => {
          return {
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors || ["No authors available"],
            imgSrc: item.volumeInfo.imageLinks?.smallThumbnail,
            description: item.searchInfo
              ? item.searchInfo.textSnippet
              : "No description available",
              ebooks: [
                { format: "pdf", isAvailable: item.accessInfo?.pdf?.isAvailable || false },
                { format: "epub", isAvailable: item.accessInfo?.epub?.isAvailable || false },
              ],
          };
        }
      );

      console.log(response.data.items);
      // console.log(response.data.transformedItems);

      res.send({ ...response.data, items: transformedItems });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred while fetching data.");
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
