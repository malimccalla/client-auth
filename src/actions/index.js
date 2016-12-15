import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  AUTH_USER,
  AUTH_ERROR,
  DEAUTH_USER
 } from './types';

const API_URL = 'http://localhost:3000'

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/signin`, { email, password })
      .then((res) => {
        console.log('success');
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', res.data.token)
        browserHistory.push('/feature');
      })
      .catch((err) => {
        console.log('Error: ', err.message || err );
        dispatch(authError('Bad login info.'))
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: DEAUTH_USER };
}
