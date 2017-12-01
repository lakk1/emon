import axios from 'axios';
import { GET_NOTES, ADD_NOTE, DELETE_NOTE, EDIT_NOTE, SELECT_NOTE, IS_OPEN } from './types';

export function selectNote(note) {
  return {
    type: SELECT_NOTE,
    payload: note,
  };
}

export function addNote(note) {
  return {
    type: ADD_NOTE,
    payload: note,
  };
}
export function editNote(note) {
  return {
    type: EDIT_NOTE,
    payload: note._id,
  };
}
export function deleteNote(note) {
  return {
    type: DELETE_NOTE,
    payload: note._id,
  };
}

export function totalNotes(notes) {
  return {
    type: GET_NOTES,
    payload: notes,
  };
}
export function openNote(open = false) {
  return {
    type: IS_OPEN,
    payload: open,
  };
}

export function getNotes() {
  return (dispatch) => {
    axios.get('/api/v1/notes').then(result => dispatch(totalNotes(result.data)));
  };
}

export function postNote(note) {
  return (dispatch) => {
    axios.post('/api/v1/notes', note).then(() => dispatch(getNotes()));
  };
}
