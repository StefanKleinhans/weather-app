import React from "react";

const Location = ({ name, onClick }) => {
  return (
    <div className="location" onClick={onClick}>
      <div>{name}</div>
    </div>
  );
};

export default Location;
