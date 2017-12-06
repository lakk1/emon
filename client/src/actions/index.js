import axios from 'axios';
import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  SELECT_NOTE,
  IS_OPEN,
  LOGGED_IN,
  LOGOUT,
  SIGNUP,
  AUTH_ERROR,
} from './types';

export const selectNote = note => ({
  type: SELECT_NOTE,
  payload: note,
});

export const addNote = note => ({
  type: ADD_NOTE,
  payload: note,
});

export const editNote = note => ({
  type: EDIT_NOTE,
  payload: note._id,
});

export const deleteNote = note => ({
  type: DELETE_NOTE,
  payload: note._id,
});

export const totalNotes = notes => ({
  type: GET_NOTES,
  payload: notes,
});

export const openNote = (open = false) => ({
  type: IS_OPEN,
  payload: open,
});

export const signupUser = user => ({
  type: SIGNUP,
  payload: user,
});

export const loginUser = user => ({
  type: LOGGED_IN,
  payload: true,
});

export const logOutUser = () => ({
  type: LOGOUT,
  payload: false,
});

export const authError = autherr => ({
  type: AUTH_ERROR,
  payload: autherr,
});

export const logOut = () => async (dispatch) => {
  await axios.get('/api/v1/user/logout');
  dispatch(logOutUser());
};

export const signup = user => async (dispatch) => {
  try {
    const result = await axios.post('/api/v1/user/signup', user);
    if (result.data) {
      dispatch(signupUser(true));
    }
  } catch (error) {
    dispatch(authError(error.message));
  }
};

export const login = user => async (dispatch) => {
  try {
    const result = await axios.post('/api/v1/user/login', user);
    if (result.data) {
      dispatch(loginUser(true));
    }
  } catch (error) {
    dispatch(authError(error.message));
  }
};

export const postNote = note => async (dispatch) => {
  await axios.post('/api/v1/notes', note);
  dispatch(getNotes());
};

export const getNotes = () => async (dispatch) => {
  try {
    const result = await axios.get('/api/v1/notes');
    const user = await axios.get('/api/v1/user');
    console.log(user);
    if (user.data.email) {
      dispatch(loginUser());
    }
    if (result.data) {
      dispatch(totalNotes(result.data));
    }
  } catch (error) {
    dispatch(authError(error.message));
  }
};
