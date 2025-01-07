export interface WeatherInfo {
  temperature: string;
  description: string;
  icon: string;
  city: string;
  feelsLike: string;
  tempMax: string;
  tempMin: string;
  windSpeed: string;
  humidity: string;
  timezone: number;
}

export const initialWeatherInfo: WeatherInfo = {
  temperature: "",
  description: "",
  icon: "",
  city: "",
  feelsLike: "",
  tempMax: "",
  tempMin: "",
  windSpeed: "",
  humidity: "",
  timezone: 0,
};
