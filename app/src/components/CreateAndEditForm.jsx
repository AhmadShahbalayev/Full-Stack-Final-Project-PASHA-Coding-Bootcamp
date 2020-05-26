// Libraries:
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Global variables: 
const required = value => value ? undefined : 'Required field!';

class CreateAndEditForm extends React.Component {
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
        {touched && error && <p className='error'>Required!</p>}
      </div>
    )
  }
  fileField = ({ label, input, meta: { touched, error, warning } }) => {
    delete input.value
    return (
      <div>
        <label>{label}</label>
        <input type='file' {...input}></input>
        {error && <p className='error'>Required!</p>}
      </div>
    )
  }
  textAreaField = ({ label, input, meta: { touched, error, warning } }) => {
    return (
      <div className='textar'>
        <label>{label}</label>
        <textarea className='textarea' rows='5' cols='50' {...input}></textarea>
        {touched && error && <p className='error'>Required!</p>}
      </div>
    )
  }
  inputField = ({ label, input, meta: { touched, error, warning } }) => {
    return (
      <div>
        <label>{label}</label>
        <input type='text' {...input}></input>
        {touched && error && <p className='error'>Required!</p>}
      </div>
    )
  }
  render = () => {
    if (this.props.status) {
      return (
        <form className='admin-panel' onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
          <h1 className='admin-header'>Admin panel</h1>
          <div className='admin-ce-grid'>
            <Field name='name' label='Coin name' component={this.inputField} validate={required} />
            <Field name='shortDescription' label='Short description' component={this.textAreaField} validate={required} />
            <Field name='obverseLink' label='Download the averse' component={this.fileField} validate={required} />
            <Field name='value' label='Face value' component={this.inputField} validate={required} />
            <Field name='reverseLink' label='Download the reverse' component={this.fileField} validate={required} />
            <Field name='year' label='Year of issue' component={this.inputField} validate={required} />
            <Field name='fullDescription' label='Long description' component={this.textAreaField} validate={required} />
            <Field name='coinType' label='Type of coin' component={this.selectField} validate={required} />
            <Field name='price' label='Price' component={this.inputField} validate={required} />
            <div className='btns-field'>
              <button type='submit' className='login-btn'>Save</button>
              <Link className='cancel-btn' to='/admin/panel'>Cancel</Link>
            </div>
            <Field name='country' label='Country' component={this.inputField} validate={required} />
            <Field name='quality' label='Quality of the coin' component={this.inputField} validate={required} />
            <Field name='metal' label='Metal' component={this.inputField} validate={required} />
            <Field name='weight' label='Weight' component={this.inputField} validate={required} />
          </div>
        </form>
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
    status: state.reducer.status
  }
}

export default reduxForm({ form: 'CreateAndEditForm', enableReinitialize: true })(connect(mapStateToProps, null)(CreateAndEditForm));