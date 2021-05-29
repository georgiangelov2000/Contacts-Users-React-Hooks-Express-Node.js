import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ContactContext from "../../../context/contacts/contactContext";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  let history = useHistory();

  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, clearCurrentContact, current } =
    contactContext;

  const [contact, setContact] = useState({
    username: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { username, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        username: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
      history.push("/contacts");
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrentContact();
  };



  return (
    <Container>
      <h5 className="text-center">
        {current ? `Edit Contact: ${contact.username}` : "Contact Form"}
      </h5>
      <Form className="text-center" onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            size="sm"
            onChange={onChange}
            name="username"
            type="text"
            placeholder="Enter Username"
            value={username}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            size="sm"
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={onChange}
            minLength="6"
            value={email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            name="phone"
            placeholder="Enter Phone"
            onChange={onChange}
            minLength="6"
            value={phone}
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="exampleForm.ControlSelect1">
          <Form.Label>Type</Form.Label>
          <Form.Control
            size="sm"
            onChange={onChange}
            as="select"
            value={type}
            name="type"
            className="mb-2"
          >
            <option value="professional">Professional</option>
            <option value="personal">Personal</option>
            <option value="public">Public</option>
          </Form.Control>
          <Row>
            <Col>
              <Button
                variant="primary"
                type="submit"
                className="ml-4"
                value={current ? "Update Contact" : "Add Contact"}
              >
                Submit
              </Button>
            </Col>
            {current ? (
              <Col>
                <Button
                  variant="danger"
                  type="submit"
                  value="clear"
                  onClick={clearAll}
                >
                  Clear
                </Button>
              </Col>
            ) : null}
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ContactForm;
