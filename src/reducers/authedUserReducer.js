import { SET_AUTHED_USER, CLEAR_AUTHED_USER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    case CLEAR_AUTHED_USER:
      return null;
    default:
      return state;
  }
}
