import {
  AUTH_USER,
  DEAUTH_USER
} from '../actions/types';

const INITITAL_STATE = {};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true }
    case DEAUTH_USER:
      return { ...state, authenticated: false }
    default:
      return state;
  }
};
