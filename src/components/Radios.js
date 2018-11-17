import React, { Component } from "react";
import { CustomInput, FormGroup, Label } from "reactstrap";

class RadioBtns extends Component {
  render() {
    return (
      <FormGroup check>
        <Label for="exampleCheckbox" />
        <div onChange={this.props.handler}>
          <CustomInput
            type="radio"
            id={this.props.block + "1"}
            name={this.props.block}
            label={this.props.first}
            defaultChecked
            value={this.props.first}
            onChange={this.props.handler}
          />
          <CustomInput
            type="radio"
            id={this.props.block + "2"}
            name={this.props.block}
            label={this.props.second}
            value={this.props.second}
            onChange={this.props.handler}
          />
        </div>
      </FormGroup>
    );
  }
}

export default RadioBtns;
