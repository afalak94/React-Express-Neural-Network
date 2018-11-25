import React, { Component } from "react";
import graph3 from "../images/graph3.png";

class Graph extends Component {
  render() {
    return (
      <div className="graph--margin">
        <img
          id="graph"
          src={graph3}
          className="img-fluid graph__image"
          alt="Responsiveimg"
        />
      </div>
    );
  }
}

export default Graph;
