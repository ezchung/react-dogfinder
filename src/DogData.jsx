import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

/**
 * DogData:
 *
 * Props:
 *
 * State:
 *
 * App -> DogData -> DogDetails
 */
function DogData({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name === name);
  return (
    <div className="DogData">
      <DogDetails dog={dog} />
    </div>
  );
}

export default DogData;
