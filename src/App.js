import "./App.css";
import Dashboard from "./Components/Dashboard";
import Details from "./Components/Details";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import React from "react";
import authenticationStore from "./Stores/authenticationStore";
import { observer } from "mobx-react";
import { Redirect } from "react-router";

function App() {
  //if (authenticationStore.user) <Redirect to="/Dashboard" />;
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/Dashboard">
            <Dashboard />
            <Details />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default observer(App);
