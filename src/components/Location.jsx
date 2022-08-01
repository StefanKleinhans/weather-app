import { useState } from "react";

const Location = () => {
  const [location, setLocation] = useState();
  const [state, setState] = useState();

  const apiURL = "http://api.openweathermap.org/geo/1.0/direct?";

  const getLocation = async () => {
    const params = new URLSearchParams({
      q: "Worcester,za",
      limit: 5,
      appid: "db7bfea45c02616be7e6e2024f3fedd8",
    });

    const response = await fetch(apiURL + params);
    const data = await response.json();

    setLocation(data[0].name);
    setState(data[0].state);
  };

  getLocation();

  return (
    <div className="locationContainer">
      <h2>{location}</h2>
      <p>{state}</p>
    </div>
  );
};

export default Location;
