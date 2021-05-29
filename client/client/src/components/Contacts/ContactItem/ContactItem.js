import React, { useContext } from "react";
import {
  ListGroup,
  ListGroupItem,
  CloseButton,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import ContactContext from "../../../context/contacts/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact, clearCurrentContact,setCurrentContact } = contactContext;
  const { _id, username, email, phone, type } = contact;

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
            <>
              <ListGroupItem>Name: {username}</ListGroupItem>
              <ListGroupItem>Email: {email}</ListGroupItem>
              <ListGroupItem>Phone: {phone}</ListGroupItem>
              <ListGroupItem>Type: {type}</ListGroupItem>
              <ListGroupItem>
                Action:{" "}
                <Button onClick={() => setCurrentContact(contact)} variant="success" size="sm">
                  Edit
                </Button>
              </ListGroupItem>
            </>
          </ListGroup>
        </Col>
      </Row>
    </Col>
  );
};

export default ContactItem;
