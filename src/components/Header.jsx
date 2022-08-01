import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Modal from "./Modal";

const Header = () => {
  const { selectLocation } = useContext(WeatherContext);

  return (
    <header>
      <div className="socialMedia">
        <FaGithub />
        <FaInstagram />
        <FaTwitter />
      </div>
      <div className="selectLocation" onClick={selectLocation}>
        Select Location +
      </div>
      <Modal />
    </header>
  );
};

export default Header;
