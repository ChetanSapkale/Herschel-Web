import React, { useEffect, useState } from 'react';
import '../styles/Sale.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Sale = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  
  const handleImageClick = (product) => {
    navigate('/description', { state: { product } });
  };

  return (
    <div>
      <div className='image position-relative'>
        <h1 className='sale-title'>Sale</h1>
        <img src="https://herschel.com/content/dam/herschel/lifestyle/2023-s4/bfcm/clp-banners/D-23-S4-Black_Friday-Category_Banner%2003.jpg.sthumbnails.original.webp" alt="Sale Banner" className='img-fluid' />
      </div>
      <div className="container category">
        <Row className="text-center">
          <Col xs={12} className="pt-4">
            <p><b>Shop by Category</b></p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={6} sm={4} md={2} className="mb-3">
            <img src="https://herschel.com/content/dam/herschel/products/11390/11390-00001-OS_01.jpg.sthumbnails.330.330.webp" alt="Shop All" className='img-fluid' />
            <p>Shop All</p>
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3">
            <img src="https://herschel.com/content/dam/herschel/products/11551/11551-00001-OS_01.jpg.sthumbnails.330.330.webp" alt="Bags" className='img-fluid' />
            <p>Bags</p>
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3">
            <img src="https://herschel.com/content/dam/herschel/products/11288/11288-00001-OS_01.jpg.sthumbnails.330.330.webp" alt="Travel" className='img-fluid' />
            <p>Travel</p>
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3">
            <img src="https://herschel.com/content/dam/herschel/products/11546/11546-00001-OS_01.jpg.sthumbnails.330.330.webp" alt="Accessories" className='img-fluid' />
            <p>Accessories</p>
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3">
            <img src="https://herschel.com/content/dam/herschel/products/11383/11383-05881-OS_01.jpg.sthumbnails.330.330.webp" alt="Apparel" className='img-fluid' />
            <p>Apparel</p>
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3">
            <img src="https://herschel.com/content/dam/herschel/products/11576/11576-04735-OS_01.jpg.sthumbnails.330.330.webp" alt="Headwear" className='img-fluid' />
            <p>Headwear</p>
          </Col>
        </Row>
      </div>
      <p className='mt-5 ms-4' style={{fontSize: 13}}><b>Sale | 179 items</b></p>
      <Container>
        <Row className='mt-5'>
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} onClick={() => handleImageClick(product)}>
              <Card className="mb-4">
                <Card.Img variant="top" src={product.image_url} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Sale;
