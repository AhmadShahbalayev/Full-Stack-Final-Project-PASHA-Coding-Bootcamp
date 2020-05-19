import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import { /* ??? */ } from '../../redux/actions';
import { Link } from 'react-router-dom';
import Header from '../Header';
import SearchBar from '../../search-bar/SearchBar';

class Filter extends React.Component {
  inputField = ({ label, input,  meta: { touched, error, warning } }) => {
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
        <SearchBar advanced={true}/>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className='filter-grid'>
            {/* <Field>
              <p>Issuing country</p>
              <select>
                <option value="canada">CANADA</option>
              </select>
            </Field> */}
            <Field type='text' name='value' label='from' component={this.inputField} />
            <Field type='text' name='year' label='to' component={this.inputField} />
            {/* <Field>
              <p>Metal</p>
              <select>
                <option value="gold">Gold</option>
              </select>
            </Field> */}
            <Field type='text' name='price' label='from' component={this.inputField} />
            <Field type='text' name='country' label='to' component={this.inputField} />
            {/* <Field>
              <p>Quality of the coin</p>
              <select>
                <option value="bu">BU</option>
              </select>
            </Field> */}
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm(
  { form: 'reduxFilter' }
)(connect(null, { /* ??? */ })(Filter));