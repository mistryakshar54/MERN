import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Header.scss';
import { LinkContainer } from "react-router-bootstrap";
import MiniCartComponent from '../../MiniCart/MiniCart';
import AuthComponent from '../../AuthComponent/AuthComponent';

const AppHeader = ( props )=>{

    return (
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Link> Shoppie</Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav><AuthComponent /></Nav>
          <Nav>
            <LinkContainer to="/checkout">
              <Nav.Link>Checkout</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <MiniCartComponent />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default AppHeader;