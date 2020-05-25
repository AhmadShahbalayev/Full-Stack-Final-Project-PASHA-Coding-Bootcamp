// Libraries:
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Tools:
import { changeFound } from '../redux/actions';
import history from '../history';

class Header extends React.Component {
  returnToHome = () => {
    this.props.changeFound();
    history.push('/');
  }
  render = () => {
    return (
      <header className='header'>
        <h1 onClick={this.returnToHome}>{this.props.header}</h1>
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

export default connect(null, { changeFound })(Header);