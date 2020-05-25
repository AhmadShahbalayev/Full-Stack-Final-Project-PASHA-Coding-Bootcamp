// Libraries:
import React from 'react';
import { connect } from 'react-redux';

// Components:
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Catalog from '../components/Catalog';
import FoundCoins from '../components/FoundCoins';

class Homepage extends React.Component {
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

export default connect(mapStateToProps, null)(Homepage);