import Main from "./components/Main";
import WeatherFooter from "./components/WeatherFooter";
import Header from "./components/Header";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  console.log("Hello World");
  return (
    <WeatherProvider>
      <div className="App">
        <Header />
        <Main />
        <WeatherFooter />
      </div>
    </WeatherProvider>
  );
}

export default App;
