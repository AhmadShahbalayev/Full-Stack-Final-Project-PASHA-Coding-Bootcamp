import React from 'react';
import Header from './Header';
import SearchBar from '../search-bar/SearchBar';
import Catalog from './catalog/Catalog';
import { connect } from 'react-redux';
import FoundCoins from './FoundCoins';

class Home extends React.Component {
  render = () => {
    return (
      <div className='homepage'>
        <Header header={'Homepage'} />
        <SearchBar advanced={true} />
        {this.props.found ? <FoundCoins /> : <Catalog />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    found: state.reducer.found
  }
}

export default connect(mapStateToProps, null)(Home);