import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  SET_CURRENT,
  CONTACT_ERROR,
  CLEAR_CURRENT,
  CLEAR_FILTER
} from "./types";

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const getContacts=async()=>{
    try {
        const res=await axios.get('http://localhost:8000/api/contacts/contacts');    
        dispatch({
            type:GET_CONTACTS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:CONTACT_ERROR,
            payload:error.response.msg
        })
    }

  }

  const addContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `http://localhost:8000/api/contacts/create-contact`,
        contact,
        config
      );
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });
    }
  };

  const clearCurrentContact = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  const deleteContact = async id => {
    try {
        await axios.delete(`http://localhost:8000/api/contacts/delete/${id}`)
    
        dispatch({
            type:DELETE_CONTACT,
            payload: id
        })

    } catch (error) {
        dispatch({
            type: CONTACT_ERROR,
            payload: error.response.msg
        })
    }
  }

  const filterContacts =text=>{
      dispatch({
          type:FILTER_CONTACTS,
          payload:text
      })
  }

  const clearFilter=()=>{
      dispatch({
          type:CLEAR_FILTER
      })
  }


  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        clearCurrentContact,
        getContacts,
        deleteContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
