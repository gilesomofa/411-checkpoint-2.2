// create switch statement with addListing case and deleteListing case, and user
// don't forget to  default return state
//export default

import { combineReducers } from "redux";

const user = (state = null) => state;

// add switch statements in here

const listing = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];

    case "DELETE_LISTING":
      const newState = [...state];
      const businessToDelete = newState.find(objects => objects.id === action.value);
      const businessToDeleteIndex = newState.indexOf(businessToDelete);
      newState.splice(businessToDeleteIndex, 1);
      return newState;

    default:
      return state;
  }
};

export default combineReducers({ user, listing });
