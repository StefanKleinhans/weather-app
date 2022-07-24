import React, { useContext } from "react";

const WeatherItem = ({ name, temp, desc }) => {
  return (
    <div className="weather-comp">
      <span>{name}</span>
      <span>{temp}°C</span>
      <span>{desc}</span>
    </div>
  );
};

export default WeatherItem;
