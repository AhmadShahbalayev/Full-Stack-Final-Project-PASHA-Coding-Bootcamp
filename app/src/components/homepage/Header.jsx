import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render = () => {
    return (
      <header>
        <h1>Homepage</h1>
        <Link to='/admin'>Admin panel</Link>
      </header>
    );
  }
}

export default Header;