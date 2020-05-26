// Libraries:
import React from 'react';
import { connect } from 'react-redux';

// Tools:
import { login } from '../redux/actions';

class AdminLogin extends React.Component {
  state = {
    username: '',
    password: '',
  }
  getValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  submit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  }
  render = () => {
    return (
      <form className='admin-panel' onSubmit={this.submit}>
        <h1 className='admin-header'>Admin panel</h1>
        <div className='admin-login-grid'>
          <div>
            <label htmlFor="login">Login</label>
            <input onChange={this.getValue} name='username' value={this.state.username} type='text' id='login' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={this.getValue} name='password' value={this.state.password} type='password' id='password' />
          </div>
          <button className='login-btn' type='submit'>Sign in</button>
        </div>
      </form>
    );
  }
}

export default connect(null, { login })(AdminLogin);