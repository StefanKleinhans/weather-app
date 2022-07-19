import { useState } from "react";
import Header from "./components/Header";
import WeatherSearch from "./components/WeatherSearch";
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherSearch />
      <Location />
    </div>
  );
}

export default App;
