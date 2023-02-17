import { LOGIN_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.id;
    default:
      return state;
  }
}
