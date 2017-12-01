import { combineReducers } from 'redux';
import noteReducer from './notes_reducers';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  note: noteReducer,
});

export default rootReducer;
