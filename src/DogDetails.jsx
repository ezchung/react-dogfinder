import React from "react";
import { useParams, Link } from "react-router-dom";

/**
 * DogDetails:
 *
 * Props: dog - a dog, like {name: "Whisky", src: 'whisky', age: 5, facts: [...]}
 *
 * State:
 *
 * App -> DogDetails
 */
function DogDetails({ dog }) {
  // const { name } = useParams();
  // const dog = dogs.find(dog => dog.name === name);

  return (
    <Link to={`/dogs/${dog.name}`}>
      <div className="dog">
        <h2>{dog.name}</h2>
        <p>{`Age : ${dog.age}`}</p>
        <p>{`Facts : ${dog.facts}`}</p>
        <img src={`/${dog.src}.jpg`} alt={dog.src}></img>
      </div>
    </Link>
  );
}

export default DogDetails;
