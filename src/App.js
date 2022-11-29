import React, { useState } from "react";
import {
  Navigate,
  Routes,
  Route,
  BrowserRouter,
  Router,
} from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import DogList from "./DogList";
import DogData from "./DogData";

import "./App.css";

/**
 * App:
 *
 * Props:
 *
 * State: dogs - a list of dogs, like {name: "Whisky", src: 'whisky', age: 5, facts: [...]}[]
 *
 * App -> { Nav, Route }
 */
function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading === true) {
    getDogs();
    return <div>Loading ...</div>;
  }

  /**Get all the dogs from the db */
  async function getDogs() {
    const { data } = await axios.get("http://localhost:5001/dogs");
    setDogs(data);
    setIsLoading(false);
  }

  return (
    <div className="App">
      <h1>React Dogfinder</h1>
      <BrowserRouter>
        <Router>
          <Nav dogs={dogs} />
          <Routes>
            <Route path="/dogs" element={<DogList dogs={dogs} />}></Route>
            <Route path="/dogs/:name" element={<DogData dogs={dogs} />}></Route>
            <Route path="*" element={<Navigate to="/dogs" />}></Route>
          </Routes>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
