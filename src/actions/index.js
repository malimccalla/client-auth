import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER } from './types';

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
        console.log('error');
      })
  }
}
