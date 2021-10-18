import "./App.css";
import Dashboard from "./Components/Dashboard";
import Details from "./Components/Details";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import React from "react";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
            <Details />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
