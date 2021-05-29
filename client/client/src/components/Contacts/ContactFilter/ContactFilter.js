import React, { useRef, useContext, useEffect } from "react";
import ContactContext from "../../../context/contacts/contactContext";
import { Form, Col } from "react-bootstrap";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  const { filterContacts, filtered, clearFilter } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Col xs={9} className="m-auto">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            size="sm"
            ref={text}
            type="text"
            placeholder="Enter Contacts..."
            onChange={onChange}
          />
        </Form.Group>
      </Form>
    </Col>
  );
};

export default ContactFilter;
