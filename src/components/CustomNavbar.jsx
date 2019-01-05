import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">LUT</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              <Link to="/LUT">
                <img
                  src="./assets/lut.png"
                  class="img-fluid"
                  alt="Responsive image"
                  height="50px"
                />
              </Link>
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/" to="/">
              <Link to="/Turku">
                <img
                  src="./assets/åbo.png"
                  class="img-fluid"
                  alt="Responsive image"
                  height="50px"
                />
              </Link>
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/" to="/">
              <Link to="/Espoo">
                <img
                  src="./assets/Aalto-yliopiston_logo.svg.png"
                  class="img-fluid"
                  alt="Responsive image"
                  height="50px"
                />
              </Link>
            </NavItem>

            <NavItem eventKey={4} componentClass={Link} href="/" to="/">
              <Link to="/Oulu">
                <img
                  src="./assets/oulufinal.png"
                  class="img-fluid"
                  alt="Responsive image"
                  height="50px"
                />
              </Link>
            </NavItem>

            <NavItem eventKey={5} componentClass={Link} href="/" to="/">
              <Link to="/Tampere">
                <img
                  src="./assets/tampere.png"
                  class="img-fluid"
                  alt="Responsive image"
                  height="50px"
                />
              </Link>
            </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/" to="/">
              <Link to="/Vaasa">
                <img
                  src="./assets/vaasa.png"
                  class="img-fluid"
                  alt="Responsive image"
                  height="50px"
                />
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
