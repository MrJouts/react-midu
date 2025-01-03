import "dotenv/config";
import express from "express";

const app = express();
const port = 3000;
const WHEATER_APP_URL = ({ lat, lon }) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&appid=${process.env.API_KEY}`;

app.get("/", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  fetch(WHEATER_APP_URL({ lat, lon }))
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
