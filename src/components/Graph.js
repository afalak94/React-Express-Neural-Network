import React, { Component } from "react";
import graph2 from "../images/graph2.png";

class Graph extends Component {
  render() {
    return (
      <div style={{ marginTop: 125, marginLeft: 50 }}>
        <img
          style={{ borderRadius: 10 }}
          src={graph2}
          className="img-fluid"
          alt="Responsiveimg"
        />
      </div>
    );
  }
}

export default Graph;
