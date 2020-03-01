import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBarBootstrap = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="border-bottom">
        <NavbarBrand href="/">3Alam Rakmy</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
                <NavItem>
                    <Link className="nav-link" to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/about">About</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/users">Users</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </NavItem>
           
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarBootstrap;