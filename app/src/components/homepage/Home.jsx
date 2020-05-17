import React from 'react';
import Header from './Header';
import Main from './Main';

class Home extends React.Component {
  render = () => {
    return (
      <div className='homepage'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default Home;