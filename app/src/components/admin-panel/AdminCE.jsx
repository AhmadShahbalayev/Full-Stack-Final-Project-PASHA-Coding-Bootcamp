import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class AdminCE extends React.Component {
  selectField = ({ label, input, meta: { touched, error, warning } }) => {
    return (
      <div>
        <label>{label}</label>
        <select {...input}>
          <option hidden></option>
          <option>memorial</option>
          <option>invested</option>
          <option>exclusive</option>
        </select>
      </div>
    )
  }
  fileField = ({ label, input, meta: { touched, error, warning } }) => {
    delete input.value
    return (
      <div>
        <label>{label}</label>
        <input type='file' {...input}></input>
      </div>
    )
  }
  textAreaField = ({ label, input, meta: { touched, error, warning } }) => {
    return (
      <div className='textar'>
        <label>{label}</label>
        <textarea className='textarea' rows='5' cols='50' {...input}></textarea>
      </div>
    )
  }
  inputField = ({ label, input, meta: { touched, error, warning } }) => {
    return (
      <div>
        <label>{label}</label>
        <input type='text' {...input}></input>
      </div>
    )
  }
  render = () => {
    return (
      <form className='admin-panel' onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <h1 className='admin-header'>Admin panel</h1>
        <div className='admin-ce-grid'>
          <Field name='name' label='Coin name' component={this.inputField} />
          <Field name='shortDescription' label='Short description' component={this.textAreaField} />
          <Field name='obverseLink' label='Download the averse' component={this.fileField} />
          <Field name='value' label='Face value' component={this.inputField} />
          <Field name='reverseLink' label='Download the reverse' component={this.fileField} />
          <Field name='year' label='Year of issue' component={this.inputField} />
          <Field name='fullDescription' label='Long description' component={this.textAreaField} />
          <Field name='coinType' label='Type of coin' component={this.selectField} />
          <Field name='price' label='Price' component={this.inputField} />
          <div className='btns-field'>
            <button type='submit' className='login-btn'>Save</button>
            <Link className='cancel-btn' to='/admin/panel'>Cancel</Link>
          </div>
          <Field name='country' label='Country' component={this.inputField} />
          <Field name='quality' label='Quality of the coin' component={this.inputField} />
          <Field name='metal' label='Metal' component={this.inputField} />
          <Field name='weight' label='Weight' component={this.inputField} />
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'reduxAdminCE' })(AdminCE);