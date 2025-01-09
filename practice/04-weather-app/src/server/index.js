import "dotenv/config";
import express from "express";
import cors from "cors";
import { transformWeather } from "./transformers/transformWeather.js";
import { transformForecast } from "./transformers/transformForecast.js";

const app = express();
const port = 3000;

app.use(cors());

const buildWeatherUrl = ({ lat, lon, path }) => {
  const weatherUlr = new URL(path, `https://api.openweathermap.org/data/2.5/`);
  weatherUlr.searchParams.append("appid", process.env.API_KEY);
  weatherUlr.searchParams.append("units", "metric");
  weatherUlr.searchParams.append("lang", "es");
  weatherUlr.searchParams.append("lat", lat);
  weatherUlr.searchParams.append("lon", lon);
  return weatherUlr.toString();
};

app.get("/weather", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;

  fetch(buildWeatherUrl({ lat, lon, path: "weather" }))
    .then((response) => response.json())
    .then((data) => {
      const transformedData = transformWeather(data);
      res.send(transformedData);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/forecast", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;

  fetch(buildWeatherUrl({ lat, lon, path: "forecast" }))
    .then((response) => response.json())
    .then((data) => {
      const transformedForecast = transformForecast(data.list);
      res.send(transformedForecast);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
