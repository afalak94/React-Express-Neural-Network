import React, { Component } from "react";
import Octicon from "react-octicon";
import { Input } from "reactstrap";
import "../styles/loadBtn.css";

export default class LoadBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false, csv: undefined };
  }

  handleClick() {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    let fileReader;

    const handleFileRead = e => {
      const content = fileReader.result;
      //console.log(this.state.csv);
      this.setState({ csv: content });
      this.props.onUpdate(content);
      //console.log(this.state.csv);

      if (this.state.csv !== undefined) {
        this.setState({ toggled: true });
      }
    };

    const handleFileChosen = file => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    };

    let text = "test";
    if (this.state.toggled && text) {
      text = "Data set loaded";
    } else {
      text = "Load Data Set";
    }

    return (
      <label className="loadDatasetBtn">
        <Input
          type="file"
          id="file"
          onChange={e => handleFileChosen(e.target.files[0])}
          //value={this.state.csv}
        />
        {text + " "}
        <Octicon mega spin name="gear" style={{ marginLeft: 5 }} />
      </label>
    );
  }
}
