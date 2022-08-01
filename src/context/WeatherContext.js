import { createContext, useEffect, useState } from "react";
import sunnyImage from "../assets/sun.png";
import cloudyImage from "../assets/clouds.png";
import partlyCloudyImage from "../assets/partlyCloudy.png";
import rainImage from "../assets/rain.png";
import snowImage from "../assets/snow.png";
import stormImage from "../assets/storm.png";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchLocation, setSearchLocation] = useState("");
  const [locationData, setLocationData] = useState();

  const apiCurrentURL = "https://api.openweathermap.org/data/2.5/weather?";
  const apiDailyURL = "https://api.openweathermap.org/data/2.5/forecast/daily?";
  const apiLocation = "http://api.openweathermap.org/geo/1.0/direct?";
  // const getDailyWeather = async () => {
  //   const params = new URLSearchParams({
  //     q: "Worcester,za",
  //     cnt: 6,
  //     units: "metric",
  //     appid: "db7bfea45c02616be7e6e2024f3fedd8",
  //   });

  //   const response = await fetch(apiDailyURL + params);
  //   const data = await response.json();

  //   console.log(data);
  // };

  const getCurrentWeather = async () => {
    const params = new URLSearchParams({
      q: "Worcester,za",
      units: "metric",
      appid: "db7bfea45c02616be7e6e2024f3fedd8",
    });

    const response = await fetch(apiCurrentURL + params);
    const data = await response.json();

    setCurrentWeather(data);
    setLoading(false);
  };

  const weatherType = () => {
    switch (currentWeather.weather[0].main) {
      case "Rain":
        return rainImage;
        break;
      case "Clear":
        return sunnyImage;
        break;
      case "Clouds":
        return cloudyImage;
      default:
        break;
    }
  };

  const onChange = (e) => {
    e.preventDefault();

    selectLocation(e.target.value);
  };

  const selectLocation = async (text) => {
    const params = new URLSearchParams({
      q: text,
      limit: 5,
      appid: "db7bfea45c02616be7e6e2024f3fedd8",
    });

    const response = await fetch(apiLocation + params);
    const data = await response.json();

    console.log(data);
    setLocationData(data);
  };

  return (
    <WeatherContext.Provider
      value={{
        getCurrentWeather,
        weatherType,
        loading,
        currentWeather,
        selectLocation,
        onChange,
        locationData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
