import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';

class Header extends React.Component {
  render = () => {
    return (
      <header className='header'>
        <h1 onClick={() => history.push('/')}>{this.props.header}</h1>
        <Link to='/admin'>Admin panel</Link>
        {this.props.url
          ?
          <span className='c'>
            <Link to='/'>Homepage</Link>
            <span> &mdash; </span>
            <span>List of coins</span>
          </span>
          : null}
      </header>
    );
  }
}

export default Header;