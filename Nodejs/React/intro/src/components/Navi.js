import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/">Northwind App</Link></NavbarBrand>
        <NavbarBrand><Link to="/form">Form</Link></NavbarBrand>
        <NavbarBrand><Link to="/form2">Form</Link></NavbarBrand>
        <NavbarBrand><Link to="/github">GitHub</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <CartSummary removeFromCart={props.removeFromCart} cart={props.cart}></CartSummary>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;