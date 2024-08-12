import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Collapse } from 'react-bootstrap';
import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import '../styles/Navbar.css';

function CustomNavbar() {
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img 
            src="https://herschel.com/etc/designs/herschel/clientlibs/global/images/logo-black.png" 
            alt="Herschel Logo" 
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Collapse in={isOpen}>
          <div className="navbar-collapse" id="navbarNav">
            <Nav className="me-auto mb-2 mb-lg-0 custom-nav">
              <Nav.Link as={Link} to="/back-to-school" className="custom-link" onClick={handleNavLinkClick}>Back To School</Nav.Link>
              <Nav.Link as={Link} to="/bags" className="custom-link" onClick={handleNavLinkClick}>Bags</Nav.Link>
              <Nav.Link as={Link} to="/travel" className="custom-link" onClick={handleNavLinkClick}>Travel</Nav.Link>
              <Nav.Link as={Link} to="/accessories" className="custom-link" onClick={handleNavLinkClick}>Accessories</Nav.Link>
              <Nav.Link as={Link} to="/apparel" className="custom-link" onClick={handleNavLinkClick}>Apparel</Nav.Link>
              <Nav.Link as={Link} to="/kids" className="custom-link" onClick={handleNavLinkClick}>Kids</Nav.Link>
              <Nav.Link as={Link} to="/sale" className="custom-link" onClick={handleNavLinkClick}>Sale</Nav.Link>
            </Nav>
            <Nav className="custom-icons">
              <Nav.Link as={Link} to="/account" className="custom-link" onClick={handleNavLinkClick}><CiUser /></Nav.Link>
              <Nav.Link as={Link} to="/cart" className="custom-link" onClick={handleNavLinkClick}>
                <MdOutlineShoppingBag />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </Nav.Link>
              <Nav.Link as={Link} to="/search" className="custom-link" onClick={handleNavLinkClick}><CiSearch /></Nav.Link>
              <Nav.Link as={Link} to="/" className="custom-link" onClick={handleNavLinkClick}>
                <img className="flag-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nuK6irk5MbRuNn9PTLSBlzX9J3LvKWOdKN_lLvNiqUuRN6b3HYvSYYXrn6wWEhcR38E&usqp=CAU" alt="Flag Icon" />
              </Nav.Link>
            </Nav>
          </div>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
