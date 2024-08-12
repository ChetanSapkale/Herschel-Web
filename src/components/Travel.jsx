import React, { useEffect, useState } from 'react';
import '../styles/Travel.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Travel = () => {
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
      <div className="banner-img position-relative">
        <h1>Travel</h1>
        <img src="https://herschel.com/content/dam/herschel/lifestyle/2024-s1/campaigns/travel/clp/D-24-S1-HeritageHardshell-Category_Banner-02-Hardshell%201.jpg.sthumbnails.original.webp" alt="Travel Banner" className="img-fluid" />
      </div>
      <p className="mt-5 ms-4" style={{ fontSize: 13 }}><b>Travel | 21 items</b></p>
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

export default Travel;
