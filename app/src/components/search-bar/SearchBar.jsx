import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchCoin } from '../../redux/actions';

class SearchBar extends React.Component {
  state = {
    value: '',
    modal: true
  }
  change = () => {
    this.setState({ modal: !this.state.modal })
  }
  getValue = (e) => {
    this.setState({ value: e.target.value });
  }
  findCoins = () => {
    this.props.searchCoin(this.state.value);
  }
  render = () => {
    return (
      <section className='search-bar-box'>
        <h6>Input field</h6>
        <div className='search-bar'>
          <input type="text" value={this.state.value} onChange={this.getValue} />
          <button onClick={this.findCoins}>Search</button>
        </div>
        {this.props.advanced ? <Link onClick={this.change} to={this.state.modal ? '/advanced-filter' : '/'}>Advanced filter<i className="fas fa-chevron-down"></i></Link> : null}
      </section>
    );
  }
}

export default connect(null, { searchCoin })(SearchBar);