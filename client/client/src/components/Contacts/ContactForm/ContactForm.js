import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import ContactContext from "../../../context/contacts/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrentContact } = contactContext;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  },[contactContext,current]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
      console.log("success");
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrentContact();
  };

  return (
    <Container>
      <h5 className="text-center">Contact Form</h5>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={onChange}
            name="name"
            type="text"
            placeholder="Enter name"
            value={name}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
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
            type="text"
            name="phone"
            placeholder="Enter Phone"
            onChange={onChange}
            minLength="6"
            value={phone}
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="exampleForm.ControlSelect1">
          <Form.Label className="text-white">Type</Form.Label>
          <Form.Control
            onChange={onChange}
            as="select"
            value={type}
            name="type"
          >
            <option value="professional">Professional</option>
            <option value="personal">Personal</option>
            <option value="public">Public</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
