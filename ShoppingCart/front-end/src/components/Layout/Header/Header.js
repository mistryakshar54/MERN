import React , {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Header.scss';
import { LinkContainer } from "react-router-bootstrap";
import MiniCartComponent from '../../MiniCart/MiniCart';
import AuthComponent from '../../AuthComponent/AuthComponent';
import { connect } from "react-redux";
import * as CoreActions from '../../../store/actioncreators/CoreActionCreators';
import { withRouter } from "react-router-dom";

class AppHeader extends Component{

    componentDidMount(){
      this.props.onSetHistoryPropsHandler(this.props.history);
    } 

    render(){
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
}
const mapStateToProps = state => {
  return {
    
  };
};
const mapDispatchToProps = ( dispatch ) => {
    return{
      onSetHistoryPropsHandler : (historyData) => { dispatch( CoreActions.setUrl( historyData ) ) } 
    }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(AppHeader));