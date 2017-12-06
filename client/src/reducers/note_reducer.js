import { GET_NOTES, SELECT_NOTE, IS_OPEN, ADD_NOTE } from '../actions/types';

const intialState = { list: [], isOpen: false, selected: {} };

export default (state = intialState, action) => {
  switch (action.type) {
    case SELECT_NOTE:
      return Object.assign({}, state, {
        selected: action.payload,
      });
    case GET_NOTES:
      return Object.assign({}, state, {
        list: action.payload,
      });
    case IS_OPEN:
      return Object.assign({}, state, {
        isOpen: action.payload,
      });
    default:
      return state;
  }
};
