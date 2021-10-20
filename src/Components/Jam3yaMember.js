import React from "react";
import { observer } from "mobx-react";

function Jam3yaMember({ user }) {
  console.log(user);
  return (
    <li className="list-group-item brownred-halloween-background-only text-halloween">
      {user.username + " Amount: " + user.wallet}
    </li>
  );
}

export default observer(Jam3yaMember);
