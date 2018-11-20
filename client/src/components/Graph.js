import React, { Component } from "react";
import graph3 from "../images/graph3.png";

class Graph extends Component {
  render() {
    return (
      <div style={{ marginTop: 125, marginLeft: 50 }}>
        <img
          style={{ borderRadius: 10 }}
          src={graph3}
          className="img-fluid"
          alt="Responsiveimg"
        />
      </div>
    );
  }
}

export default Graph;
