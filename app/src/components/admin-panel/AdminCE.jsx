import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class AdminCE extends React.Component {
  render = () => {
    const selectField = ({ label, input, meta: { touched, error, warning } }) => {
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
    const fileField = ({ label, input, type, meta: { touched, error, warning } }) => {
      delete input.value
      return (
        <div>
          <label>{label}</label>
          <input type={type} {...input}></input>
        </div>
      )
    }
    const textAreaField = ({ label, input, meta: { touched, error, warning } }) => {
      return (
        <div className='textar'>
          <label>{label}</label>
          <textarea className='textarea' rows='5' cols='50' {...input}></textarea>
        </div>
      )
    }
    const inputField = ({ label, input, type, meta: { touched, error, warning } }) => {
      return (
        <div>
          <label>{label}</label>
          <input type={type} {...input}></input>
        </div>
      )
    }
    return (
      <form className='admin-panel' onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <h1 className='admin-header'>Admin panel</h1>
        <div className='admin-ce-grid'>
          <Field type='text' name='name' label='Coin name' component={inputField} />
          <Field name='shortDescription' label='Short description' component={textAreaField} />
          <Field type='file' name='obverseLink' label='Download the averse' component={fileField} />
          <Field type='text' name='value' label='Face value' component={inputField} />
          <Field type='file' name='reverseLink' label='Download the reverse' component={fileField} />
          <Field type='text' name='year' label='Year of issue' component={inputField} />
          <Field name='fullDescription' label='Long description' component={textAreaField} />
          <Field type='text' name='coinType' label='Type of coin' component={selectField} />
          <Field type='text' name='price' label='Price' component={inputField} />
          <div className='btns-field'>
            <button type='submit' className='login-btn'>Save</button>
            <Link className='cancel-btn' to='/admin/panel'>Cancel</Link>
          </div>
          <Field type='text' name='country' label='Country' component={inputField} />
          <Field type='text' name='quality' label='Quality of the coin' component={inputField} />
          <Field type='text' name='metal' label='Metal' component={inputField} />
          <Field type='text' name='weight' label='Weight' component={inputField} />
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'reduxAdminCE' })(AdminCE);