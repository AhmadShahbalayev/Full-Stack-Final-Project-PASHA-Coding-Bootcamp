import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FoundCoins extends React.Component {
  render = () => {
    return (
      <div className='list-of-coins'>
        {this.props.allCoins.map(i => {
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
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allCoins: state.reducer.allCoins
  }
}

export default connect(mapStateToProps, null)(FoundCoins);