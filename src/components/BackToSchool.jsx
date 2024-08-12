import React, { useEffect, useState } from 'react';
import '../styles/BackToSchool.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

const BackToSchool = () => {
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
      <Container fluid className="ps-4 mt-5">
        <h3>Back to School</h3>
        <p>Essentials for school, backed by our Limited Lifetime Warranty.</p>
      </Container>
      <Container className="category">
        <Row>
          <Col className="text-center pt-4">
            <p><b>Shop by Category</b></p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/products/11390/11390-00001-OS_01.jpg.sthumbnails.330.330.webp" alt="" className="img-fluid" />
            <p>Shop All</p>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/products/11551/11551-00001-OS_01.jpg.sthumbnails.330.330.webp" alt="" className="img-fluid" />
            <p>$75 and Under</p>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/products/11288/11288-00001-OS_01.jpg.sthumbnails.330.330.webp" alt="" className="img-fluid" />
            <p>Large Backpacks</p>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/products/11546/11546-00001-OS_01.jpg.sthumbnails.330.330.webp" alt="" className="img-fluid" />
            <p>Best Sellers</p>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/products/11383/11383-05881-OS_01.jpg.sthumbnails.330.330.webp" alt="" className="img-fluid" />
            <p>Laptop Backpacks</p>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/products/11576/11576-04735-OS_01.jpg.sthumbnails.330.330.webp" alt="" className="img-fluid" />
            <p>Kids Backpacks</p>
          </Col>
        </Row>
      </Container>
      <p className="mt-5 ms-4" style={{ fontSize: 13 }}><b>Back to school | 47 items</b></p>
      <Container>
        <Row className="mt-5">
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

export default BackToSchool;
