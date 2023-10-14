import "./App.scss";
import Nav from "./components/Navigation/Nav";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/login";
function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <Nav /> */}
        <Switch>
          <Route path="/news">News</Route>
          <Route path="/about">About</Route>
          <Route path="/contact">Contact</Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="*">404 not found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
