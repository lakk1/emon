import { LOGGED_IN, LOGOUT, GET_USER, AUTH_ERROR, SIGNUP } from '../actions/types';

const intialState = { logedIn: false, user: {} };

export default (state = intialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        logedIn: action.payload,
      });
    case SIGNUP:
      return Object.assign({}, state, {
        logedIn: true,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        logedIn: false,
      });
    case GET_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
