import "./App.css";
import Dashboard from "./Components/Dashboard";
import Details from "./Components/Details";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import React, { useState } from "react";
import authenticationStore from "./Stores/authenticationStore";
import { observer } from "mobx-react";
import { Redirect } from "react-router";
import Jam3yatList from "./Components/Jam3yatList";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/Dashboard">
          <Dashboard />
          <Details />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
      </Switch>
    </>
  );
}

export default observer(App);
