import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class OrderConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: 2,
      open: this.props.showMe,
    };
  }

  handleClose() {
    this.setState({ open: false });
    this.props.resetAfterConfirmation();
  }

  render() {
    const actions = [
      <FlatButton
        label="ok"
        primary
        onTouchTap={e => this.handleClose(e)}
      />,
    ];
    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Order #{this.props.orderId} submitted to {this.props.store.name}
        </Dialog>
      </div>
    );
  }
}
