import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Table,
  Form,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import RadioBtns from "./Radios";
import noGraph from "../images//noGraph.png";
import Graph from "../images//graph3.png";

class Parameters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      networkSize: "Calculate optimal network size automatically",
      numOfRBF: 2,
      centers: "Set random data points as centers",
      spread: "Use equal spread",
      dropdownOpen: false,
      dropdownAvailable: false,
      dropdownNumber: 2,
      responseToPost: ""
    };

    this.calculate = this.calculate.bind(this);
    this.setNetwork = this.setNetwork.bind(this);
    this.setCenters = this.setCenters.bind(this);
    this.setSpread = this.setSpread.bind(this);
    this.makeNumbers = this.makeNumbers.bind(this);
    this.setNumber = this.setNumber.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  calculate = async e => {
    //set textarea and graph image to default
    document.getElementById("TextData").value = "Calculating...";
    document.querySelector("img").src = Graph;

    //collect all the data into a single object
    const allData = [
      this.state.networkSize,
      this.state.numOfRBF,
      this.state.centers,
      this.state.spread,
      this.props.data
    ];
    //console.log(allData);

    //fetch the neural network calculations from the backend
    const response = await fetch("/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ allData })
    });
    const body = await response.json();
    this.setState({ responseToPost: body });
    console.log(this.state.responseToPost);

    //fill textarea with results
    let size = this.state.responseToPost.length;
    document.getElementById("TextData").value = "";
    for (let i = 0; i < size; i++) {
      document.getElementById("TextData").value +=
        this.state.responseToPost[i] + "\n";
    }

    //fetching the generated graph from the backend if user chose first option
    if (
      this.state.networkSize === "Calculate optimal network size automatically"
    ) {
      var url = "http://localhost:5000/file";
      var options = {
        method: "GET",
        mode: "cors",
        cache: "default"
      };
      var request = new Request(url);

      fetch(request, options).then(response => {
        response.arrayBuffer().then(buffer => {
          var base64Flag = "data:image/png;base64,";
          var imageStr = arrayBufferToBase64(buffer);

          document.querySelector("img").src = base64Flag + imageStr;
        });
      });

      function arrayBufferToBase64(buffer) {
        var binary = "";
        var bytes = [].slice.call(new Uint8Array(buffer));

        bytes.forEach(b => (binary += String.fromCharCode(b)));

        return window.btoa(binary);
      }
    } else {
      document.querySelector("img").src = noGraph;
    }
  };

  //unlock dropdown when user clicks option to manually set network size
  setNetwork = e => {
    const radioValue = e.target.value;
    if (radioValue === "Manually set network size") {
      this.setState({ dropdownAvailable: true });
    } else {
      this.setState({ dropdownAvailable: false });
    }

    this.setState({ networkSize: radioValue }, function() {
      //console.log(this.state);
    });
  };

  setCenters = e => {
    const radioValue = e.target.value;
    this.setState({ centers: radioValue }, function() {
      //console.log(this.state);
    });
  };

  setSpread = e => {
    const radioValue = e.target.value;
    this.setState({ spread: radioValue }, function() {
      //console.log(this.state);
    });
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  //renders numbers from 2 to 20 inside dropdown menu
  makeNumbers() {
    let children = [];
    for (let i = 2; i < 21; i++) {
      children.push(
        <DropdownItem
          className="jumbotron__dropdownItem"
          key={i}
          onClick={e => {
            this.setNumber(e, i);
          }}
        >
          {i}
        </DropdownItem>
      );
    }
    return children;
  }

  //Sets the chosen number for dropdown toggle text
  setNumber(event, i) {
    this.setState({
      dropdownNumber: event.currentTarget.textContent,
      numOfRBF: i
    });
  }

  render() {
    return (
      <div>
        <Jumbotron fluid className="jumbotron--color">
          <Container style={{ marginTop: -60 }}>
            <Table>
              <thead>
                <tr>
                  <th className="jumbotron__header--border">
                    <h1 className="jumbotron__title--font">Parameters</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="jumbotron__table--height">
                    <h3 className="jumbotron__titles">Network size</h3>
                    <Form>
                      <RadioBtns
                        first="Calculate optimal network size automatically"
                        second="Manually set network size"
                        block="1"
                        handler={this.setNetwork}
                      />
                    </Form>

                    <Dropdown
                      className="jumbotron__dropdown"
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggle}
                    >
                      <DropdownToggle
                        className="jumbotron__dropdown-toggle"
                        caret
                        disabled={!this.state.dropdownAvailable}
                      >
                        {this.state.dropdownNumber}
                      </DropdownToggle>
                      <DropdownMenu
                        className="jumbotron__dropdown-menu"
                        modifiers={{
                          setMaxHeight: {
                            enabled: true,
                            order: 890
                          }
                        }}
                      >
                        {this.makeNumbers()}
                      </DropdownMenu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td className="jumbotron__table--height">
                    <h3 className="jumbotron__titles">Center locations</h3>
                    <Form>
                      <RadioBtns
                        first="Set random data points as centers"
                        second="Use k-means clustering"
                        block="2"
                        handler={this.setCenters}
                      />
                    </Form>
                  </td>
                </tr>
                <tr>
                  <td className="jumbotron__table--height">
                    <h3 className="jumbotron__titles">Spread</h3>
                    <Form>
                      <RadioBtns
                        first="Use equal spread"
                        second="Use p-nearest neighbour heuristics"
                        block="3"
                        handler={this.setSpread}
                      />
                    </Form>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button
              className="jumbotron__calculateBtn"
              color="info"
              block
              onClick={this.calculate}
              disabled={this.props.data === undefined ? true : false}
            >
              Train and test
            </Button>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Parameters;
