import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header-container">
      <h1>Star BD</h1>
      <nav className="nav-container">
        <ul className="list-item-container">
          <li className="list-item">
            <NavLink to="/person" activeClassName="active">
            People
            </NavLink>
          </li>
          <li className="list-item">
          <NavLink to="/planets" activeClassName="active">
            Planets
            </NavLink>
          </li>
          <li className="list-item">
          <NavLink to="/starships" activeClassName="active">
            Starships
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
