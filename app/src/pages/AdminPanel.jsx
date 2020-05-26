// Libraries:
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Tools:
import history from '../history';
import { getAllCoins, deleteCoin, logout } from '../redux/actions';

// Components:
import ModalWindow from '../components/ModalWindowForConfirmation';
import SearchBar from '../components/SearchBar';

class AdminPanel extends React.Component {
  state = {
    show: false,
    id: 0
  }
  showOrHide = (id) => {
    this.setState({ show: !this.state.show, id });
  }
  componentDidMount = () => {
    this.props.getAllCoins();
  }
  renderList = () => {
    return this.props.allCoins.map((i, index) => {
      let URL = `/images/${i.obverseLink}`;
      let ALT = `icon_of_${i.name}`;
      let ID = `/coins/${i.id}`;
      return (
        <div className='admin-panel-list' key={index}>
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
            <button onClick={() => history.push(`/admin/edit/${i.id}`)} className='cancel-btn margin0'>Edit</button>
            <button onClick={() => this.showOrHide(i.id)} className='cancel-btn margin0'>Delete</button>
          </div>
        </div>
      )
    })
  }
  logout = () => {
    localStorage.removeItem('LoggedIn');
    this.props.logout();
    history.push('/');
  }
  render = () => {
    if (this.props.status) {
      return (
        <div className='admin-panel-container'>
          {this.state.show ? <ModalWindow value={this.state.id} showOrHide={this.showOrHide} /> : null}
          <div className='admin-panel-header'>
            <h1 className='admin-header'>Admin panel</h1>
            <SearchBar />
          </div>
          <div className='add-login-and-logout-box'>
            <div className='add-coin'>
              <div onClick={() => history.push('/admin/create')} className='coin-border'>+</div>
              <button onClick={() => history.push('/admin/create')}>Add new coin</button>
            </div>
            <button className='logout' onClick={this.logout}>Logout</button>
          </div>
          <div className='admin-panel-list-box'>
            <div className='panel-list'>
              {this.renderList()}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ padding: '52px' }}>
          <h1>You are not logged in! Please <Link to='/admin'>Login</Link></h1>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    allCoins: state.reducer.allCoins,
    status: state.reducer.status
  }
}

export default connect(mapStateToProps, { getAllCoins, deleteCoin, logout })(AdminPanel);