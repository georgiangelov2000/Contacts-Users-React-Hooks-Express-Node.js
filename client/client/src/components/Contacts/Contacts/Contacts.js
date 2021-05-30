import React, { useContext, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import ContactContext from "../../../context/contacts/contactContext";
import ContactItem from "../ContactItem/ContactItem";
import ContactFilter from "../ContactFilter/ContactFilter";
import ContactForm from "../ContactForm/ContactForm";
import Spinner from "../../Spinner/Spinner";
import style from "./Contacts.module.css";
import AuthContext from "../../../context/auth/authContext";

const Contacts = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4 className="text-center mt-5">Please add a contact</h4>;
  }

  return (
    <Container fluid className={style.main}>
      <ContactForm />

      <Row>
        <Col xs={12} className="mt-5 text-center">
          <h6>Filter by name and email</h6>
          <ContactFilter />
        </Col>

        <Col xs={12}>
          {contacts !== null && !loading ? (
            <Row className="justify-content-center">
              {filtered !== null
                ? filtered.map((contact) => (
                    <ContactItem key={contact._id} contact={contact} />
                  ))
                : contacts.map((contact) => (
                    <ContactItem key={contact._id} contact={contact} />
                  ))}
            </Row>
          ) : (
            <Spinner />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
