import React from "react";

function Jam3yaItem({ Jam3ya }) {
  return (
    <div className="card">
      <img className="card-img-top" src={Jam3ya.image} alt="" />
      <div className="card-body">
        <h2 className="card-title">{Jam3ya.title}</h2>
        <p>owner: {Jam3ya.author.username}</p>
      </div>
    </div>
  );
}

export default Jam3yaItem;
