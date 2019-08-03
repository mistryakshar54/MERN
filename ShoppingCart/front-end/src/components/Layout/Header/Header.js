import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Header.scss';
import { LinkContainer } from "react-router-bootstrap";

import MiniCartComponent from '../../MiniCart/MiniCart';
import {authProvider ,firebaseAuth} from '../../../firebaseConfig/FirebaseConfig';

const AppHeader = ( props )=>{

  const openLoginPopup = () => {
      firebaseAuth()
        .signInWithPopup(authProvider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          debugger;
          console.log("Tokern" , token);
          console.log("User", user);
          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          debugger;
          // ...
        });
  }


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
          <Nav onClick={openLoginPopup}>Login</Nav>
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