import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { adminCE } from '../../redux/actions';

class AdminCE extends React.Component {
  renderField = (field) => {
    return (
      <div>
        <label>{field.label}</label>
        <input type={field.type} {...field.input} />
      </div>
    )
  }
  onSubmit = (values) => {
    this.props.adminCE(values);
  }
  render = () => {
    return (
      <form className='admin-panel'onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <h1 className='admin-header'>Admin panel</h1>
        <div className='admin-ce-grid'>
          <Field type='text' name='name' label='Coin name' component={this.renderField} />
          <Field type='text' name='value' label='Face value' component={this.renderField} />
          <Field type='text' name='year' label='Year of issue' component={this.renderField} />
          <Field type='text' name='price' label='Price' component={this.renderField} />
          <Field type='text' name='country' label='Country' component={this.renderField} />
          <Field type='text' name='metal' label='Metal' component={this.renderField} />
          <Field type='textarea' name='shortDescription' label='Short description' component={this.renderField} />
          <Field type='textarea' name='fullDescription' label='Long description' component={this.renderField} />
          <Field type='text' name='quality' label='Quality of the coin' component={this.renderField} />
          <Field type='text' name='weight' label='Weight' component={this.renderField} />
          <Field type='file' name='obverseLink' label='Download the averse' component={this.renderField} />
          <Field type='file' name='reverseLink' label='Download the reverse' component={this.renderField} />
          <Field type='text' name='сoinType' label='Type of coin' component={this.renderField} />
          <button type='submit'>Save</button>
          <button>Cancel</button>
        </div>
      </form>
    );
  }
}

export default reduxForm(
  { form: 'reduxAdminCE' }
)(connect(null, { adminCE })(AdminCE));