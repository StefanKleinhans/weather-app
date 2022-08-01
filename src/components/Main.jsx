import React from "react";
import DateTime from "./DateTime";
import Location from "./Location";

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="dateLoc">
        <DateTime />
        <Location />
      </div>
    </div>
  );
};

export default Main;
