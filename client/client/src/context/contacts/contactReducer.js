import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  SET_CURRENT,
  CONTACT_ERROR,
  CLEAR_CURRENT,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
        return {
            ...state,
            contacts: action.payload,
        }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    default:
      return state;
  }
};
