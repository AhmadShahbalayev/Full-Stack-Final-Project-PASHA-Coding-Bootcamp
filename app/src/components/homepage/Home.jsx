import React from 'react';
import Header from './Header';
import SearchBar from '../search-bar/SearchBar';
import Catalog from './catalog/Catalog';

class Home extends React.Component {
  render = () => {
    return (
      <div className='homepage'>
        <Header />
        <SearchBar advanced={true} />
        <Catalog />
      </div>
    );
  }
}

export default Home;