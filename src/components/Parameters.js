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
import "../styles/parameters.css";

class JumbotronParameters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      networkSize: "Calculate optimal network size automatically",
      numOfRBF: 2,
      centers: "Set random data points as centers",
      spread: "Use equal spread",
      dropdownOpen: false,
      dropdownAvailable: false,
      dropdownNumber: 2
    };

    this.calculate = this.calculate.bind(this);
    this.setNetwork = this.setNetwork.bind(this);
    this.setCenters = this.setCenters.bind(this);
    this.setSpread = this.setSpread.bind(this);
    this.makeNumbers = this.makeNumbers.bind(this);
    this.setNumber = this.setNumber.bind(this);

    this.toggle = this.toggle.bind(this);
  }

  calculate() {
    console.log(this.state);
  }

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
          className="dropdownItem"
          key={i}
          style={{ color: "white" }}
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
        <Jumbotron
          fluid
          style={{
            marginTop: 30,
            height: 600,
            borderRadius: 10,
            backgroundColor: "#094771",
            color: "white"
          }}
        >
          <Container style={{ marginTop: -60 }}>
            <Table>
              <thead>
                <tr>
                  <th style={{ borderTop: "none" }}>
                    <h1>Parameters</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ height: 160 }}>
                    <h3>Network size</h3>
                    <Form>
                      <RadioBtns
                        first="Calculate optimal network size automatically"
                        second="Manually set network size"
                        block="1"
                        handler={this.setNetwork}
                      />
                    </Form>

                    <Dropdown
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggle}
                      style={{ marginLeft: 250, marginTop: -30 }}
                    >
                      <DropdownToggle
                        caret
                        disabled={!this.state.dropdownAvailable}
                        style={{
                          minWidth: 70,
                          backgroundColor: "#17A2B8",
                          fontWeight: "bold"
                        }}
                      >
                        {this.state.dropdownNumber}
                      </DropdownToggle>
                      <DropdownMenu
                        modifiers={{
                          setMaxHeight: {
                            enabled: true,
                            order: 890,
                            fn: data => {
                              return {
                                ...data,
                                styles: {
                                  ...data.styles,
                                  overflow: "auto",
                                  maxHeight: 100,
                                  minWidth: 70,
                                  maxWidth: 70,
                                  backgroundColor: "#17A2B8"
                                }
                              };
                            }
                          }
                        }}
                      >
                        {this.makeNumbers()}
                      </DropdownMenu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <td style={{ height: 160 }}>
                    <h3>Center locations</h3>
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
                  <td style={{ height: 160 }}>
                    <h3>Spread</h3>
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
              color="info"
              block
              style={{ marginTop: -35 }}
              onClick={this.calculate}
            >
              Train and test
            </Button>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default JumbotronParameters;
