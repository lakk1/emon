import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import noteReducer from './note_reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  note: noteReducer,
  auth: authReducer,
});

export default rootReducer;
