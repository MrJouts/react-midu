export const transformWeather = (data) => {
  const {
    main: { temp, feels_like, temp_max, temp_min, humidity },
    weather: [{ description, icon }],
    wind: { speed: windSpeed },
    name: city,
    timezone,
  } = data;

  const getParsedTemperature = (temperature) => Math.round(temperature) + "°";

  return {
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
};
