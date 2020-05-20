import React from 'react';
import AdminCE from './AdminCE';
import { createCoin } from '../../redux/actions';
import { connect } from 'react-redux';

class CoinCreate extends React.Component {
  onSubmit = (values) => {
    this.props.createCoin(values);
  }
  render = () => {
    return (
      <div>
        <AdminCE onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createCoin })( CoinCreate );