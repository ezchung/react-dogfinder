import React from "react";
import { NavLink } from "react-router-dom";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
function Nav({dogs}){

    return (
        <nav className="Nav">
            {dogs.map(dog =>
                <NavLink className="dog" key={dog.name} to={`/dogs/${dog.name}`}>
                    <h2>{dog.name}</h2>
                </NavLink>
            )}
        </nav>
    )
}

export default Nav;