import React, { Component } from "react";
import Octicon from "react-octicon";
import { Input } from "reactstrap";
import ReactFileReader from "react-file-reader";
import "../styles/loadBtn.css";

export default class LoadBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false, csv: "" };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  putContent(fileContent) {
    this.setState({
      content: fileContent
    });
  }

  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
      // Use reader.result
      const fileContent = reader.result;
    };
    reader.readAsText(files[0]);
  };

  handleChange = event => {
    this.setState({
      csv: event.target.files[0]
    });
  };

  render() {
    let text = "test";
    if (this.state.toggled && text) {
      text = "Data set loaded";
    } else {
      text = "Load Data Set";
    }

    return (
      // <div className="reader">
      //   <ReactFileReader
      //     handleFiles={this.handleFiles}
      //     fileTypes={".csv"}
      //     onChange={this.handleChange}
      //   >
      //     <button className="loadDatasetBtn">

      <label className="loadDatasetBtn">
        <Input
          type="file"
          onChange={this.handleChange}
          ref={input => {
            this.filesInput = input;
          }}
        />
        {text + " "}
        <Octicon mega spin name="gear" style={{ marginLeft: 5 }} />
        {console.log(this.state.csv)}
      </label>

      /* </button>
        </ReactFileReader>
        {console.log(this.state.csv)}
      </div> */
    );
  }
}
