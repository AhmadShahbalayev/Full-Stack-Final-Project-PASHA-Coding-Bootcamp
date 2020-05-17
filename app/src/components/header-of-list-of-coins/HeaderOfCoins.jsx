import React from 'react';
import { Link } from 'react-router-dom';

class HeaderOfCoins extends React.Component {
  render = () => {
    return (
      <header className='header c'>
        <h1>List of coins</h1>
        <Link to='/admin'>Admin panel</Link>
        <span>
          <Link to='/'>Homepage</Link>
          <span> &mdash; </span>
          <span>List of coins</span>
        </span>
      </header>
    );
  }
}

export default HeaderOfCoins;