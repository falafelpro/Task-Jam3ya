import React from "react";
import DetailsModal from "./DetailsModal";
import { useState } from "react";
import { Button } from "react-bootstrap";
function Jam3yaItem({ Jam3ya }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="card">
      <img className="card-img-top" src={Jam3ya.image} alt="" />
      <div className="card-body">
        <h2 className="card-title">{Jam3ya.title}</h2>
        <p>owner: {Jam3ya.author.username}</p>
      </div>

      <Button variant="primary" onClick={() => setModalShow(true)}>
        About this Jam3ya
      </Button>

      <DetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        Jam3ya={Jam3ya}
      />
    </div>
  );
}

export default Jam3yaItem;
