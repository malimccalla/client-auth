import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;

    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" type="password" {...password} />
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input className="form-control" type="password" {...passwordConfirm} />
          {password.touched && password.error && <div className="alert alert-danger">{password.error}</div>}
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }
}

function validate({ email, password, passwordConfirm }) {
  const errors = {};

  if (password !== passwordConfirm) {
    errors.password = 'Password confirmation does not match'
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate: validate
})(Signup);
