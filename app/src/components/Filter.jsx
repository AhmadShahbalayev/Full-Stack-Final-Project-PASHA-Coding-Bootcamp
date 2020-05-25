import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { getSelectValues } from '../redux/actions';

class Filter extends React.Component {
  componentDidMount = () => {
    this.props.getSelectValues();
  }
  countryFiled = ({ label, input }) => {
    let uniqueCountries = [...new Set(this.props.countries)];
    return (
      <div>
        <label>{label}</label>
        <select {...input}>
          <option hidden></option>
          {uniqueCountries.map(item => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select>
      </div>
    )
  }
  qualityFiled = ({ label, input }) => {
    let uniqueQualities = [...new Set(this.props.qualities)];
    return (
      <div>
        <label>{label}</label>
        <select {...input}>
        <option hidden></option>
        {uniqueQualities.map(item => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select>
      </div>
    )
  }
  metalField = ({ label, input }) => {
    let uniqueMetals = [...new Set(this.props.metals)];
    return (
      <div>
        <label>{label}</label>
        <select {...input}>
        <option hidden></option>
        {uniqueMetals.map(item => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select>
      </div>
    )
  }
  numberField = ({ label, input }) => {
    return (
      <div>
        <label>{label}</label>
        <input style={{padding: '10px'}} type='number' {...input}></input>
      </div>
    )
  }
  render = () => {
    return (
      <div>
        <form>
          <div className='filter-grid'>
            <Field label='Issuing country' name='country' component={this.countryFiled} />
            <div className='from-to'>
              <p>Year of issue</p>
              <Field label='from' name='yearFrom' component={this.numberField} />
              <Field label='to' name='yearTo' component={this.numberField} />
            </div>
            <Field label='Metal' name='metal' component={this.metalField} />
            <div className='from-to'>
              <p>Price</p>
              <Field label='from' name='priceFrom' component={this.numberField} />
              <Field label='to' name='priceTo' component={this.numberField} />
            </div>
            <Field label='Quality of the coin' name='quality' component={this.qualityFiled} />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allCoins: state.reducer.allCoins,
    countries: state.reducer.countries,
    qualities: state.reducer.qualities,
    metals: state.reducer.metals,
  }
}

export default reduxForm({ form: 'reduxFilter' })(connect(mapStateToProps, { getSelectValues })(Filter));