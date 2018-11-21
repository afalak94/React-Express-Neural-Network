import React, { Component } from "react";
import Octicon from "react-octicon";
import { Input, Alert } from "reactstrap";
import "../styles/loadBtn.css";

export default class LoadBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false, text: "", csv: undefined };
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
      //check if file is in csv format
      const fileInput = document.getElementById("file");
      const filePath = fileInput.value;
      const allowedExtensions = /(\.csv|\.xlsx|\.xls)$/i;
      if (!allowedExtensions.exec(filePath)) {
        //alert("Please upload file having extensions .csv|.xlsx|.xls only.");
        this.props.onDismiss();
        fileInput.value = "";
        this.setState({ text: "Load data set" });
        return false;
      }

      //file is in acceptable format -> read
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      if (file !== undefined) {
        fileReader.readAsText(file);
      }
    };

    return (
      <label className="loadDatasetBtn">
        <Input
          type="file"
          id="file"
          onChange={e => handleFileChosen(e.target.files[0])}
          accept=".csv"
          pattern="^.+\.(xlsx|xls|csv)$"
        />
        {this.state.csv === undefined
          ? (this.state.text = "Load data set")
          : (this.state.text = "Data set loaded")}
        <Octicon mega spin name="gear" style={{ marginLeft: 5 }} />
      </label>
    );
  }
}
