import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  GET_CONTACT,
  FILTER_CONTACTS,
  CONTACT_ERROR,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  SET_CURRENT,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };

    case GET_CONTACT:
      return {
        ...state,
        current: action.payload,
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.username.match(regex) || contact.email.match(regex);
        }),
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};