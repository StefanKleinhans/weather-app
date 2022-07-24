import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [locationData, setLocationData] = useState();
  const [searchText, setSearchText] = useState("");
  const [showLocation, setShowLocation] = useState(false);
  const [weatherData, setWeatherData] = useState();

  const getLocations = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams({
      q: searchText,
      appid: "db7bfea45c02616be7e6e2024f3fedd8",
      limit: 5,
    });

    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?${params}`
    );

    const data = await response.json();

    setLocationData(data);
    setShowLocation(true);
  };

  const getWeather = async (e) => {
    const params = new URLSearchParams({
      q: e.target.innerText,
      appid: "db7bfea45c02616be7e6e2024f3fedd8",
      units: "metric",
    });

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${params}`
    );

    const data = await response.json();
    setLocationData(null);
    setWeatherData(data);
    console.log(data);
  };

  const formHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <WeatherContext.Provider
      value={{
        getLocations,
        formHandler,
        locationData,
        searchText,
        showLocation,
        getWeather,
        weatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
