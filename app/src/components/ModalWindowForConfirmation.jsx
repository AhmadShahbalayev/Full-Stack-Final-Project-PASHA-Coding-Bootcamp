import React from 'react';
import { connect } from 'react-redux';

// Tools:
import { deleteCoin } from '../redux/actions';

class ModalWindowForConfirmation extends React.Component {
  deleteCoin = (e) => {
    this.props.deleteCoin(e.target.value);
    this.props.showOrHide();
  }
  render = () => {
    return (
      <div className='ghost'>
        <div className='modal-window'>
          <p>Are you sure that you want to delete the coin?</p>
          <div className='modal-btn-box'>
            <button value={this.props.value} onClick={this.deleteCoin} className='login-btn'>Yes</button>
            <button onClick={this.props.showOrHide} className='login-btn'>No</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteCoin })(ModalWindowForConfirmation);