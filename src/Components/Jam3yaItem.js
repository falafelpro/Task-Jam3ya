import React from "react";
import DetailsModal from "./DetailsModal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
function Jam3yaItem({ jam3ya }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="card">
      <img className="card-img-top" src={jam3ya.image} alt="" />
      <div className="card-body">
        <h2 className="card-title">{jam3ya.title}</h2>
        <p>owner: {jam3ya.author.username}</p>
      </div>

      <Button variant="primary" onClick={() => setModalShow(true)}>
        About this jam3ya
      </Button>

      <DetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        jam3ya={jam3ya}
      />
    </div>
  );
}

export default observer(Jam3yaItem);
