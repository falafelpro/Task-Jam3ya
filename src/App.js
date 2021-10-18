import "./App.css";
import Dashboard from "./Components/Dashboard";
import Details from "./Components/Details";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import React, { useState } from "react";
import authenticationStore from "./Stores/authenticationStore";
import { observer } from "mobx-react";
import { Redirect } from "react-router";
import Jam3yatList from "./Components/Jam3yatList";
import CreateJam3yaModal from "./Components/CreateJam3yaModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <NavBar />
      <button onClick={openModal}>Create</button>
      <CreateJam3yaModal isOpen={isOpen} closeModal={closeModal} />
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
