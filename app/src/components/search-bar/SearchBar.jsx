import React from 'react';
import { connect } from 'react-redux';
import { searchAndFilter } from '../../redux/actions';
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
    if (this.props.filterForm !== undefined) {
      this.props.searchAndFilter(this.state.value, this.props.filterForm.values);
    } else {
      this.props.searchAndFilter(this.state.value, []);
    }
    this.setState({ modal: false })
  }
  render = () => {
    let values = {};
    if (this.props.filterForm !== undefined) {
      values = this.props.filterForm.values;
    }
    return (
      <section className='search-bar-box'>
        <h6>Input field</h6>
        <div className='search-bar'>
          <input style={{ padding: '10px' }} type="text" value={this.state.value} onChange={this.getValue} />
          <button onClick={this.findCoins}>Search</button>
        </div>
        {this.props.advanced ? <span className='advanced-filter' onClick={this.change}>Advanced filter ></span> : null}
        {this.state.modal ? <div className='modal-filter'><Filter initialValues={values} findCoins={this.findCoins} /></div> : null}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterForm: state.form.reduxFilter
  }
}

export default connect(mapStateToProps, { searchAndFilter })(SearchBar);