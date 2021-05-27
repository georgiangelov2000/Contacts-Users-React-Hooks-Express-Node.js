import React, { useContext, useEffect } from "react";
import { Row } from "react-bootstrap";
import ContactContext from "../../../context/contacts/contactContext";
import ContactItem from "../ContactItem/ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, getContacts } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <>
      <h5 className="text-center">My contacts</h5>
      {contacts == null ? (
        <h5 className="text-center">Please add a contact </h5>
      ) : (
        <Row className="m-0">
          {contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
        </Row>
      )}
    </>
  );
};

export default Contacts;
