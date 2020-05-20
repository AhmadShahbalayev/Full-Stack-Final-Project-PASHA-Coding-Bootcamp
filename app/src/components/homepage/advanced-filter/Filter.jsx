import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getAllCoins } from '../../../redux/actions';
import Header from '../Header';
import SearchBar from '../../search-bar/SearchBar';

class Filter extends React.Component {
  componentDidMount = () => {
    this.props.getAllCoins();
  }
  selectField = ({ label, input, meta: { touched, error, warning } }) => {
    let options = this.props.allCoins.map(op => op[input.name]);
    let unique = [...new Set(options)];
    delete input.value
    return (
      <div>
        <label>{label}</label>
        <select {...input}>
          {unique.map(op => {
            return <option key={op} value={op}>{op}</option>
          })}
        </select>
      </div>
    )
  }
  inputField = ({ label, input, meta: { touched, error, warning } }) => {
    delete input.value
    return (
      <div>
        <label>{label}</label>
        <input {...input}></input>
      </div>
    )
  }
  onSubmit = (values) => {
    this.props.adminCE(values);
  }
  render = () => {
    return (
      <div className='homepage'>
        <Header />
        <SearchBar advanced={true} />
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className='filter-grid'>
            <Field label='Issuing country' name='country' component={this.selectField} />
            <Field type='text' name='value' label='from' component={this.inputField} />
            <Field type='text' name='year' label='to' component={this.inputField} />
            <Field label='Metal' name='metal' component={this.selectField} />
            <Field type='text' name='price' label='from' component={this.inputField} />
            <Field type='text' name='country' label='to' component={this.inputField} />
            <Field label='Quality of the coin' name='quality' component={this.inputField} />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allCoins: state.reducer.allCoins
  }
}

export default reduxForm({ form: 'reduxFilter' })(connect(mapStateToProps, { getAllCoins })(Filter));