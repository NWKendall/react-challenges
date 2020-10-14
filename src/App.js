import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Button, Navigation } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Navigation} />
          <Route exact path="/toggle" component={Button} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
