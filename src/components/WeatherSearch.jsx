import React, { useState, useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherSearch = () => {
  const { getLocations, formHandler, searchText } = useContext(WeatherContext);

  return (
    <form onSubmit={getLocations}>
      <input
        placeholder="Search Location"
        onChange={formHandler}
        value={searchText}
      ></input>
      <button type="submit">Search Location</button>
    </form>
  );
};

export default WeatherSearch;
