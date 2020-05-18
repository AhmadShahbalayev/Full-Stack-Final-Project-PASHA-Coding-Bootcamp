import React from 'react';
import { connect } from 'react-redux';
import { getCoinById } from '../../../redux/actions';

class CoinInfo extends React.Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.getCoinById(id);
  }
  render = () => {
    return (
      <div>
        {this.props.coin.name}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coin: state.reducer.coin
  }
}

export default connect(mapStateToProps, { getCoinById })(CoinInfo);