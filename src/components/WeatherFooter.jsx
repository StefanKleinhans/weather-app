import { useContext, useEffect } from "react";
import WeatherContext from "../context/WeatherContext";
import WeatherItem from "./WeatherItem";

const WeatherFooter = () => {
  const {
    getCurrentWeather,
    getDailyWeather,
    weatherType,
    loading,
    currentWeather,
  } = useContext(WeatherContext);

  useEffect(() => {
    getCurrentWeather();
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <footer>
      <div className="mainWeather">
        <img src={weatherType()} alt="weather" className="weatherIconMain" />
        <div className="tempContainer">
          <div className="dayWeek">Today</div>
          <div className="temp">{Math.floor(currentWeather.main.temp)}°C</div>
        </div>
      </div>

      <div className="otherDaysWeather">
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
      </div>
    </footer>
  );
};

export default WeatherFooter;
