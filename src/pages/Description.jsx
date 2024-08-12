import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Description.css';
import { MdStar } from "react-icons/md";
import { Button, Card, Col, Row } from 'react-bootstrap';

const Description = () => {
    const location = useLocation();
    const { product } = location.state || {};

    const handleAddToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.title} has been added to the cart`);
    };

    return (
        <div className='container mt-5'>
            <Row>
                {product ? (
                    <>
                        <Col md={6}>
                            <img src={product.image_url} alt={product.name} className="img-fluid" style={{ height: 'auto', maxHeight: '500px' }} />
                        </Col>
                        <Col md={6} className='details'>
                            <Card className='p-4'>
                                <Card.Body>
                                    <Card.Title className='h4'>{product.title}</Card.Title>
                                    <Card.Text className='h5'>{product.price}</Card.Text>
                                    <Card.Text>
                                        Reviews
                                        {[...Array(4)].map((_, index) => (
                                            <MdStar key={index} className='fs-5 ms-2 mb-1' />
                                        ))}
                                        160 Reviews
                                    </Card.Text>
                                    <Card.Text>Compare Classic Backpacks</Card.Text>
                                    <Card.Text>Available in different sizes & feature sets. Compare Sizes</Card.Text>
                                    <Button variant="dark" onClick={handleAddToCart} className='w-100'>
                                        Add to Cart - {product.price}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </>
                ) : (
                    <p>No product details available.</p>
                )}
            </Row>
            <br /><hr />
        </div>
    );
};

export default Description;
