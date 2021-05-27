import React, { useContext } from "react";
import {
  ListGroup,
  ListGroupItem,
  CloseButton,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactContext from "../../../context/contacts/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrentContact } = contactContext;
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrentContact();
  };

  return (
    <Col xs={3} className="mb-2">
      <Row>
        <Col xs={12}>
          <ListGroup>
            <CloseButton onClick={onDelete} />
            <ListGroupItem>Name: {name}</ListGroupItem>
            <ListGroupItem>Email: {email}</ListGroupItem>
            <ListGroupItem>Phone: {phone}</ListGroupItem>
            <ListGroupItem>Type: {type}</ListGroupItem>
            <ListGroupItem>
              Action: <Link>Edit</Link>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Col>
  );
};

export default ContactItem;
