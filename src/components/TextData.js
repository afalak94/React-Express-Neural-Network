import React, { Component } from "react";
import { Input } from "reactstrap";

class TextData extends Component {
  render() {
    return (
      <Input
        style={{
          resize: "none",
          width: 510,
          height: 280,
          marginTop: 25,
          marginLeft: 50,
          borderRadius: 10,
          borderColor: "#094771",
          fontFamily: "arial",
          backgroundColor: "#094771",
          color: "black"
        }}
        type="textarea"
        name="TextData"
        id="TextData"
        placeholder="Network results will be displayed here"
        disabled
      />
    );
  }
}

export default TextData;
