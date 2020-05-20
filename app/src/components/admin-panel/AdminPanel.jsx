import React from 'react';
import SearchBar from '../search-bar/SearchBar';
import { connect } from 'react-redux';
import { getAllCoins, deleteCoin } from '../../redux/actions';
import { Link } from 'react-router-dom';
import history from '../../history';
import ModalWindow from './ModalWindow';

class AdminPanel extends React.Component {
  state = {
    show: false,
    id: 0
  }
  showOrHide = (id) => {
    this.setState({show: !this.state.show, id});
  }
  componentDidMount = () => {
    this.props.getAllCoins();
  }
  renderList = () => {
    return this.props.allCoins.map(i => {
      let URL = i.obverseLink;
      let ALT = `icon_of_${i.name}`;
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
            <button onClick={() => history.push(`/admin/edit/${i.id}`)} className='cancel-btn margin0'>Edit</button>
            <button onClick={() => this.showOrHide(i.id)} className='cancel-btn margin0'>Delete</button>
          </div>
        </div>
      )
    })
  }
  logout = () => {
    localStorage.removeItem('LoggedIn');
    history.goBack();
  }
  render = () => {
    if (this.props.status) {
      return (
        <div style={{ padding: '52px' }}>
        {this.state.show ? <ModalWindow value={this.state.id} showOrHide={this.showOrHide} /> : null}
          <h1 className='admin-header'>Admin panel</h1>
          <SearchBar />
          <div className='admin-panel-list-box'>
            <div className='panel-list'>
              {this.renderList()}
            </div>
          </div>
          <div className='add-login-and-logout-box'>
            <div className='add-coin'>
              <div className='coin-border'>+</div>
              <button onClick={() => history.push('/admin/create')}>Add new coin</button>
            </div>
            <button className='logout' onClick={this.logout}>Logout</button>
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
    status: state.loginReducer.status
  }
}

export default connect(mapStateToProps, { getAllCoins, deleteCoin })(AdminPanel);