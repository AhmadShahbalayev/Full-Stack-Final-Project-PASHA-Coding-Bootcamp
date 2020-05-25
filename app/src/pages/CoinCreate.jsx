import React from 'react';
import { connect } from 'react-redux';

// Tools:
import { createCoin } from '../redux/actions';

// Components:
import CreateAndEditForm from '../components/CreateAndEditForm';

class CoinCreate extends React.Component {
  onSubmit = (values) => {
    this.props.createCoin(values);
  }
  render = () => {
    return (
      <div>
        <CreateAndEditForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createCoin })( CoinCreate );