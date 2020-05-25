// Libraries:
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Tools: 
import { getCoinsByType } from '../redux/actions';

// Components:
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

class ListOfCoins extends React.Component {
  componentDidMount = () => {
    this.props.getCoinsByType(this.props.match.params.type);
  }
  renderList = () => {
    return this.props.coinsByTpe.map(i => {
      let URL = `/images/${i.obverseLink}`;
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
        <Header header={'List of coins'} url={true} />
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
    coinsByTpe: state.reducer.coinsByTpye
  }
}

export default connect(mapStateToProps, { getCoinsByType })(ListOfCoins);