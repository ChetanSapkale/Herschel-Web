import React from 'react';
import '../styles/Apparel.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Apparel = () => {
  return (
    <div>
      <div className='mt-5 ms-4'>
        <h3>Apparel</h3>
      </div>
      <Container fluid className="apparel">
        <Row>
          <Col xs={12} md={4} className="position-relative mb-4">
            <img src="https://herschel.com/content/dam/herschel/lifestyle/2024-s1/campaigns/lookbook/lookbook-page/M-24-S1-Spring2024_Lookbook-Lookbook_Page-03.jpg.sthumbnails.original.webp" alt="Shop Men's" className="img-fluid" />
            <Button variant="light" className="shop-button">Shop Men's</Button>
          </Col>
          <Col xs={12} md={4} className="position-relative mb-4">
            <img src="https://herschel.com/content/dam/herschel/lifestyle/2024-s1/campaigns/lookbook/lookbook-page/M-24-S1-Spring2024_Lookbook-Lookbook_Page-15.jpg.sthumbnails.original.webp" alt="Shop Women's" className="img-fluid" />
            <Button variant="light" className="shop-button">Shop Women's</Button>
          </Col>
          <Col xs={12} md={4} className="position-relative mb-4">
            <img src="https://herschel.com/content/dam/herschel/lifestyle/2024-s1/campaigns/lookbook/lookbook-page/M-24-S1-Spring2024_Lookbook-Lookbook_Page-06.jpg.sthumbnails.original.webp" alt="Shop Headwear" className="img-fluid" />
            <Button variant="light" className="shop-button">Shop Headwear</Button>
          </Col>
        </Row>
      </Container><br /><br /><hr />
    </div>
  );
};

export default Apparel;
