import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import jam3yatStore from "../Stores/jam3yatStore";

function DetailsModal(props) {
  console.log(props.Jam3ya);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{props.Jam3ya.title}</h5>
          <p>
            <img className="card-img-top" src={props.Jam3ya.image} alt="" />
          </p>
          <p>The monthly amount: {props.Jam3ya.amount}</p>
          <p>How many people: {props.Jam3ya.limit}</p>
          <p>The start date:: {props.Jam3ya.startDate}</p>
          <p>The end date: {props.Jam3ya.endDate}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>

          <Button onClick={jam3yatStore.deleteJam3ya(props.Jam3ya._id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DetailsModal;
