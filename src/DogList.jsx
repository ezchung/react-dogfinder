import React from "react";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
function DogList({dogs}){
    return (
        <div className="Nav">
            {dogs.map(dog =>
                <div className="dog" key={dog.name} >
                    <h2>{dog.name}</h2>
                    <img src={`/${dog.name.toLowerCase()}.jpg`} 
                        alt={dog.name}></img>
                </div>
            )}
        </div>
    )
}

export default DogList;