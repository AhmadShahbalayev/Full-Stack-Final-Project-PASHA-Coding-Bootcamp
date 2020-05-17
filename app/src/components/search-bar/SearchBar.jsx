import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  render = () => {
    return (
      <section className='search-bar-box'>
        <h6>Input field</h6>
        <div className='search-bar'>
          <input type="text"/>
          <button>Search</button>
        </div>
        <Link to='/advanced-filter'>Advanced filter<i class="fas fa-chevron-down"></i></Link>
      </section>
    );
  }
}

export default SearchBar;