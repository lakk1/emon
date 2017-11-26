import { combineReducers } from 'redux';
import noteReducer from './notes_reducers';

const rootReducer = combineReducers({
  note: noteReducer,
  check: () => 4,
});

export default rootReducer;
