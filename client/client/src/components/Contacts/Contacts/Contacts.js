import React, { useContext, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import ContactContext from "../../../context/contacts/contactContext";
import ContactItem from "../ContactItem/ContactItem";
import ContactFilter from "../ContactFilter/ContactFilter";
import ContactForm from "../ContactForm/ContactForm";
import style from "./Contacts.module.css";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, getContacts, filtered } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length === 0) {
    return <h4 className="text-center">Please add a contact</h4>;
  }

  return (
    <Container fluid className={style.main}>
      <h5 className="text-center">My contacts</h5>
      <ContactFilter />

      <Row>
        <Col xs={12} className="m-auto">
          <ContactForm />
        </Col>

        <Col xs={12} className="justify-content-center ">
          {contacts !== null ? (
            <Row className="m-auto">
              {filtered !== null
                ? filtered.map((contact) => (
                    <ContactItem key={contact._id} contact={contact} />
                  ))
                : contacts.map((contact) => (
                    <ContactItem key={contact._id} contact={contact} />
                  ))}
            </Row>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
