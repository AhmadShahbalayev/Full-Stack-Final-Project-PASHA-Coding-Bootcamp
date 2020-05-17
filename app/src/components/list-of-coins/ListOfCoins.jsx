import React from 'react';
import { connect } from 'react-redux';
import { getCoins } from '../../redux/actions';
import HeaderOfCoins from '../header-of-list-of-coins/HeaderOfCoins';
import SearchBar from '../search-bar/SearchBar';

class ListOfCoins extends React.Component {
  componentDidMount = () => {
    this.props.getCoins(this.props.match.params.type);
  }
  renderList = () => {
    return this.props.coins.map(i => {
      return (
        <div key={i.id}>
          <p>{i.name}</p>
        </div>
      )
    })
  }
  render = () => {
    console.log(this.props.coins)
    return (
      <div className='homepage'>
        <HeaderOfCoins />
        <SearchBar />
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.reducer.coins
  }
}

export default connect(mapStateToProps, { getCoins })(ListOfCoins);