import React from "react";

function Jam3yaItem({ Jam3ya }) {
  return (
    <div>
      <h2>{Jam3ya.title}</h2>
      <h2>{Jam3ya.author.username}</h2>
      <img src={Jam3ya.image} alt="" />
    </div>
  );
}

export default Jam3yaItem;
