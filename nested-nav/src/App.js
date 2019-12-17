import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
