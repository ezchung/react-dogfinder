import React from "react";
import { useParams } from "react-router-dom";


/**
 * 
 * @param {*} param0 
 * @returns 
 */
function DogDetails({ dog }){
    // const { name } = useParams();
    // const dog = dogs.find(dog => dog.name === name);


    return (
        <div className="dog">
            <h2>{dog.name}</h2>
            <p>{`Age : ${dog.age}`}</p>
            <p>{`Facts : ${dog.facts}`}</p>
            <img src={`/${dog.src}.jpg`} alt={dog.src}></img>
        </div>
    )
}

export default DogDetails;