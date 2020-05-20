import React from 'react';
import { connect } from 'react-redux';
import { getCoins } from '../../redux/actions';
import HeaderOfCoins from '../header-of-list-of-coins/HeaderOfCoins';
import SearchBar from '../search-bar/SearchBar';
import { Link } from 'react-router-dom';

class ListOfCoins extends React.Component {
  componentDidMount = () => {
    this.props.getCoins(this.props.match.params.type);
  }
  renderList = () => {
    return this.props.coins.map(i => {
      let URL = i.obverseLink;
      let ALT = `icon_of_${i.name}`;
      let ID = `/coins/${i.id}`;
      return (
        <div key={i.id}>
          <div className='coin-box'>
            <Link to={ID} style={{ textDecoration: 'none' }}>
              <img src={URL} alt={ALT} />
            </Link>
            <div className='desc-box'>
              <Link to={ID} style={{ textDecoration: 'none' }}>
                <h3>{i.name}</h3>
              </Link>
              <p>{i.shortDescription}</p>
            </div>
          </div>
        </div>
      )
    })
  }
  render = () => {
    return (
      <div className='homepage'>
        <HeaderOfCoins />
        <SearchBar advanced={true} />
        <section className='list-of-coins'>
          {this.renderList()}
        </section>
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