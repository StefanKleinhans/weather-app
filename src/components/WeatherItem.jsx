import React from "react";
import sunnyImage from "../assets/sun.png";
import cloudyImage from "../assets/clouds.png";
import partlyCloudyImage from "../assets/partlyCloudy.png";
import rainImage from "../assets/rain.png";
import snowImage from "../assets/snow.png";
import stormImage from "../assets/storm.png";

const WeatherItem = () => {
  return (
    <div className="nextWeather">
      <div className="dayWeek">Today</div>
      <img src={stormImage} alt="weather" className="weatherIcon" />
      <div className="temp">12°C</div>
    </div>
  );
};

export default WeatherItem;
