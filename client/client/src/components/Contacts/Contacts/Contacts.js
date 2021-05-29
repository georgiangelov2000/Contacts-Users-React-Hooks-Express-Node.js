import React, { useContext, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import ContactContext from "../../../context/contacts/contactContext";
import ContactItem from "../ContactItem/ContactItem";
import ContactFilter from "../ContactFilter/ContactFilter";

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
    <Container>
      <h5 className="text-center">My contacts</h5>
      <ContactFilter />

      {contacts !== null ? (
        <Row>
          {filtered !== null
            ? filtered.map((contact) => (
                <ContactItem key={contact._id} contact={contact} />
              ))
            : contacts.map((contact) => (
                <ContactItem key={contact._id} contact={contact} />
              ))}
        </Row>
      ) : null}
    </Container>
  );
};

export default Contacts;

/*
{contacts == null ? (
        <h5 className="text-center">Please add a contact </h5>
      ) : (
        <Row className="m-0">
          {contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
        </Row>
      )}
      */
