import React from "react";
import DogDetails from "./DogDetails";

/**
 * DogList:
 *
 * Props: dogs - a list of dogs, like {name: "Whisky", src: 'whisky', age: 5, facts: [...]}[]
 *
 * State:
 *
 * App -> DogList
 */
function DogList({ dogs }) {
  return (
    <div className="Nav">
      {dogs.map((dog) => (
        <DogDetails key={dog.name} dog={dog} />
      ))}
    </div>
  );
}

export default DogList;
