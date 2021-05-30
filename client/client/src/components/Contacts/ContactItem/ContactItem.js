import React, { useContext } from "react";
import Avatar from "react-avatar";
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

  const { deleteContact, clearCurrentContact, setCurrentContact } =
    contactContext;
  const { _id, username, email, phone, type, img } = contact;

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
              <ListGroupItem className="text-center">
                <Avatar size="150" round={true} src={img} />
              </ListGroupItem>
              <ListGroupItem><span>Name: </span> {username}</ListGroupItem>
              <ListGroupItem><span>Email: </span> {email}</ListGroupItem>
              <ListGroupItem><span>Phone: </span>{phone}</ListGroupItem>
              <ListGroupItem><span>Type: </span>{type}</ListGroupItem>
              <ListGroupItem>
                Action:
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => setCurrentContact(contact)}
                >
                  Update
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
