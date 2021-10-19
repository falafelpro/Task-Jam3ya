import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import jam3yatStore from "../Stores/jam3yatStore";
import authenticationStore from "../Stores/authenticationStore";
import Jam3yaMember from "./Jam3yaMember";

function DetailsModal(props) {
  console.log(props.Jam3ya);

  const handleDelete = () => {
    jam3yatStore.deleteJam3ya(props.Jam3ya._id);
  };
  console.log(+props.Jam3ya.limit > props.Jam3ya.users.length);
  console.log(+props.Jam3ya.limit);
  console.log(props.Jam3ya.users.length);
  console.log(Date.parse(props.Jam3ya.startDate) / 1000 < Date.now());
  console.log(Date.now());
  console.log(Date.parse(props.Jam3ya.startDate) / 1000);
  const handleJoin = () => {
    jam3yatStore.joinJam3ya(props.Jam3ya._id);
  };

  const jam3yaMembers = props.Jam3ya.users.map((user) => {
    <ol className="list-group list-group-numbered">
      <Jam3yaMember user={user} />
    </ol>;
  });
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
          {jam3yaMembers}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          {props.Jam3ya.author.username ===
            authenticationStore.user.username && (
            <Button onClick={handleDelete}>Delete</Button>
          )}
          {+props.Jam3ya.limit > props.Jam3ya.users.length &&
            Date.parse(props.Jam3ya.startDate) / 1000 < Date.now() && (
              <Button onClick={handleJoin}>Join</Button>
            )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DetailsModal;
