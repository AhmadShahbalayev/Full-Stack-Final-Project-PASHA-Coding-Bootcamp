import React from 'react';
import { connect } from 'react-redux';
import { getCoins, getAllCoins } from '../../redux/actions';
import { Link } from 'react-router-dom';
import history from '../../history';

class CoinsList extends React.Component {
  componentDidMount = () => {
    this.props.admin
      ? this.props.getAllCoins()
      : this.props.getCoins(this.props.match.params.type)
  }
  render = () => {
    return (
      <div>
        {this.props.coins.map(i => {
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
              {this.props.admin
                ?
                <div className='admin-btn-box'>
                  <button onClick={() => history.push(`/admin/edit/${i.id}`)} className='cancel-btn margin0'>Edit</button>
                  <button onClick={() => this.showOrHide(i.id)} className='cancel-btn margin0'>Delete</button>
                </div>
                : null
              }
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.reducer.coins
  }
}

const mapDispatchToProps = {
  getCoins,
  getAllCoins
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);