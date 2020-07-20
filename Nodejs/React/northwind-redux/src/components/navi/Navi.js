import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import { Link } from 'react-router-dom';

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/"><h3>Main Page</h3></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            <CartSummary></CartSummary>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;