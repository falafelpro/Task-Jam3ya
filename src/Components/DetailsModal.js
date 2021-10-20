import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import jam3yatStore from "../Stores/jam3yatStore";
import authenticationStore from "../Stores/authenticationStore";
import Jam3yaMember from "./Jam3yaMember";
import { observer } from "mobx-react";

function DetailsModal(props) {
  console.log(props.jam3ya);

  const handleDelete = () => {
    jam3yatStore.deleteJam3ya(props.jam3ya._id);
    props.onHide();
  };
  console.log(+props.jam3ya.limit > props.jam3ya.users.length);
  console.log(+props.jam3ya.limit);
  console.log(props.jam3ya.users.length);
  console.log(Date.parse(props.jam3ya.startDate) / 1000 < Date.now());
  console.log(Date.now());
  console.log(Date.parse(props.jam3ya.startDate) / 1000);
  const handleJoin = () => {
    jam3yatStore.joinJam3ya(props.jam3ya._id);
    props.onHide();
  };

  const handleLeave = () => {
    jam3yatStore.leaveJam3ya(props.jam3ya._id);
    props.onHide();
  };
  console.log(props.jam3ya.users);
  console.log(props.jam3ya.users.length);
  const jam3yaMembers = props.jam3ya.users.map((user) => (
    <Jam3yaMember user={user} />
  ));

  console.log(jam3yaMembers);
  return (
    <div>
      <Modal
        className="dark-halloween"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="brownred-halloween text-halloween">
          <Modal.Title id="contained-modal-title-vcenter">
            Jam3ya Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="brownred-halloween text-halloween">
          <h3>{props.jam3ya.title}</h3>
          <p>
            <img className="card-img-top" src={props.jam3ya.image} alt="" />
          </p>
          <p>The monthly amount: {props.jam3ya.amount}</p>
          <p>How many people allowed: {props.jam3ya.limit}</p>
          <p>The start date:: {props.jam3ya.startDate}</p>
          <p>The end date: {props.jam3ya.endDate}</p>
          <ol className="list-group list-group-numbered text-halloween ">
            <h5>Jam3ya Members:</h5>
            {jam3yaMembers}
          </ol>
        </Modal.Body>
        <Modal.Footer className="brownred-halloween text-halloween">
          <Button className="button2-halloween" onClick={props.onHide}>
            Close
          </Button>
          {props.jam3ya.author.username ===
            authenticationStore.user.username && (
            <Button className="button2-halloween" onClick={handleDelete}>
              Delete
            </Button>
          )}
          {+props.jam3ya.limit > props.jam3ya.users.length &&
            Date.parse(props.jam3ya.startDate) / 1000 < Date.now() && (
              <Button className="button2-halloween" onClick={handleJoin}>
                Join
              </Button>
            )}

          {
            <Button className="button2-halloween" onClick={handleLeave}>
              Leave
            </Button>
          }
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default observer(DetailsModal);
