import "./App.css";
import Dashboard from "./Components/Dashboard";
import Details from "./Components/Details";
import NavBar from "./Components/NavBar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Dashboard />
      <Details />
    </>
  );
}

export default App;
