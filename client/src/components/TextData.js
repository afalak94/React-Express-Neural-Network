import React, { Component } from "react";
import { Input } from "reactstrap";

class TextData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "no data yet"
    };
  }
  //text area for diplaying the results from neural network
  render() {
    return (
      <Input
        type="textarea"
        name="TextData"
        id="TextData"
        className="textarea--styling"
        placeholder="Network results will be displayed here"
        disabled
      />
    );
  }
}

export default TextData;
