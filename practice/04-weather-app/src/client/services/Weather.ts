const USE_MOCK_JSON = process.env.NODE_ENV === "development";

import weatherMockedData from "./weather-mock.json";

export const getWeather = async () => {
  if (USE_MOCK_JSON) {
    return new Promise((resolve) => {
      resolve(weatherMockedData);
    });
  }

  const position = await new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const {
    coords: { latitude, longitude },
  } = position;

  const response = await fetch(
    `http://localhost:3000?lat=${latitude}&lon=${longitude}`
  );
  return await response.json();
};
