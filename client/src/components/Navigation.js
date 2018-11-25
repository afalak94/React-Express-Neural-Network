import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
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
        <Navbar
          light
          expand="md"
          style={{ backgroundColor: "#094771", fontFamily: "Chakra Petch" }}
        >
          <NavbarBrand
            href="/"
            style={{
              fontSize: 24,
              marginLeft: 136,
              color: "white",
              fontFamily: "Chakra Petch"
            }}
          >
            Radial Basis Function Neural Network
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{ marginRight: 136 }}>
              <NavItem>
                <ModalExample buttonLabel="Quick Start" />
              </NavItem>

              <NavItem>
                <ModalExample buttonLabel="About" />
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://github.com/afalak94/React-Express-Neural-Network"
                  target="_blank"
                  style={{ color: "white", fontSize: 18 }}
                >
                  {" "}
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
