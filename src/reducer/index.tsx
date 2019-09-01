import * as actions from './actions';
import { UserStates } from '../interfaces';
import { Action } from 'redux';

const initialState: UserStates = {
  isLoggedIn: false,
};

const reducer = (
  state: UserStates = initialState,
  action?: Action,
): UserStates => {
  switch (action.type) {
    case actions.LOG_USER_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case actions.LOG_USER_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
