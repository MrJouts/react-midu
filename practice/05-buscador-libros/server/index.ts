import express from "express";
import axios from "axios";

const app = express();

app.get("/volumes", (req: express.Request, res: express.Response) => {
  const { q } = req.query;

  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
    .then((response) => {
      res.send(response.data);
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
