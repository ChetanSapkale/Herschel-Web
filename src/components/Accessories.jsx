import React from 'react';
import '../styles/Accessories.css';
import { Container, Row, Col } from 'react-bootstrap';

const Accessories = () => {
  return (
    <div>
      <div className="banner-img position-relative">
        <h1>Accessories</h1>
        <img src="https://herschel.com/content/dam/herschel/lifestyle/2024-s1/campaigns/weather-resistant/category-pages/D-24-S1-Category_Banner-Accessories.jpg.sthumbnails.original.webp" alt="Accessories Banner" className="img-fluid" />
      </div>
      <Container className="accessories">
        <Row>
          <Col xs={12} className="text-center pt-4">
            <p><b>Shop by Category</b></p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/products/30055/30055-00007-OS_01.jpg.sthumbnails.330.330.webp" alt="Lunch Boxes" className="img-fluid" />
            <p>Lunch Boxes</p>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/lifestyle/2023-s1/homepage-slider/Headwear-homepage.jpg.sthumbnails.330.330.webp" alt="Headwear" className="img-fluid" />
            <p>Headwear</p>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/lifestyle/2023-s1/homepage-slider/Hip-Packs-homepage.jpg.sthumbnails.330.330.webp" alt="Hip Packs" className="img-fluid" />
            <p>Hip Packs</p>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/products/10174/10174-04890-02_01.jpg.sthumbnails.330.330.webp" alt="Tech Sleeves" className="img-fluid" />
            <p>Tech Sleeves</p>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/products/11153/11153-05696-OS_01.jpg.sthumbnails.330.330.webp" alt="Wallets" className="img-fluid" />
            <p>Wallets</p>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="https://herschel.com/content/dam/herschel/products/10727/10727-05698-OS_01.jpg.sthumbnails.330.330.webp" alt="Crossbodies" className="img-fluid" />
            <p>Crossbodies</p>
          </Col>
        </Row>
      </Container>
      <p className="mt-5 ms-4" style={{ fontSize: 13 }}><b>Accessories | 97 items</b></p><br /><hr />
    </div>
  );
};

export default Accessories;
