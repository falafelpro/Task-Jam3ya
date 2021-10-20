import React from "react";
import DetailsModal from "./DetailsModal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
function Jam3yaItem({ jam3ya }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="card brownred-halloween shadow p-3 mb-5 rounded">
      <img
        className="card-img-top"
        src="https://icons-for-free.com/iconfiles/png/512/yard+graves+halloween+zombie+icon-1320183496934795581.png"
        alt=""
      />
      <div className="card-body">
        <h2 className="card-title">{jam3ya.title}</h2>
        <p>owner: {jam3ya.author.username}</p>
      </div>

      <Button
        className="button-halloween "
        variant="primary"
        onClick={() => setModalShow(true)}
      >
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
