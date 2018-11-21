import React from "react";
import { Alert } from "reactstrap";

class AlertComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
    this.props.onDismiss();
  }

  render() {
    return (
      <Alert
        color="info"
        isOpen={this.state.visible}
        toggle={this.onDismiss}
        style={{
          position: "absolute",
          marginLeft: 400,
          marginTop: 39,
          zIndex: 10
        }}
      >
        Please upload file having extensions .csv|.xlsx|.xls only
      </Alert>
    );
  }
}

export default AlertComp;
