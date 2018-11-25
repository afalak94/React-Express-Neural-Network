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

  //display alert msg when user tries to load invalid file type
  render() {
    return (
      <Alert
        className="alert__info"
        color="info"
        isOpen={this.state.visible}
        toggle={this.onDismiss}
        style={{
          zIndex: 10
        }}
      >
        Please upload file having extensions .csv|.xlsx|.xls only
      </Alert>
    );
  }
}

export default AlertComp;
