import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import "./header.css"

class Header extends Component {
  render() {
    return (
       <Navbar expand="md" className="header-navbar">
         <h4 className="header-text"> {this.props.brandName} </h4>
         <Nav className="ml-auto">
           <NavItem>
             <NavLink href="/login/">Login</NavLink>
           </NavItem>
          </Nav>
       </Navbar>
    )
  }
}

export default Header;
