import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink //navbar
} from "reactstrap";
import ModalExample from "./Modal";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" style={{ backgroundColor: "#0083ff" }}>
          <NavbarBrand href="/">
            Radial Basis Function Neural Network
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <ModalExample buttonLabel="Quick Start" />
              </NavItem>

              <NavItem>
                <ModalExample buttonLabel="About" />
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://github.com/reactstrap/reactstrap"
                  style={{ color: "#262626" }}
                >
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
