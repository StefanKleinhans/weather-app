import React, { useContext } from "react";
import Location from "./Location";
import { v4 as uuidv4 } from "uuid";
import WeatherContext from "../context/WeatherContext";

const LocationList = () => {
  const { locationData, getWeather } = useContext(WeatherContext);
  return (
    <div className="weather-search">
      {locationData &&
        locationData.map((loc) => (
          <Location
            key={uuidv4()}
            name={`${loc.name}, ${loc.country}`}
            onClick={getWeather}
          />
        ))}
    </div>
  );
};

export default LocationList;
