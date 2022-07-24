import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import WeatherItem from "./WeatherItem";

const WeatherList = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    weatherData && (
      <div>
        <WeatherItem
          name={`${weatherData.name}, ${weatherData.sys.country}`}
          temp={weatherData.main.temp}
          desc={weatherData.weather[0].description}
        />
      </div>
    )
  );
};

export default WeatherList;
