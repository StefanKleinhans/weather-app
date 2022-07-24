import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="menu">
        <ul className="menu-items">
          <li>Dashboard</li>
          <li>Map</li>
          <li>Saved Location</li>
          <li>Calendar</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
