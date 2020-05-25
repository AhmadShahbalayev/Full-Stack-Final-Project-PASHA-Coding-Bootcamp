// Libraries:
import React from 'react';
import { connect } from 'react-redux';

// Tools:
import { getCoinById, updateCoin } from '../redux/actions';

// Components:
import CreateAndEditForm from '../components/CreateAndEditForm';

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
    const id = this.props.match.params.id;
    const nextID = this.props.coin.id;
    if (+id === +nextID) {
      return (
        <div>
          <CreateAndEditForm
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