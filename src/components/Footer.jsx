import React from 'react';
import '../styles/Footer.css';
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { MdEmail, MdCall } from "react-icons/md";
import { Container, Row, Col, Form } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='mt-5'>
      <Container>
        <Row>
          <Col md={4} className='text-center'>
            <a href=""><img src="https://herschel.com/content/dam/herschel/lifestyle/2023-s3/new-classics/footer-svg/Shipping.svg" alt="" style={{height:75}}/></a>
            <p>Shipping</p>
          </Col>
          <Col md={4} className='text-center'>
            <a href=""><img src="https://herschel.com/content/dam/herschel/lifestyle/2023-s3/new-classics/footer-svg/Warranty.svg" alt="" style={{height:75}}/></a>
            <p>Warranty</p>
          </Col>
          <Col md={4} className='text-center'>
            <a href=""><img src="https://herschel.com/content/dam/herschel/lifestyle/2023-s3/new-classics/footer-svg/Returns.svg" alt="" style={{height:75}}/></a>
            <p>Returns</p>
          </Col>
        </Row>
      </Container>
      
      <Container fluid className='mt-5'>
        <Row>
          <Col md={3}>
            <ul className='list-unstyled ms-3'>
              <li><a href="#" className="text-dark">About Us</a></li>
              <li><a href="#" className="text-dark">Impact</a></li>
              <li><a href="#" className="text-dark">Careers</a></li>
              <li><a href="#" className="text-dark">Website Accessibility</a></li>
              <li><a href="#" className="text-dark">Supply Chain Disclosures</a></li>
              <li><a href="#" className="text-dark">Dealer Portal</a></li>
              <li><a href="#" className="text-dark">Corporate Orders</a></li>
              <li><a href="#" className="text-dark">Terms of Use</a></li>
              <li><a href="#" className="text-dark">Privacy Policy</a></li>
              <li><a href="#" className="text-dark">Brand Protection</a></li>
              <li><a href="#" className="text-dark">Do Not Sell My Info</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className='list-unstyled mt-4'>
              <li><a href="#" className="text-dark">Customer Service</a></li>
              <li><a href="#" className="text-dark">Gift Cards</a></li>
              <li><a href="#" className="text-dark">Returns</a></li>
              <li><a href="#" className="text-dark">Warranty</a></li>
              <li><a href="#" className="text-dark">Find A Store</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <p>Get On The List</p>
            <p>Subscribe for early access to exclusive discounts and partnerships</p>
            <Form.Control type="text" placeholder='Subscribe' className='mt-3' />
            <div className='mt-5'>
              <a href=""><GrInstagram className='text-dark fs-5' /></a>
              <a href=""><ImFacebook2 className='ms-4 text-dark fs-5' /></a>
              <a href=""><FaPinterest className='ms-4 text-dark fs-5' /></a>
              <a href=""><FaTwitter className='ms-4 text-dark fs-5' /></a>
            </div>
          </Col>
          <Col md={3} className='last-column unstyled'>
            <p>Need a hand?</p>
            <a href=""><TbMessageCircle2Filled className='text-dark me-1 fs-5' />Live Chat</a>
            <a href=""><MdEmail className='text-dark ms-4 me-1 fs-5' />Contact Us</a>
            <li className='mt-4'><MdCall className='fs-5' /> 1-888-997-5597</li>
          </Col>
        </Row>
        <hr />
        <div>
          <p style={{ fontSize: 13, paddingLeft: 15 }}>© 2024 Herschel Supply Company</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
