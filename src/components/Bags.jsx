import React, { useEffect, useState } from 'react';
import '../styles/Bags.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Bags = () => {
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
        <h3>Bags</h3>
        <p>Quality is in our name. Find signature bags that carry everything you need</p>
      </Container>
      <Container className="bags">
        <Row>
          <Col className="text-center pt-5">
            <p><b>Shop by Category</b></p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={6} sm={4} md={3}>
            <img src="https://herschel.com/content/dam/herschel/products/11390/11390-00001-OS_01.jpg.sthumbnails.330.330.webp" alt="" className="img-fluid" />
            <p>Backpacks</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <img src="https://herschel.com/content/dam/herschel/products/11396/11396-00001-OS_01.jpg.sthumbnails.330.330.webp" alt="" className="img-fluid" />
            <p>Duffles</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <img src="https://herschel.com/content/dam/herschel/products/11409/11409-00001-OS_01.jpg.sthumbnails.330.330.webp" alt="" className="img-fluid" />
            <p>Hip Packs</p>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <img src="https://herschel.com/content/dam/herschel/lifestyle/2022-s1/updated-nav/Bags-Totes.jpg.sthumbnails.330.330.webp" alt="" className="img-fluid" />
            <p>Totes</p>
          </Col>
        </Row>
      </Container>
      <p className="mt-5 ms-4" style={{ fontSize: 13 }}><b>All Bags | 47 items</b></p>
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

export default Bags;
