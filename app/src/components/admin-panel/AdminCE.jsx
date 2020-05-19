import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { adminCE } from '../../redux/actions';
import { Link } from 'react-router-dom';

class AdminCE extends React.Component {
  fileField = ({ label, input, type, meta: { touched, error, warning } }) => {
    delete input.value
    return (
      <div>
        <label>{label}</label>
        <input type={type} {...input}></input>
      </div>
    )
  }
  textAreaField = ({ label, input, meta: { touched, error, warning } }) => {
    delete input.value
    return (
      <div className='textar'>
        <label>{label}</label>
        <textarea className='textarea' rows='5' cols='50' {...input}></textarea>
      </div>
    )
  }
  inputField = ({ label, input, type, meta: { touched, error, warning } }) => {
    delete input.value
    return (
      <div>
        <label>{label}</label>
        <input type={type} {...input}></input>
      </div>
    )
  }
  onSubmit = (values) => {
    this.props.adminCE(values);
  }
  render = () => {
    return (
      <form className='admin-panel' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <h1 className='admin-header'>Admin panel</h1>
        <div className='admin-ce-grid'>
          <Field type='text' name='name' label='Coin name' component={this.inputField} />
          <Field name='shortDescription' label='Short description' component={this.textAreaField} />
          <Field type='file' name='obverseLink' label='Download the averse' component={this.fileField} />
          <Field type='text' name='value' label='Face value' component={this.inputField} />
          <Field type='file' name='reverseLink' label='Download the reverse' component={this.fileField} />
          <Field type='text' name='year' label='Year of issue' component={this.inputField} />
          <Field name='fullDescription' label='Long description' component={this.textAreaField} />
          <Field type='text' name='coinType' label='Type of coin' component={this.inputField} />
          <Field type='text' name='price' label='Price' component={this.inputField} />
          <div className='btns-field'>
            <button type='submit' className='login-btn'>Save</button>
            <Link className='cancel-btn' to='/admin/panel'>Cancel</Link>
          </div>
          <Field type='text' name='country' label='Country' component={this.inputField} />
          <Field type='text' name='quality' label='Quality of the coin' component={this.inputField} />
          <Field type='text' name='metal' label='Metal' component={this.inputField} />
          <Field type='text' name='weight' label='Weight' component={this.inputField} />
        </div>
      </form>
    );
  }
}

export default reduxForm(
  { form: 'reduxAdminCE' }
)(connect(null, { adminCE })(AdminCE));