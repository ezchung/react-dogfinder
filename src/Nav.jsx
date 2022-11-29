import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import { NavLink } from "react-router-dom";
import "./Nav.css";
/**
 * Nav:
 *
 * Props: dogs - a list of dogs
 *
 * State:
 *
 * App -> Nav -> NavLink
 */

function Nav({ dogs }) {
  return (
    <nav className="Nav">
      {dogs.map((dog) => (
        <NavLink
          className={({ isActive }) => (isActive ? "dog active" : undefined)}
          key={dog.name}
          to={`/dogs/${dog.name}`}
        >
          <h2>{dog.name}</h2>
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
