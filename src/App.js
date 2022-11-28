import React, { useState } from "react";
import { BrowserRouter, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios"
import DogList from "./DogList";
import NotFound from "./NotFound";
import DogDetails from "./DogDetails";

import './App.css';

/**
 * 
 * @param {*} param0 
 * @returns 
 */
function App({dogs}) {

  return (
    <div className="App">
        <h1>React Dogfinder</h1>
        <Nav dogs={dogs}/>
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs}/>}></Route>
          {dogs.map(dog => (
            <Route path={`/dogs/${dog.name}`} key={dog.name}
                   element={<DogDetails dog={dog}/>}>
            </Route>
            )
          )}
          <Route path="*" element={<Navigate to="/dogs" />}></Route>
        </Routes>
    </div>
  );
}

export default App;
