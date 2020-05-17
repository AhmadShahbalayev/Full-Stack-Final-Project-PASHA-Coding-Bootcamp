import React from 'react';
import SearchBar from '../search-bar/SearchBar';
import Catalog from './catalog/Catalog';

class Main extends React.Component {
  render = () => {
    return (
      <main>
        <SearchBar />
        <Catalog />
      </main>
    );
  }
}

export default Main;