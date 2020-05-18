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
        {this.props.advanced ? <Link to='/advanced-filter'>Advanced filter<i className="fas fa-chevron-down"></i></Link> : null}
      </section>
    );
  }
}

export default SearchBar;