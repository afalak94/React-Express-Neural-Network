import React, { Component } from "react";
import { Button } from "reactstrap";
import Octicon from "react-octicon";

export default class LoadBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    let text = "test";
    if (this.state.toggled && text) {
      text = "Data set loaded";
    } else {
      text = "Load Data Set";
    }
    return (
      <Button
        color="info"
        size="lg"
        className="loadDatasetBtn"
        onClick={this.handleClick}
      >
        {text + " "}
        <Octicon mega spin name="gear" style={{ marginLeft: 5 }} />
      </Button>
    );
  }
}
