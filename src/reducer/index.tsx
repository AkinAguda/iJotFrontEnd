import * as actions from './actions';
import { UserStates } from '../interfaces';
import { EditorState } from 'draft-js';
import { string } from 'prop-types';

const initialState: UserStates = {
  uid: '',
  isLoggedIn: false,
  italic: false,
  bold: false,
  editorState: EditorState.createEmpty(),
  noteTitle: '',
  noteType: 'personal',
};

const reducer = (
  state: UserStates = initialState,
  action?: any,
): UserStates => {
  switch (action.type) {
    case actions.LOG_USER_IN:
      return {
        ...state,
        isLoggedIn: true,
        uid: action.payload,
      };
    case actions.LOG_USER_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actions.BOLD: {
      return {
        ...state,
        bold: true,
        editorState: action.payload,
      };
    }
    case actions.ITALIC: {
      return {
        ...state,
        italic: true,
        editorState: action.payload,
      };
    }
    case actions.REMOVE_EFFECT: {
      return {
        ...state,
        bold: false,
        editorState: action.payload,
      };
    }
    case actions.SET_EDITOR_STATE: {
      return {
        ...state,
        editorState: action.payload,
      };
    }
    case actions.EDIT_NOTE_TITLE: {
      return {
        ...state,
        noteTitle: action.payload,
      };
    }
    case actions.REMOVE_STYLING: {
      return {
        ...state,
        editorState: action.payload.state,
        [action.payload.type.toLowerCase()]: false,
      };
    }
    case actions.SET_NOTE_CATEGORY: {
      return {
        ...state,
        noteType: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
