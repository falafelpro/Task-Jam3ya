import { useState } from "react";
import authenticationStore from "../Stores/authenticationStore";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";
//import { browserHistory } from "react-router";
//do something...

function SignIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    authenticationStore.logging(user, "signin");
    //browserHistory.push("/Dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="username">Username </label>
      <input name="username" onChange={handleChange}></input>
      <label for="password">Password</label>
      <input name="password" onChange={handleChange}></input>

      <button type="submit">Submit</button>
    </form>
  );
}

export default observer(SignIn);
