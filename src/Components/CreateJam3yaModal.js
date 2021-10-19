import React, { useState } from "react";
import jam3yatStore from "../Stores/jam3yatStore";
import { Form, Modal, Button, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";

function CreateJam3yaModal(props) {
  const [jam3ya, setJam3ya] = useState({
    title: "",
    image: "",
    amount: "",
    limit: "",
    startDate: "",
    endDate: "",
  });
  const handleChange = (e) => {
    setJam3ya({ ...jam3ya, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    jam3yatStore.createJam3ya(jam3ya);
    props.closeModal(); // this is to close the modal that is shown
  };
  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create a Jam3ya</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Title</InputGroup.Text>
            <Form.Control type="text" name="title" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Image</InputGroup.Text>
            <Form.Control type="text" name="image" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Amount</InputGroup.Text>
            <Form.Control type="text" name="amount" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Limit</InputGroup.Text>
            <Form.Control type="text" name="limit" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Start Date</InputGroup.Text>
            <DatePicker
              selected={jam3ya.startDate}
              showTimeSelect
              onChange={(date) => setJam3ya({ ...jam3ya, startDate: date })}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>End Date</InputGroup.Text>
            <DatePicker
              selected={jam3ya.endDate}
              showTimeSelect
              onChange={(date) => setJam3ya({ ...jam3ya, endDate: date })}
            />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Create Jam3ya
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateJam3yaModal;
