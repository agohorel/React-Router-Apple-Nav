import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Product } from "./components/Product";

import "./App.css";
import data from "./data";

function App() {
  const [instruments] = useState(data);
  const [currentInstrument, setCurrentInstrument] = useState(0);

  return (
    <div className="App">
      <Router>
        <Nav
          instruments={instruments}
          setCurrentInstrument={setCurrentInstrument}
        ></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/product/:id">
            <Product data={instruments}></Product>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
