import React, { useState, useEffect } from 'react';
import '../styles/Cartpage.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cartpage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('cartCount', updatedCart.length);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <Container className="mt-5">
      {cart.length > 0 ? (
        <Row>
          {cart.map((product, index) => (
            <Col key={index} md={4}>
              <Card className="mb-4 cartproduct">
                <Card.Img variant="top" src={product.image_url} alt={product.name} style={{ height: 190, width:150 }} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Button variant="dark" className='remove-button' onClick={() => handleRemoveFromCart(index)}>
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <h4>Your cart is empty!!!</h4>
      )}
    </Container>
  );
};

export default Cartpage;
