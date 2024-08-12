import React, { useEffect, useState } from 'react';
import '../styles/Kids.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Kids = () => {
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
  }, [])

  const handleImageClick = (product) => {
    navigate('/description', { state: { product } });
  };


  return (
    <div>
      <div className='banner-image'>
        <h1>Little Herschel</h1>
        <img src="https://herschel.com/content/dam/herschel/lifestyle/2023-s3/little-herschel-refresh/clp-banners/D-S3-23-CLP-Little-Herschel-Kids.jpg.sthumbnails.original.webp" alt="" />
      </div>
      <p className='mt-5 ms-4' style={{ fontSize: 13 }}><b>Kids | 29 items</b></p>
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

export default Kids;
