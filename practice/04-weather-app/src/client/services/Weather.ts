const USE_MOCK_JSON = process.env.NODE_ENV === "developmesnt";

import weatherMockedData from "./weather-mock.json";
import forecastMockedData from "./forecas-mock.json";

const getGeolocationPosition = async (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const fetchData = async (endpoint: string, mockData: any) => {
  if (USE_MOCK_JSON) {
    return Promise.resolve(mockData);
  }

  const {
    coords: { latitude, longitude },
  } = await getGeolocationPosition();

  const response = await fetch(
    `http://localhost:3000/${endpoint}?lat=${latitude}&lon=${longitude}`
  );
  return response.json();
};

export const getWeather = async () => {
  return fetchData("weather", weatherMockedData);
};

export const getForecast = async () => {
  return fetchData("forecast", forecastMockedData);
};
