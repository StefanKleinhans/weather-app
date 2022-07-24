import WeatherSearch from "./components/WeatherSearch";
import { WeatherProvider } from "./context/WeatherContext";
import LocationList from "./components/LocationList";
import WeatherList from "./components/WeatherList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Navbar />
        <WeatherSearch />
        <LocationList />
        <WeatherList />
      </div>
    </WeatherProvider>
  );
}

export default App;
