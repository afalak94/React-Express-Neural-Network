import React, { Component } from "react";
import { Jumbotron, Container, Table, Form, Button } from "reactstrap";
import RadioBtns from "./Radios";

class JumbotronParameters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      networkSize: "Calculate optimal network size automatically",
      numOfRBF: "3",
      centers: "Set random data points as centers",
      spread: "Use equal spread"
    };

    this.setNetwork = this.setNetwork.bind(this);
    this.calculate = this.calculate.bind(this);
    this.setCenters = this.setCenters.bind(this);
    this.setSpread = this.setSpread.bind(this);
  }

  calculate() {
    console.log(this.state);
  }

  setNetwork = e => {
    const radioValue = e.target.value;
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

  render() {
    return (
      <div>
        <Jumbotron
          fluid
          style={{
            marginTop: 50,
            height: 600,
            borderRadius: 10,
            backgroundColor: "#094771",
            color: "white"
          }}
        >
          <Container style={{ marginTop: -50 }}>
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
              style={{ marginTop: -40 }}
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
