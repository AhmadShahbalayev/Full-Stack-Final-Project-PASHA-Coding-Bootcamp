import React from 'react';

class AdminLogin extends React.Component {
  render = () => {
    return (
      <form className='admin-panel'>
        <h1 className='admin-header'>Admin panel</h1>
        <div className='admin-login-grid'>
          <div>
            <label htmlFor="login">Login</label>
            <input type='text' id='login' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type='password' id='password' />
          </div>
          <button className='login-btn' type='submit'>Sign in</button>
        </div>
      </form>
    );
  }
}

export default AdminLogin;