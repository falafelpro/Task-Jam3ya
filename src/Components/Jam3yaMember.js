import React from "react";

function Jam3yaMember({ user }) {
  console.log(user);
  return (
    <li class="list-group-item">{user.username + " Amount: " + user.wallet}</li>
  );
}

export default Jam3yaMember;
