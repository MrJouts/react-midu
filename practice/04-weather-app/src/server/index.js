import "dotenv/config";
import express from "express";

const app = express();
const port = 3000;
const WHEATER_APP_URL = ({ lat, lon }) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&appid=${process.env.API_KEY}&units=metric&lang=es`;

app.get("/", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  fetch(WHEATER_APP_URL({ lat, lon }))
    .then((response) => response.json())
    .then((data) => {
      const {
        main: { temp, feels_like, temp_max, temp_min, humidity },
        weather: [{ description, icon }],
        wind: { speed: windSpeed },
        name: city,
        timezone,
      } = data;

      const getParsedTemperature = (temperature) =>
        Math.round(temperature) + "°";

      const transformedData = {
        temperature: getParsedTemperature(temp),
        description,
        icon,
        city,
        feelsLike: getParsedTemperature(feels_like),
        tempMax: getParsedTemperature(temp_max),
        tempMin: getParsedTemperature(temp_min),
        windSpeed: windSpeed + " k/m",
        humidity: humidity + "%",
        timezone,
      };

      res.send(transformedData);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
