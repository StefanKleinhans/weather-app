import React, { useState } from "react";

const WeatherSearch = () => {
  const [locationData, setLocationData] = useState();
  const [searchText, setSearchText] = useState("");

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

    console.log(data);
    setLocationData(data);
  };

  const formHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <form onSubmit={getLocations}>
      <input
        placeholder="Search Location"
        onChange={formHandler}
        value={searchText}
      ></input>
      <button type="submit">Add Location</button>
    </form>
  );
};

export default WeatherSearch;
