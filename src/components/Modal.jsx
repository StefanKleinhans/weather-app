import { useContext, useEffect } from "react";
import WeatherContext from "../context/WeatherContext";

const Modal = () => {
  const { onChange, locationData } = useContext(WeatherContext);

  return (
    <div className="modal">
      <form action="" className="modalForm">
        <input type="text" placeholder="Search Location" onChange={onChange} />
        {locationData
          ? locationData.map((loc) => (
              <p>
                {loc.name}, {loc.country}
              </p>
            ))
          : null}
      </form>
    </div>
  );
};

export default Modal;
