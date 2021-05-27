import React, { useContext } from "react";
import { ListGroup, ListGroupItem, CloseButton, Col,Row } from "react-bootstrap";
import ContactContext from "../../../context/contacts/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { _id, name, email, phone, type } = contact;

  return (
    <Col xs={3} className="mb-2">
      <Row>
        <Col className="d-flex justify-content-left">
          <CloseButton />
        </Col>
        <Col xs={12}>
          <ListGroup>
            <ListGroupItem>Name: {name}</ListGroupItem>
            <ListGroupItem>Email: {email}</ListGroupItem>
            <ListGroupItem>Phone: {phone}</ListGroupItem>
            <ListGroupItem>Type: {type}</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Col>
  );
};

export default ContactItem;
