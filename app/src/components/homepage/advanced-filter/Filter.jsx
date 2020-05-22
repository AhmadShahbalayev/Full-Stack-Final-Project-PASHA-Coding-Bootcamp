import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getAllCoins } from '../../../redux/actions';

class Filter extends React.Component {
  componentDidMount = () => {
    this.props.getAllCoins();
  }
  selectField = ({ label, input, meta: { touched, error, warning } }) => {
    let options = this.props.allCoins.map(op => op[input.name]);
    let unique = [...new Set(options)];
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
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className='filter-grid'>
            <Field label='Issuing country' name='country' component={this.selectField} />
            <div className='from-to'>
              <p>Year of issue</p>
              <Field label='from' type='text' name='year' component={this.inputField} />
              <Field label='to' type='text' name='year' component={this.inputField} />
            </div>
            <Field label='Metal' name='metal' component={this.selectField} />
            <div className='from-to'>
              <p>Price</p>
              <Field label='from' type='text' name='price' component={this.inputField} />
              <Field label='to' type='text' name='price' component={this.inputField} />
            </div>
            <Field label='Quality of the coin' name='quality' component={this.inputField} />
            <button className='login-btn filter-btn'>Apply filter</button>
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