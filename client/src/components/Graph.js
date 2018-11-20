import React, { Component } from "react";
import graph3 from "../images/graph3.png";

class Graph extends Component {
  render() {
    return (
      <div style={{ marginTop: 125, marginLeft: 50 }}>
        <img
          id="graph"
          style={{
            borderRadius: 10,
            width: 510,
            height: 300
          }}
          src={graph3}
          className="img-fluid"
          alt="Responsiveimg"
        />
      </div>
    );
  }
}

export default Graph;
