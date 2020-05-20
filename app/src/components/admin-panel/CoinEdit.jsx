import React from 'react';
import { connect } from 'react-redux';
import { getCoinById, updateCoin } from '../../redux/actions';
import AdminCE from './AdminCE';

class CoinEdit extends React.Component {
  componentDidMount = () => {
    let id = this.props.match.params.id;
    this.props.getCoinById(id)
  }
  onSubmit = (values) => {
    let id = this.props.match.params.id;
    this.props.updateCoin(values, id);
  }
  render = () => {
    if (this.props.coin) {
      return (
        <div>
          <AdminCE
            initialValues={this.props.coin}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    coin: state.reducer.coin
  }
}

export default connect(mapStateToProps, { getCoinById, updateCoin })(CoinEdit);