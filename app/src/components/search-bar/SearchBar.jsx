import React from 'react';
import { connect } from 'react-redux';
import { searchCoin } from '../../redux/actions';
import Filter from '../homepage/advanced-filter/Filter';

class SearchBar extends React.Component {
  state = {
    value: '',
    modal: false
  }
  change = () => {
    this.setState({ modal: !this.state.modal })
  }
  getValue = (e) => {
    this.setState({ value: e.target.value });
  }
  findCoins = () => {
    this.props.searchCoin(this.state.value);
    this.setState({ modal: false })
  }
  render = () => {
    return (
      <section className='search-bar-box'>
        <h6>Input field</h6>
        <div className='search-bar'>
          <input type="text" value={this.state.value} onChange={this.getValue} />
          <button onClick={this.findCoins}>Search</button>
        </div>
        {this.props.advanced ? <span className='advanced-filter' onClick={this.change}>Advanced filter ></span> : null}
        {this.state.modal ? <div className='modal-filter'><Filter /></div> : null}
      </section>
    );
  }
}

export default connect(null, { searchCoin })(SearchBar);