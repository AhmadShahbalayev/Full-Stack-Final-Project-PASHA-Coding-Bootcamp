import React from 'react';
import { connect } from 'react-redux';
import { getCoinById, updateCoin } from '../../redux/actions';
import AdminCE from './AdminCE';

class CoinEdit extends React.Component {
  UNSAFE_componentWillMount = () => {
    let id = this.props.match.params.id;
    this.props.getCoinById(id)
  }
  onSubmit = (values) => {
    let id = this.props.match.params.id;
    const { obverseLink, reverseLink } = this.props.coin;
    this.props.updateCoin(values, id, obverseLink, reverseLink);
  }
  render = () => {
    const id = this.props.match.params.id;
    const nextID = this.props.coin.id;
    if (id == nextID) {
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