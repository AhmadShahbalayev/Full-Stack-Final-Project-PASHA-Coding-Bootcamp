import React from 'react';
import SearchBar from '../search-bar/SearchBar';
import { connect } from 'react-redux';
import { getAllCoins } from '../../redux/actions';
import { Link } from 'react-router-dom';

class AdminPanel extends React.Component {
  componentDidMount = () => {
    this.props.getAllCoins();
  }
  renderList = () => {
    return this.props.allCoins.map(i => {
      let nameInDB = i.name;
      nameInDB = nameInDB.replace(/\s+/g, "_");
      let URL = `http://localhost:5000/images/${nameInDB}_1.png`;
      let ALT = `icon_of_${nameInDB}`;
      let ID = `/coins/${i.id}`;
      return (
        <div className='admin-panel-list' key={i.id}>
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
          <div className='admin-btn-box'>
            <button className='cancel-btn margin0'>Edit</button>
            <button className='cancel-btn margin0'>Delete</button>
          </div>
        </div>
      )
    })
  }
  render = () => {
    return (
      <div style={{ padding: '52px' }}>
        <h1 className='admin-header'>Admin panel</h1>
        <SearchBar />
        <div className='admin-panel-list-box'>
          <div className='panel-list'>
            {this.renderList()}
          </div>
        </div>
        <div className='add-coin'>
          <div className='coin-border'>+</div>
          <button>Add new coin</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allCoins: state.reducer.allCoins
  }
}

export default connect(mapStateToProps, { getAllCoins })(AdminPanel);